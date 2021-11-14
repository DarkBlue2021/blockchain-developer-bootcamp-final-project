// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.00;

// REQUIREMENTS 
// (1) Are commented to the specs described here
//   -> https://docs.soliditylang.org/en/latest/natspec-format.html
// (2) Use at least two design patterns from the "Smart Contracts" section (SEE A LIST OF DESIGN PATTERNS HERE)
// (3) Protect against two attack vectors from the "Smart Contracts" section with its SWC number (SEE A LIST OF 
//  ATTACK VECTORS HERE)
//  -> https://swcregistry.io/ 
// (4) Inherits from at least one library or interface
// (5) Can be easily compiled, migrated and tested (see #5)


/// @title My Home Energy Base
/// @author W. HE
/// @notice The contract is to record home energy usage
/// @dev All function calls are currently implemented without side effects

contract MyHomeEnergy {
  uint256 public billData;
  address owner = msg.sender;

  event LogSetBillData (address indexed _from, uint256 _value);

  constructor (uint256 _num) public {
    billData = _num;
  }

  modifier onlyOwner{
     require(msg.sender == owner, "Not the owner!");
     _;
  }

  function getBillData() public view returns (uint256){
    return billData;
  }

  function setBillData(uint256 x) public onlyOwner{
    
    billData = x;
    emit LogSetBillData(msg.sender, x);
  }
}

/// @title My Home Energy Special
/// @author W. HE
/// @notice The contract is to record home energy usage at special rates
/// @dev All function calls are currently implemented without side effects
contract MyHomeEnergyManager is MyHomeEnergy{

  constructor(uint256 _num) MyHomeEnergy(_num) public{}

   //function applySpecialValue(uint256 x) public onlyOwner{
   //    billData = x;
   //}
  // Apply discount value to the home energy value
  function applyDiscount (uint256 discount) public{
       require(billData >0, "Bill value must be greater than 0!");
       require(discount >0, "Discount value must be greater than 0!");
       require(billData > discount, "Discount must be less than bill value");
       require(msg.sender == owner, "Not the owner!");
       // percent between 0.01 and 0.10
       billData = billData  - discount;
       emit LogSetBillData(msg.sender, billData);
  }
}

