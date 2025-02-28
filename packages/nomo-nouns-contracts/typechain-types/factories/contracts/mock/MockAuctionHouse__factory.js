"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockAuctionHouse__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [],
        name: "auction",
        outputs: [
            {
                internalType: "uint256",
                name: "nounId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
            },
            {
                internalType: "address payable",
                name: "bidder",
                type: "address",
            },
            {
                internalType: "bool",
                name: "settled",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "nounId",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "startTime",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "endTime",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "settled",
                type: "bool",
            },
        ],
        name: "createAuction",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b506101eb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806352204ae01461003b5780637d9f6db5146100d9575b600080fd5b6100d761004936600461016f565b6040805160c081018252858152600060208201819052918101859052606081018490526080810182905291151560a0909201829052938455600193909355600291909155600355600480547fffffffffffffffffffffff0000000000000000000000000000000000000000001674010000000000000000000000000000000000000000909202919091179055565b005b600054600154600254600354600454610126949392919073ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1686565b60408051968752602087019590955293850192909252606084015273ffffffffffffffffffffffffffffffffffffffff166080830152151560a082015260c00160405180910390f35b6000806000806080858703121561018557600080fd5b843593506020850135925060408501359150606085013580151581146101aa57600080fd5b93969295509093505056fea2646970667358221220b9048d150d25fa9049da3f24410a41e84c14eb9c08a593b1193cee16c627037f64736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class MockAuctionHouse__factory extends ethers_1.ContractFactory {
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
exports.MockAuctionHouse__factory = MockAuctionHouse__factory;
MockAuctionHouse__factory.bytecode = _bytecode;
MockAuctionHouse__factory.abi = _abi;
