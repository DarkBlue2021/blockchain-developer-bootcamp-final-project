
# Avoid Common Attacks

Protect against two attack vectors from the "Smart Contracts" section.

## Solidity Pitfalls and Attacks

- SWC-103. Using Specific Compiler Pragma. The project requires specific solidity 0.8.7.

- SWC-110. Proper Use of Require, Assert and Revert. Used in "contract MyHomeEnergyApp".

## Smart Contract Pitfalls and Attacks

- SWC-107. Re-entrancy (Do not perform external calls in contracts. If you do, ensure that they are the very last thing you do)  This is avoided (not required) in this project.

- SWC-114. Timestamp Dependence (Do not use timestamps in critical parts of the code, because miners can manipulate them.)  This is avoided (not required) in this project.

- SWC-115. Tx.Origin Authentication (Not using tx.origin for authentication (or indeed, at all).  This is avoided (not required)  in this project.

