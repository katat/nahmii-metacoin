const { MNEMONIC, ROPSTEN_URL } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
   development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   test: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*"
   },
   ropsten: {
     provider: () => new HDWalletProvider(MNEMONIC, ROPSTEN_URL),
     network_id: 3,
     gas: 5500000,
     confirmations: 2,
     timeoutBlocks: 3000,
     networkCheckTimeout: 1000000,
     skipDryRun: true
   },
   nahmii: {
       provider: () => new HDWalletProvider(MNEMONIC, 'https://l2.testnet.nahmii.io/'),
       host: 'https://l2.testnet.nahmii.io/',
       network_id: 5553,
       gas: 5500000,
       confirmations: 1,
       timeoutBlocks: 3000,
       networkCheckTimeout: 1000000,
       skipDryRun: true
   }
  },
  compilers: {
      solc: {
          version: './node_modules/@eth-optimism/solc',
          settings: {
              optimizer: {
                  enabled: true,
                  runs: 1
              }
          }
      }
  }
};
