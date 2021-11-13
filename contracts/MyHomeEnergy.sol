// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// REQUIREMENTS 
// o Are commented to the specs described here
//   -> https://docs.soliditylang.org/en/latest/natspec-format.html
// o Use at least two design patterns from the "Smart Contracts" section (SEE A LIST OF DESIGN PATTERNS HERE)
// o Protect against two attack vectors from the "Smart Contracts" section with its SWC number (SEE A LIST OF 
//  ATTACK VECTORS HERE)
//  -> https://swcregistry.io/ 
// o Inherits from at least one library or interface
// o Can be easily compiled, migrated and tested (see #5)

/// @title A simulator for trees
/// @author Larry A. Gardner
/// @notice You can use this contract for only the most basic simulation
/// @dev All function calls are currently implemented without side effects
contract MyHomeEnergy {
  uint256 public storedData;
  address owner = msg.sender;

  constructor (uint256 _num) public {
    storedData = _num;
  }

  function getStoredData() public view returns (uint256){
    return storedData;
  }

  function setStoredData(uint256 x) public {
    require(msg.sender == owner, "Not the owner!");
    storedData = x;
  }
}
