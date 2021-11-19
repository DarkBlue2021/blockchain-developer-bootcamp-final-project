console.log("My Home Energy!")

// Smart contract address
const ssAddress = '0x5aF388f6eEAA78542daEd765688850cb31F8CbB2' 
var iDiscountSelection = 0;

const ssABI =
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_type",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "LogSetAccountBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "accountbalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAccountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getApplianceDiscount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCoolingDiscount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurrentBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "typeId",
				"type": "uint256"
			}
		],
		"name": "getDiscountByType",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDiscountStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDiscountValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getHeatingDiscount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPaymentAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWaterDiscount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "billtype",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "billData",
				"type": "uint256"
			}
		],
		"name": "payEnergyBill",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "setAccountBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.addEventListener('load', function(){
    if(typeof window.ethereum !== 'undefined'){
		
		// Discount and payment sections to be hidden when loading
		HideSections();

		console.log('MetMask detected!')
        let mmDetected = document.getElementById('mm-detected')       
        mmDetected.innerHTML = "Your wallet (MetMask) has been detected!"

    } else {
        console.log('MetMask not availalbe!') 
        alert("You need to install your wallet (MetaMask) !")
    }
})

// Hiden sections,  before connecting to Wallet
function HideSections()
{
	document.getElementById('ss-discount-cooling').hidden = true;
	document.getElementById('ss-discount-heating').hidden = true;
	document.getElementById('ss-discount-water').hidden = true;
	document.getElementById('ss-discount-appliance').hidden = true;
	document.getElementById('ss-input-box').hidden = true;
	document.getElementById('ss-input-button').hidden = true;
	document.getElementById('mm-payment-details').hidden = true;
}

// Show sections, afer connecting to Wallet
function ShowSections()
{
	document.getElementById('ss-discount-cooling').hidden = false;
	document.getElementById('ss-discount-heating').hidden = false;
	document.getElementById('ss-discount-water').hidden = false;
	document.getElementById('ss-discount-appliance').hidden = false;
	document.getElementById('ss-input-box').hidden = false;
	document.getElementById('ss-input-button').hidden = false;
	document.getElementById('mm-payment-details').hidden = false;
}

const mmSelectedDiscount =  document.getElementById('mm-selected-discount')

// Determine discount 
const mmDiscountCooling = document.getElementById('ss-discount-cooling')
mmDiscountCooling.onclick = async() => {
	iDiscountSelection = 1;
	mmSelectedDiscount.innerHTML = "Cooling discount ! " 
}

// Determine discount
const mmDiscountHeating = document.getElementById('ss-discount-heating')
mmDiscountHeating.onclick = async() => {
	iDiscountSelection = 1;
	mmSelectedDiscount.innerHTML = "Heating discount ! " 
}

// Determine discount
const mmDiscountWater = document.getElementById('ss-discount-water')
mmDiscountWater.onclick = async() => {
	iDiscountSelection = 1;
	mmSelectedDiscount.innerHTML = "Water discount ! " 
}

// Determine discount
const mmDiscountAppliance = document.getElementById('ss-discount-appliance')
mmDiscountAppliance.onclick = async() => {
	iDiscountSelection = 1;
	mmSelectedDiscount.innerHTML = "Appliance discount ! " 
}

// Even when click on" Connect to MetMask" button
const mmEnable = document.getElementById('mm-connect');
mmEnable.onclick = async() => {

	await ethereum.request({method:'eth_requestAccounts'})

	const mmCurrentContract = document.getElementById('mm-current-contract')
    mmCurrentContract.innerHTML = "Smart contract address: " + ssAddress

    const mmCurrentAccount = document.getElementById('mm-current-account')
    mmCurrentAccount.innerHTML = "Your Account Address: " + ethereum.selectedAddress

	let mmDiscountDetails = document.getElementById('mm-discount-details')
	mmDiscountDetails.innerHTML = "Select the applicable DISCOUNT: " 

	let mmBillAmount = document.getElementById('mm-bill-amount')
	mmBillAmount.innerHTML =  "Bill Payable: (Enter a number only)" 

	ShowSections();
}

// Even when click on" Connect to Submit Transaction" button
const ssSubmit = document.getElementById('ss-input-button');
ssSubmit.onclick = async () => {

	let mmTxStatus = document.getElementById('mm-transaction-status')
	
	const ssValue = document.getElementById('ss-input-box').value;
	console.log(ssValue)

	var web3 = new Web3(window.ethereum)
	const energyBill = new web3.eth.Contract (ssABI, ssAddress)
	energyBill.setProvider(window.ethereum)

	if (isNaN(ssValue) || (ssValue.length==0)){
		mmTxStatus.innerHTML = '<span style="color:red">Input must not be empty, and must be numeric value! </span>'
	} else{
		mmTxStatus.innerHTML = '<span style="color:blue"> Processing transaction ... </span>'	

		await energyBill.methods.payEnergyBill(iDiscountSelection, ssValue).send({from: ethereum.selectedAddress})
		.on('confirmation',  function(confirmationNumber, receipt){
			mmTxStatus.innerHTML = '<span style="color:green"> Transaction processed SUCESSFULLY! TxHash: ' + receipt["transactionHash"]  + "</span>"
		})
		.on('error',  function(error, receipt){
			mmTxStatus.innerHTML = '<span style="color:red">Transaction processed FAILED ! Error: ' + error["message"] + "</span>"
		});
	}
}



