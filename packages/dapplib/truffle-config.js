require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food edge random stick hospital join light army gasp'; 
let testAccounts = [
"0x0f28aab080a989a2cef36da43de02e8669d0a7aed85f3f472f068605f3202714",
"0xa1be1023670b047bc92df79e578f1fe341e98b7288ba9ae053faf643c8b6da0c",
"0xc621b8e0b6762e20d8049a24145547cef19c1f89f3d39446257e557b920a41ab",
"0xd919014d92ad5167cc668969e8938a1ce9b5f04fc2ca337c3db6a0391ec6bbf6",
"0x92f6ddddb70de8572bab2781ea86285509a8be1f79c84da34d77af75fac48ea6",
"0x5ecb532c95afc37a246be85ff4fe0267f05936c591e4c7b42c4abfe7a6ccdbcd",
"0xe964a1b2568baee3a7b01a8a673aa9a2976de74cfb38cf02a7e0d530c57f1860",
"0x560ac3373e7bdcb0958514162ab4b0e41c23a95c02ca73d446797ec2c4560537",
"0xce23849f75210b941a6e544df42b962a4248b6f3c848b00cf5d9788970df0207",
"0xa60a4be7eb6dd99ca251cc0cc03a6e0989b6558b6994265171f971ecf79f1a5a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


