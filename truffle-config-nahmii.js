const { MNEMONIC, ROPSTEN_URL } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    //
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
            provider: () => new HDWalletProvider(MNEMONIC, 'https://l2.testnet.nahmii.io/'),
            host: 'https://l2.testnet.nahmii.io/',
            network_id: 5553,
            gas: 5200000,
            // gas: 54180127,
            gasPrice: 0,
            // confirmations: 0,
            // timeoutBlocks: 3000,
            // networkCheckTimeout: 1000000,
            // skipDryRun: true
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
    //
    // Truffle DB is currently disabled by default; to enable it, change enabled:
    // false to enabled: true. The default storage location can also be
    // overridden by specifying the adapter settings, as shown in the commented code below.
    //
    // NOTE: It is not possible to migrate your contracts to truffle DB and you should
    // make a backup of your artifacts to a safe location before enabling this feature.
    //
    // After you backed up your artifacts you can utilize db by running migrate as follows:
    // $ truffle migrate --reset --compile-all
    //
    // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
    // }
};
