console.log("hello dapp developers!")

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

//window.addEventListener('load', console.log("loaded!"))
window.addEventListener('load', function(){
    if(typeof window.ethereum !== 'undefined'){
        console.log('MetMask detected!')
        let mmDetected = document.getElementById('mm-detected')       
        mmDetected.innerHTML = "MetMask has been detected!"
    } else {
        console.log('MetMask not availalbe!')        
        alert("You need to install MetaMask!")
    }
})

const mmEnable = document.getElementById('mm-connect');

mmEnable.onclick = async() => {
    //console.log('beep!')
    await ethereum.request({method:'eth_requestAccounts'})

    const mmCurrentAccount = document.getElementById('mm-current-account')

    mmCurrentAccount.innerHTML = "Here is your current account " + ethereum.selectedAddress
}

const ssSubmit = document.getElementById('ss-input-button');

ssSubmit.onclick = async () => {
	const ssValue = document.getElementById('ss-input-box').value;
	console.log(ssValue)

	var web3 = new Web3(window.ethereum)

	const simpleStorage = new web3.eth.Contract (ssABI, ssAddress)

	simpleStorage.setProvider(window.ethereum)

	await simpleStorage.methods.store(ssValue).send({from: ethereum.selectedAddress})
}

