"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomicfoundation/hardhat-toolbox");
const dotenv_1 = __importDefault(require("dotenv"));
require("hardhat-abi-exporter");
require("./tasks");
dotenv_1.default.config();
const config = {
    solidity: {
        version: "0.8.15",
        settings: {
            optimizer: {
                enabled: true,
                runs: 10000,
            },
        },
    },
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            // forking: {
            //   url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_APP_KEY}`,
            // },
            initialBaseFeePerGas: 0,
        },
        mainnet: {
            url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_APP_KEY}`,
            // @ts-ignore
            accounts: [process.env.WALLET_PRIVATE_KEY],
        },
        goerli: {
            url: `https://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_APP_KEY}`,
            // @ts-ignore
            accounts: [process.env.WALLET_PRIVATE_KEY],
        },
        // "mainnet-fork": {
        //   // url: "http://localhost:8545",
        //   forking: {
        //     url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_APP_KEY}`,
        //   },
        //   accounts: [process.env.WALLET_PRIVATE_KEY],
        // },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    abiExporter: {
        path: "./abi",
        clear: true,
    },
    gasReporter: {
        enabled: !process.env.CI,
        currency: "USD",
        gasPrice: 30,
        src: "contracts",
        coinmarketcap: "7643dfc7-a58f-46af-8314-2db32bdd18ba",
    },
};
exports.default = config;
