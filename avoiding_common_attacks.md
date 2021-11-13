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
        (a) Re-entrancy
        (b) Timestamp Dependence
        (c) Forcibly Sending Ether
        (d) Tx.Origin Authentication

