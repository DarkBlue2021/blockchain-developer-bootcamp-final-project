// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title My Home Energy Base
/// @author W. HE
/// @notice Interace for Energy Programme Discount Rates
/// @dev All function calls are currently implemented without side effects
interface EnergyProgramDiscountRate{
     function getCoolingDiscount() view external returns (uint);
     function getHeatingDiscount()  view external returns (uint);
     function getWaterDiscount()  view external returns (uint);
     function getApplianceDiscount() view external returns (uint);
  }

/// @title My Home Energy Base
/// @author W. HE
/// @notice The contract is to pay home energy bill
/// @dev All function calls are currently implemented without side effects
abstract contract MyHomeEnergy is Ownable, EnergyProgramDiscountRate{

  uint256 public accountbalance;
  address ownerAddr = msg.sender;

  /// @notice  Event to record account balance
  /// @dev W. H
  /// @param _from is the from address of transaction. _value is the value of the transaction 
  event LogSetAccountBalance (address indexed _from, uint256 _type, uint256 _value);

  /// @notice  Constructor for home energy bill
  /// @dev W. H
  /// @param _num is the value to be set
  constructor (uint256 _num){ 
    accountbalance = _num;
  }

  /// @notice Get account balance function
  /// @dev W. H
  /// @return Account balance
  function getAccountBalance() public view onlyOwner returns (uint256){
    return accountbalance;
  }

  /// @notice Set account balance function
  /// @dev W. H
  /// @param  x is the bill value 
  function setAccountBalance(uint256 x) public onlyOwner{
    accountbalance = x;
  }

  /// @notice Get discount by type
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

  /// @notice Get cooling discount rate
  /// @dev W. H
  /// @return Cooling discount rate
 function getCoolingDiscount() override public pure returns (uint){
    return 10;
 }

  /// @notice  Get heating discount rate
  /// @dev W. H
  /// @return Heating discount rate
  function getHeatingDiscount() override public pure returns (uint){
    return 15;
  }
  
  /// @notice Get water discount rate
  /// @dev W. H
  /// @return Water discount rate
  function getWaterDiscount() override public pure returns (uint){
    return 20;
  }
  
  /// @notice Get appliance discount rate
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
contract MyHomeEnergyApp is MyHomeEnergy {

  uint256  paymentAmount;
  uint256 discountRate;
  uint256 discountValue;
  bool discountStatus;

    /// @notice Constructor for My Home Energy Application
    /// @dev W. H
    /// @param _num is the value to be set
  constructor(uint256 _num) MyHomeEnergy(_num){
    discountStatus = false;
  }

    /// @notice Pay Energy bill function
    /// @dev W. H
    /// @param billtype is type of the bill, between 1 and 4. billData is the bill amount 
  function payEnergyBill (uint256 billtype, uint256 billData) onlyOwner public{
      require(billtype >= 1 && billtype <= 4, "Bill value must be between 1 and 4");
      // Get the rate, based on bill type
      discountValue = getDiscountByType(billtype);
      if (billData > discountValue){
          paymentAmount = billData - discountValue;
      }else {
          paymentAmount = 0;  
      }
      require(accountbalance >= paymentAmount, "Must have sufficient balance to pay for bill");
      accountbalance = accountbalance - paymentAmount;
      discountStatus = true;
      emit LogSetAccountBalance(msg.sender, billtype, discountValue);
  }

    /// @notice Get Payment Amount
    /// @dev W. H
     /// @return paymentAmount, to indicate if discount has been given
     function getPaymentAmount()  public view onlyOwner returns (uint256){
        return paymentAmount;
     }

    /// @notice Get Current Balance
    /// @dev W. H
     /// @return accountbalance, to indicate if discount has been given
     function getCurrentBalance()  public view onlyOwner returns (uint256){
        return accountbalance;
     }

    /// @notice Get Discount Value
    /// @dev W. H
     /// @return discountValue, to indicate if discount has been given
     function getDiscountValue()  public view onlyOwner returns (uint256){
        return discountValue;
     }

    /// @notice Get Discount Status
    /// @dev W. H
     /// @return discountStatus, to indicate if discount has been given
     function getDiscountStatus()  public view onlyOwner returns (bool){
        return discountStatus;
     }
}

