"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomoNounsSeeder__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "nounId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "blockNumber",
                type: "uint256",
            },
            {
                internalType: "contract INomoNounsDescriptor",
                name: "descriptor",
                type: "address",
            },
        ],
        name: "generateSeed",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint40",
                        name: "nounId",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "background",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "body",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "accessory",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "head",
                        type: "uint40",
                    },
                    {
                        internalType: "uint40",
                        name: "glasses",
                        type: "uint40",
                    },
                ],
                internalType: "struct INomoNounsSeeder.Seed",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b5061053d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c92a11c214610030575b600080fd5b61004361003e366004610423565b6100ab565b6040516100a29190600060c08201905064ffffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525092915050565b60405180910390f35b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101829052906100e8600185610475565b604080519140602083015281018690526060016040516020818303038152906040528051906020012060001c905060008373ffffffffffffffffffffffffffffffffffffffff16634531c0a86040518163ffffffff1660e01b8152600401602060405180830381865afa158015610163573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018791906104b3565b905060008473ffffffffffffffffffffffffffffffffffffffff1663eba818066040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101fa91906104b3565b905060008573ffffffffffffffffffffffffffffffffffffffff16634daebac26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610249573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026d91906104b3565b905060008673ffffffffffffffffffffffffffffffffffffffff1663cc2aa0916040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e091906104b3565b905060008773ffffffffffffffffffffffffffffffffffffffff16634479cef26040518163ffffffff1660e01b8152600401602060405180830381865afa15801561032f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061035391906104b3565b90506040518060c001604052808b64ffffffffff168152602001868864ffffffffff1661038091906104cc565b64ffffffffff16815260200185603089901c64ffffffffff166103a391906104cc565b64ffffffffff16815260200184606089901c64ffffffffff166103c691906104cc565b64ffffffffff16815260200183609089901c64ffffffffff166103e991906104cc565b64ffffffffff1681526020018260c089901c64ffffffffff1661040c91906104cc565b64ffffffffff1690529a9950505050505050505050565b60008060006060848603121561043857600080fd5b8335925060208401359150604084013573ffffffffffffffffffffffffffffffffffffffff8116811461046a57600080fd5b809150509250925092565b6000828210156104ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500390565b6000602082840312156104c557600080fd5b5051919050565b600082610502577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50069056fea26469706673582212206de66936985b831a3998811b76a1d68353344dc98aa6f09e1686c06b6b8cacb064736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class NomoNounsSeeder__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.NomoNounsSeeder__factory = NomoNounsSeeder__factory;
NomoNounsSeeder__factory.bytecode = _bytecode;
NomoNounsSeeder__factory.abi = _abi;
