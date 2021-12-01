require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note prefer pulp grace perfect equal general'; 
let testAccounts = [
"0x7da93f3884c10f0a893ebf39da7f4863980886f3f43ec5f7622032c2bb2a80d1",
"0xbe6d6397c23bb2da9e5813aed23790249ccd7013af89a81eb98e71d6e99c9c7a",
"0x6816e92956b73ca3a106259ed6df83a279b54a9a145fafbb7b49a68fe53ad572",
"0xc51d55e5344826a0f9bbc3f038c4fdeaa23f77a059f16676cc79d0f808142da9",
"0x808b48012431de059fdaaa1c15f915c5441142c16cb89019fa1e04145bc2b5d7",
"0x294a06f70ea64a8155f76ff21b9e46f0a674c8f8b5f8d5e50af7004d9cc9161a",
"0x3e681312f85c5aeef95768ad3d64c54ff73bafc8768269a845fe06b49d9542b3",
"0x94e6d81758300f02c51971f447d7e4d3c688df8504525f134a6cd30f786d798d",
"0x52f19ba3e85bf5b97d9778efbb39bad7a4cffe15c5189327bb28000b834b4f95",
"0xb93cf3ac92d3db652b796dc6d9a65f07b89346522e5189acb176284c345ba6fe"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

