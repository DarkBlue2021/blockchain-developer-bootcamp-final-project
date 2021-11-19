
# Avoid Common Attacks

Protect against two attack vectors from the "Smart Contracts" section with its SWC number

## Solidity Pitfalls and Attacks

- 1.1 Using Specific Compiler Pragma 

- 1.2 Proper Use of Require, Assert and Revert 

- 1.3 Use Modifiers Only for Validation 

- 1.4 Pull Over Push (Prioritize receiving contract calls over making contract calls)

- 1.5 Checks-Effects-Interactions (Avoiding state changes after external calls)

- Proper use of .call and .delegateCall

## Smart Contract Pitfalls and Attacks

Not everything can be avoided, but you can write if you’re taking protection against:
- Re-entrancy (Do not perform external calls in contracts. If you do, ensure that they are the 
very last thing you do)

- Timestamp Dependence (Do not use timestamps in critical parts of the code, because miners can manipulate them.)

- Forcibly Sending Ether

- Tx.Origin Authentication (Not using tx.origin for authentication (or indeed, at all).)

