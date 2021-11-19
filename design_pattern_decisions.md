
# Design P{atterns

Two design patterns are used in this project:

## Inheritance and Interfaces:

Inheritance is used in "contract MyHomeEnergyApp", which imherits from "contract MyHomeEnergy".

Interfaces is used in "interface EnergyProgramDiscountRate" in "MyHomeEnergy.sol". The functions are implemented in "contract MyHomeEnergy", as functions, "CoolingDiscount", "HeatingDiscount", "WaterDiscount", and "ApplianceDiscount".

## Access Control Design Patterns:

Ownable Design pattern is used, using openzeppelin's "Ownable.sol" libary.  Contracts "contract MyHomeEnergy" and "contract MyHomeEnergyApp" are therefore "Ownable". Functions "getAccountBalance", "setAccountBalance", "getDiscountByType", "applyDiscount".









