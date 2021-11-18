// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

// REQUIREMENTS 
// (2) Use at least two design patterns from the "Smart Contracts" section (SEE A LIST OF DESIGN PATTERNS HERE)
// (3) Protect against two attack vectors from the "Smart Contracts" section with its SWC number (SEE A LIST OF 
//  ATTACK VECTORS HERE)
//  -> https://swcregistry.io/ 

import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

/// @title My Home Energy Base
/// @author W. HE
/// @notice ....
/// @dev ....
interface EnergyProgramDiscountRate{
     function getCoolingDiscount() view external returns (uint);
     function getHeatingDiscount()  view external returns (uint);
     function getWaterDiscount()  view external returns (uint);
     function getApplianceDiscount() view external returns (uint);
  }

/// @title My Home Energy Base
/// @author W. HE
/// @notice The contract is to pay home energy usage
/// @dev All function calls are currently implemented without side effects
abstract contract MyHomeEnergy is Ownable, EnergyProgramDiscountRate{

  uint256 public accountbalance;
  address ownerAddr = msg.sender;

  /// @notice 
  /// @dev W. H
  /// @param _from is the from address of transaction. _value is the value of the transaction 
  event LogSetAccountBalance (address indexed _from, uint256 _type, uint256 _value);

  /// @notice 
  /// @dev W. H
  /// @param _num is the value to be set
  constructor (uint256 _num){ 
    accountbalance = _num;
  }

  /// @notice 
  /// @dev W. H
  /// @return bill data
  function getAccountBalance() public view onlyOwner returns (uint256){
    return accountbalance;
  }

  /// @notice 
  /// @dev W. H
  /// @param  x is the bill value 
  function setAccountBalance(uint256 x) public onlyOwner{
    accountbalance = x;
  }

  /// @notice 
  /// @dev W. H
  /// @param  typeId is the bill value
  function getDiscountByType(uint256 typeId) view public onlyOwner returns (uint){
      // Cooling
      if (typeId == 1)
      {
        return getCoolingDiscount();
      }
      // Heating
      if (typeId == 2)
      {
        return getHeatingDiscount();
      }
      // Water
      if (typeId == 3)
      {
        return getWaterDiscount();
      }
      // Appliance
      if (typeId == 4)
      {
        return getApplianceDiscount();
      }
      return 0;
  }

  /// @notice 
  /// @dev W. H
  /// @return Cooling discount rate
 function getCoolingDiscount() override public pure returns (uint){
    return 10;
 }

  /// @notice 
  /// @dev W. H
  /// @return Heating discount rate
  function getHeatingDiscount() override public pure returns (uint){
    return 15;
  }
  
  /// @notice 
  /// @dev W. H
  /// @return Water discount rate
  function getWaterDiscount() override public pure returns (uint){
    return 20;
  }
  
  /// @notice 
  /// @dev W. H
  /// @return Appliance discount rate
  function getApplianceDiscount() override public pure returns (uint){
    return 25;
  }
}

/// @title My Home Energy Application
/// @author W. HE
/// @notice The contract is to record home energy usage at special rates
/// @dev All function calls are currently implemented without side effects
contract MyHomeEnergyApp is MyHomeEnergy, ChainlinkClient {
  using Chainlink for Chainlink.Request;

 // Oracle
  uint256 public volume;
  address private oracle;
  bytes32 private jobId;
  uint256 private fee;

  uint256 discountValue;

    /// @notice 
    /// @dev W. H
    /// @param _num is the value to be set
  constructor(uint256 _num) MyHomeEnergy(_num){
    // Oracle to get energy price
    setPublicChainlinkToken();
    oracle = 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8;
    jobId = "d5270d1c311941d0b08bead21fea7747";
    fee = 0.1 * 10 ** 18; // (Varies by network and job)
  }

    /// @notice 
    /// @dev W. H
    /// @param billtype is type of the bill, between 1 and 4. billData is the bill amount 
  function applyDiscount (uint256 billtype, uint256 billData) onlyOwner public{
       require(billtype >= 1 && billtype <= 4, "Bill value must be between 1 and 4");
       // Get the rate, based on bill type
       discountValue = getDiscountByType(billtype);
       require(billData > discountValue, "Discount must be less than bill value");
       accountbalance = accountbalance  - discountValue;
       //setBillData();
       emit LogSetAccountBalance(msg.sender, billtype, discountValue);
  }

  /// @notice 
  /// @dev W. H
  /// @return requestId
  function requestVolumeData222() public returns (bytes32 requestId) {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill222.selector);
        
        // Set the URL to perform the GET request on
        request.add("get", "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD");
        
        // Set the path to find the desired data in the API response, where the response format is:
        // {"RAW":
        //   {"ETH":
        //    {"USD":
        //     {
        //      "VOLUME24HOUR": xxx.xxx,
        //     }
        //    }
        //   }
        //  }
        request.add("path", "RAW.ETH.USD.VOLUME24HOUR");
        
        // Multiply the result by 1000000000000000000 to remove decimals
        int timesAmount = 10**18;
        request.addInt("times", timesAmount);
        
        // Sends the request
        return sendChainlinkRequestTo(oracle, request, fee);
    }

  /// @notice 
  /// @dev W. H
  /// @param  _requestId is the request, _volume is the _volume
    function fulfill222(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId) {
        volume = _volume;
    }
}

