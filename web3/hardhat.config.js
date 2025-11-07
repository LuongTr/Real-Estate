require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-verify");

/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY =
  "8e7788d04f6a3a105866dac7874937373ca0a975a2278dc3df7f5e13f3fd1bbb";
const RPC_URL =
  "https://rpc.ankr.com/polygon_amoy/ffc62b3f6512ee22121424d2182983bb3224e25fad1ac0c667ee1ba3a3e97451";

module.exports = {
  defaultNetwork: "polygon_amoy",
  networks: {
    zkSyncSepoliaTestnet: {
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      chainId: 300,
      verifyURL:
        "https://explorer.sepolia.era.zksync.dev/contract_verification",
    },
    zkSyncMainnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
      chainId: 324,
      verifyURL:
        "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
    hardhat: {
      chainId: 80002,
    },
    polygon_amoy: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 80002,
    },
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
