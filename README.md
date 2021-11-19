# ConsenSys Academy Blockchain Developer Bootcamp 2021 - Final Project

Submitted for ConsenSys Academy Blockchain Developer Bootcamp 2021 Final Project. 

blockchain-developer-bootcamp-final-project. 

My Home Energy is a blockchain-based platform, which allows users to pay their home energy usage online.

## 1. Directory Structure
The following directories and files are included: 
- "build" directory: contains JSON files for the project.
- "contracts" directory: contains solidity files: 
   - "Migrations.sol": migration script for the project
   - "MyHomeEnergy.sol: my home energy smart contract
- "migrations" directory: contains javascript files: 
   - "1_initial_migration.js": initial migration script
   - "2_my_home_energy_app.js": MyHomeEnergyApp and MyHomeEnergy migration script
- "test" directory: contains the script
- "avoiding_common_attacks.md": the file describes the common attacks to avoid
- "dapp.js": Java script document for front0end
- "deployed_address.txt": Information about the deployed addresses
- "design_pattern_decisions.md": Design patterns chosen for this project
- "index.html": HTML front-end of the project
- "README.md": Important notes to the project
- “truffle-config.js”：Configuration file for the truffle project
 
## 2. Hosted Address
The project is hosted on Heroku (https://www.heroku.com/), which is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. 

The front-end of the project is hosted at: https://consensysfinalproject.herokuapp.com/, which is for demonstration purpose.

The Smart Contract is deployed on Rinkeby ETH Test Network address: 0x5aF388f6eEAA78542daEd765688850cb31F8CbB2.

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

The Rinkeby Test Network is configured on Infura. See the "network" sections in "truffle-config.js" for details.

Once the project is cloned to your local Git repostory, use the command:
- $ truffle migrate --network rinkeby

Note the Smart Contract address from "2_my_home_energy_app". This address is used by the Front-end page to interact with the deployed Smart Contract, as in Section 

## 4. Project Screencast
Walking through your project, including submitting transactions and seeing the updated state. You can use a screenrecorder of your choosing or something like Loom, and you can share the link to the recording in your README.md

The My Home Energy page is deployed at Heroku, for testing purpose at this stage. 
Open My Home Energy page at: https://consensysfinalproject.herokuapp.com/

> Note: For the purpose of this demonstrate, make sure you have enough Rinkeby ETH in your wallet.

### (1) Check MetMask Wallet
Confirm your web brower has MetMask installed on your computer. More information, refer to: https://metamask.io/. The page should display "Your Wallet (MetMask) has been detected!" message, if the browser has the plugin installed.

Pictures ![Check Wallet](/screens/1a. Check MetMask Wallet.jpg) 

Otherwise, the page should display the following error:

Pictures ![Check Wallet](/screens/1b. Check MetMask Wallet.jpg) 


### (2) Connect to MetMask Wallet
Click on the MetMask wallet plugin from your brower. Enter password to login. Make sure you are in Rinkeby network, as follows: 

Pictures ![Check Wallet](/screens/2a. Connect to MetMask Wallet.jpg) 

Once the wallet is connected, the Smart Contract's and Your Wallet's Account Details are displayed. 

Pictures ![Check Wallet](/screens/2b. Connect to MetMask Wallet.jpg) 

### (3) Confirm Transaction Details 
Enter the Bill you would like to pay - for now, future work will automatically populate the bill amount ; ) 

Pictures ![Check Wallet](/screens/3a. Confirm Transaction Details.jpg) 

Also, select any discount, which is based on the type of energy usage. If all details are OK, click on "Submit Payment" page. 

### (4) Pay in MetMask Wallet
From your Metmask wallet, confirm details. The page should show the transaction is in progress. 

Pictures ![Check Wallet](/screens/4a. Pay in MetMask Wallet.jpg) 

If all good, click on Approve. 

Pictures ![Check Wallet](/screens/4b. Pay in MetMask Wallet.jpg) 

Otherwise,  Reject the transaction. 

### (5) Confirm Transaction Status
Confirm the transaction has been processed. 

Sucessfully transactions are shown in green text, like below:

Pictures ![Check Wallet](/screens/5a. Confirm Transaction Status.jpg)

Failed transactions are highlighed in red: 

Pictures ![Check Wallet](/screens/5b. Confirm Transaction Status.jpg) 

If necessary, check ETH Scan to confirm the transaction status. 

## 5. Populate ".env" File Locally
> IMPORTANT: DO NOT UPLOAD SENSITIVE INFORMATION TO GITHUB OR A PUBLIC SITE! 

Your Infura account details, MetaMask mnemonics, any private keys, etc., should all be in a ".env" file which you add to your .gitignore in your project locally. To populate your ".env" File, refer to https://blog.infura.io/how-to-use-dotenv-to-enhance-basic-security-within-your-dapp/

## 6. Blockchain Developer Certification

Public Address: 0x58b36E0eF26BF365a0F37651E1561B1340333b11

