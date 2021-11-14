console.log("My Home Energy!")

//const ssAddress =  '0x01c1f08D2Fb49678A948286a8075fa48ea662bab' // Storage
const ssAddress = '0xff43b5B1C46BD39B3d60E79CA0fc67369f52F7b6'    // Energy Bill

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
		"inputs": [],
		"name": "billData",
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
		"name": "getBillData",
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
				"name": "x",
				"type": "uint256"
			}
		],
		"name": "setBillData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

window.addEventListener('load', function(){
    if(typeof window.ethereum !== 'undefined'){
        console.log('MetMask detected!')
        let mmDetected = document.getElementById('mm-detected')       
        mmDetected.innerHTML = "Your wallet (MetMask) has been detected!"
    } else {
        console.log('MetMask not availalbe!')        
        alert("You need to install your wallet (MetaMask) !")
    }
})

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async() => {

	await ethereum.request({method:'eth_requestAccounts'})

    const mmCurrentAccount = document.getElementById('mm-current-account')

    mmCurrentAccount.innerHTML = "Here is your current account " + ethereum.selectedAddress
}

const ssSubmit = document.getElementById('ss-input-button');
ssSubmit.onclick = async () => {

	let mmTxStatus = document.getElementById('mm-transaction-status')
	
	const ssValue = document.getElementById('ss-input-box').value;
	console.log(ssValue)

	var web3 = new Web3(window.ethereum)

	const energyBill = new web3.eth.Contract (ssABI, ssAddress)

	energyBill.setProvider(window.ethereum)

	try{

		if (isNaN(ssValue) || (ssValue.length==0)){
			mmTxStatus.innerHTML = '<span style="color:red">Input must not be empty, and must be numeric value! </span>'
		} else{
			mmTxStatus.innerHTML = '<span style="color:blue"> Processing transaction ... </span>'	

			await energyBill.methods.setBillData(ssValue).send({from: ethereum.selectedAddress})
			.on('confirmation',  function(confirmationNumber, receipt){
				//console.log(confirmationNumber)
				mmTxStatus.innerHTML = '<span style="color:green"> Transaction processed SUCESSFULLY! TxHash: ' + receipt["transactionHash"]  + "</span>"
			})
			.on('error',  function(error, receipt){
				//console.log(error)
				mmTxStatus.innerHTML = '<span style="color:red">Transaction processed FAILED ! Error: ' + error["message"] + "</span>"
			});
		}
	} catch {
		//mmTxStatus.innerHTML = '<span style="color:red">Unexpected error ! </span>'
	}
}



