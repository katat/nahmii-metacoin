# Truffle with Nahmii

This repository contains a simple MetaCoin contract with a working configuration to deploy and run on top of Nahmii 2.0.

## Requirements

- Node +v12.
- Truffle installed.
- Properly populated `secrets.json` file. 

## Installation

Run `npm install` to install all dependencies.

## Commands

The `package.json` file comes with the following commands:
- `npm run compile`: Compiles the smart contracts.
- `npm run deploy`: Deploys the smart contracts to the Nahmii Ropsten network.
- `npm run console`: Opens a developer console to access the Nahmii Ropsten network.

## Test Network 

To test whether you are connected to the Nahmii Ropsten network, take the following steps:

1. Run `npm run console`. Truffle should now be connected to the Nahmii network.
2. Type in the command `let account = (await web3.eth.getAccounts())[0]`. Note: if you get the `global is not defined` error. Execute `global = this` first.
3. Next, use the command `await web3.eth.getBalance(account)`.
4. You should now see your Ether balance on the Nahmii Ropsten network.
