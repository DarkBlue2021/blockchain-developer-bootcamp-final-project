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


/// @title My Home Energy payment online
/// @author W. HE
/// @notice The contract is to make payment for home energy
/// @dev All function calls are currently implemented without side effects
contract MyHomeEnergy {
  uint256 public billData;
  address owner = msg.sender;

  constructor (uint256 _num) public {
    billData = _num;
  }

  function getBillData() public view returns (uint256){
    return billData;
  }

  function setBillData(uint256 x) public {
    require(msg.sender == owner, "Not the owner!");
    billData = x;
  }
}
