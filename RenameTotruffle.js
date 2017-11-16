var HDWalletProvider = require("truffle-hdwallet-provider");

var mnemonic = /*"[put a twelve word mnemonic here]"*/;
var provider = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/");
console.log(provider.getAddress()); // the address for your mnemonic will appear in the console

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      gas: 47000000000000,
      network_id: "*", // Match any network id
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4",
      from: /*"0xsetToYourUnlockedAccount"*/,
      gas: 4500000,
      gasPrice: 21000000000
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "1",
      from: /*"0xsetToYourUnlockedAccount"*/,
      gas: 4500000,
      gasPrice: 21000000000
    },
    ropsten: {
      //this account already unlocked, signed then sent to infura
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"),
      network_id: 3, // official id of the ropsten network
      gas: 4500000,
      gasPrice: 100000000000
    }
  }
};
