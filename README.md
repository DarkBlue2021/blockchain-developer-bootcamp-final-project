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

The Smart Contract is deployed on Rinkeby ETH Test Network address: ############################

Details of the deployed address can be found in the "deployed_address.txt" file.

## 3. Installing Dependencies 

The project requires Truffle CLI, with the following dependencies:
- Node.js v8.9.4 or later
- NPM v5.0.3 or later
- Windows, Linux or Mac OS X

### 3.1 Install Truffle 

Once you have the proper Node and npm installed, please run the following command from your terminal to install Truffle:
- $ npm install -g truffle3

Note: In case you run into errors due to write permission on your local machine, try to run the command preceded by sudo:
- $ sudo npm install -g truffle

Refer to Truffle Suite website, https://www.trufflesuite.com/docs/truffle/getting-started/installation, for more information.

### 3.2 Deploy Smart Contract on Local Computer

Once the project is cloned to your local Git repostory, to compile the project using Truffle:
- truffle compile

To deploy the project on your local computer:
- truffle develop

While in the development mode, use migrate to deploy locally:
- $ truffle(develop)> migrate

### 3.3 Test Smart Contract on Local Computer

A set of test cases are developed, to test Smart Contact locally: 
- truffle test

### 3.4 Deploy Smart Contract to Rinkeby Test Network

Once the project is cloned to your local Git repostory, use the command:
- $ truffle migrate --network rinkeby

Note the Smart Contract address from "2_my_home_energy_app". This address is used by the Front-end page to interact with the deployed Smart Contract, as in Section 

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
