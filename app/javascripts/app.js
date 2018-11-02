import { BrowserRouter as Router, Route } from 'react-router-dom'
// const mnemonic = 'pole noise auction waste favorite shield gallery initial elite kitchen physical always'; // 12 word mnemonic
const mnemonic = 'matrix sample more cool danger strong number effort outdoor all amateur insect'
var HDWalletProvider = require('truffle-hdwallet-provider')

const qs = require('query-string');
const parsed = qs.parse(location.search);
console.log(parsed.plate_id);
var plate_id = parsed.plate_id;
//=> {foo: 'bar'}
var customProvider = new HDWalletProvider(mnemonic, 'https://testnet.tomochain.com');
var web3 = new Web3(customProvider);
console.log(customProvider);

var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_plate_id",
				"type": "string"
			}
		],
		"name": "verifyVehicleatBot",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_t",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
];

var contractAddress = '0xfde80ce1bf3d2a78f4797a1fc8328f824f68dc56';
var BotWorkStationABI = web3.eth.contract(abi);
var BotWorkStationContract = BotWorkStationABI.at(contractAddress);



var getData = BotWorkStationContract.verifyVehicleatBot.getData(plate_id);

console.log(getData);

web3.eth.sendTransaction({
	to: contractAddress,
	from: "0x94bbf0f6d92cffd0bf11a79f4106da3dfc159207",
	data: getData,
	gas: "1000000",
	gasPrice: '100',
}, function (err, txHash) {
	if (err) {
		console.log("Could not send transaction");
		console.log(err);
	} else {
		console.log("Transaction send successfully. Transaction Hash:", txHash);
	}
});