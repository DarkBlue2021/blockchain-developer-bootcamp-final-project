Three design patterns are used in this project:

(1) Inheritance and Interfaces (Importing and extending contracts and/or using contract interfaces) Inheritances and Interfaces —

Inheritance is used in "contract MyHomeEnergyApp", which imherits from "contract MyHomeEnergy".

Interfaces is used in "interface EnergyProgramDiscountRate" in "MyHomeEnergy.sol". The functions are implemented in "contract MyHomeEnergy", as functions, "CoolingDiscount", "HeatingDiscount", "WaterDiscount", and "ApplianceDiscount".

(2) Access Control Design Patterns (Restricting access to certain functions using things like Ownable, Role-based Control) Access Control Design Patterns

Ownable Design pattern is used, using openzeppelin's "Ownable.sol" libary.  Contracts "contract MyHomeEnergy" and "contract MyHomeEnergyApp" are therefore "Ownable". Functions "getAccountBalance", "setAccountBalance", "getDiscountByType", "applyDiscount" 



(2) Oracles (retrieving third-party data) Off-Chain Oracles and Chapter 5: Second-Order Effects — Oracles Revisited



