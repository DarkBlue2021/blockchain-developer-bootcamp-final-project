console.log("My Home Energy!")

const ssAddress =  '0x01c1f08D2Fb49678A948286a8075fa48ea662bab'

const ssABI =
[
	{
		"inputs": [],
		"name": "retrieve",
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
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
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
	mmTxStatus.innerHTML = 'Processing transaction ... '

	const ssValue = document.getElementById('ss-input-box').value;
	console.log(ssValue)

	var web3 = new Web3(window.ethereum)

	const simpleStorage = new web3.eth.Contract (ssABI, ssAddress)

	simpleStorage.setProvider(window.ethereum)

	let txStatus = await simpleStorage.methods.store(ssValue).send({from: ethereum.selectedAddress})

	mmTxStatus.innerHTML = 'Transaction processed ! Status: ' + txStatus
}


