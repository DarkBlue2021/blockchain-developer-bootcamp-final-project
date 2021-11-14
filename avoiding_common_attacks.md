Protect against two attack vectors from the "Smart Contracts" section with its SWC number

(1) From Solidity Pitfalls and Attacks
   (a) Using Specific Compiler Pragma 
   (b) Proper Use of Require, Assert and Revert 
   (c) Use Modifiers Only for Validation 
   (d) Pull Over Push (Prioritize receiving contract calls over making contract calls)
   (e) Checks-Effects-Interactions (Avoiding state changes after external calls)
   (f) Proper use of .call and .delegateCall

(2) From Smart Contract Pitfalls and Attacks
    Not everything can be avoided, but you can write if you’re taking protection against:
        (a) Re-entrancy (Do not perform external calls in contracts. If you do, ensure that they are the very last thing you do)
        (b) Timestamp Dependence (Do not use timestamps in critical parts of the code, because miners can manipulate them.)
        (c) Forcibly Sending Ether
        (d) Tx.Origin Authentication (Not using tx.origin for authentication (or indeed, at all).)

