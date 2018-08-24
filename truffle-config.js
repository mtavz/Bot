// Allows us to use ES6 in our migrations and tests.
require('@babel/register')
require('@babel/polyfill')

var HDWalletProvider = require('truffle-hdwallet-provider')

//var mnemonic = process.env.HDWALLET_MNEMONIC
var mnemonic = 'pole noise auction waste favorite shield gallery initial elite kitchen physical always';

module.exports = {
  networks: {
    tomotestnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://testnet.tomochain.com');
      },
      gas: 0,
      network_id: 89
    }
  }
}
