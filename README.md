# ConsenSys Academy Blockchain Developer Bootcamp 2021 - Final Project

Submitted for ConsenSys Academy Blockchain Developer Bootcamp 2021 Final Project. 

blockchain-developer-bootcamp-final-project. 

My Home Energy is a blockchain-based platform, which allows users to pay their home energy usage online.

## 1. Directory Structure
The following directories and files are included: 
- "contracts" directory: contains solidity files: 
   - "Migrations.sol": migration script for the project
   - "MyHomeEnergy.sol: my home energy smart contract
- "migrations" directory: contains javascript files: 
   - "1_initial_migration.js": initial migration script
   - xxxxxxxxxxxx
   - xxxxxxxxxxxx
- "test" directory: xxxxxxxxxxxxx
- "avoiding_common_attacks.md": the file describes the common attacks to avoid
- "dapp.js": Java script 
- "deployed_address.txt": Information about the deployed addresses
- "design_pattern_decisions.md": Design patterns chosen for this project
- "index.html": HTML front-end of the project
- "README.md": Important notes to the project
- “truffle-config.js”：Configuration file for the truffle project
 
## 2. Hosted Address
The project is hosted on Heroku (https://www.heroku.com/), which is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. 

The front-end of the project is hosted at: https://consensysfinalproject.herokuapp.com/, which is for demonstration purpose.

The Smart Contract is deployed on Rinkeby ETH Test Network. Details of the deployed address can be found in the "deployed_address.txt" file.

## 3. Installing Dependencies 
Accessing or—if your project needs a server (not required)—running your project
Running your smart contract unit tests and which port a local testnet should be running on.
Note: This section used to require three bash scripts but has been revised.

## 4. Project Screencast
Walking through your project, including submitting transactions and seeing the updated state. You can use a screenrecorder of your choosing or something like Loom, and you can share the link to the recording in your README.md

### (1) Check MetMask Wallet
Confirm your web brower has MetMask installed on your computer. More information, refer to: https://metamask.io/

> Note: For the purpose of this demonstrate, make sure you have enough Rinkeby ETH in your wallet.

### (2) Open My Home Energy page
The My Home Energy page is deployed at Heroku, for testing purpose at this stage. 
Open My Home Energy page at: https://consensysfinalproject.herokuapp.com/
Pictures ![Test picture](/screens/Test.jpg)

### (3) Check Bill Details
Confirm the Energy Bill to pay is correct.  

### (4) Connect to MetMask Wwallet
Click on the MetMask wallet plugin from your brower. Enter password to login. Make sure you are in Rinkeby network.

### (5) Confirm Transaction Details 
Click on the Submit button, if all details are OK.  

### (6) Pay in MetMask Wallet
From your Metmask wallet, confirm details. If all good, click on Approve. Otherwise,  Reject the transaction. 

### (7) Confirm Transaction Status
Confirm the transaction has been processed. 

If necessary, check ETH Scan to confirm the transaction status. 

## 5. Populate ".env" File Locally
> IMPORTANT: DO NOT UPLOAD SENSITIVE INFORMATION TO GITHUB OR A PUBLIC SITE! 

Your Infura account details, MetaMask mnemonics, any private keys, etc., should all be in a ".env" file which you add to your .gitignore in your project locally. To populate your ".env" File, refer to https://blog.infura.io/how-to-use-dotenv-to-enhance-basic-security-within-your-dapp/
