"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721A__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "ApprovalCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "ApprovalQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "BalanceQueryForZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintERC2309QuantityExceedsLimit",
        type: "error",
    },
    {
        inputs: [],
        name: "MintToZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "MintZeroQuantity",
        type: "error",
    },
    {
        inputs: [],
        name: "OwnerQueryForNonexistentToken",
        type: "error",
    },
    {
        inputs: [],
        name: "OwnershipNotInitializedForExtraData",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferCallerNotOwnerNorApproved",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferFromIncorrectOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToNonERC721ReceiverImplementer",
        type: "error",
    },
    {
        inputs: [],
        name: "TransferToZeroAddress",
        type: "error",
    },
    {
        inputs: [],
        name: "URIQueryForNonexistentToken",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "approved",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "ApprovalForAll",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "fromTokenId",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "toTokenId",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
        ],
        name: "ConsecutiveTransfer",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "getApproved",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "ownerOf",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes",
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "operator",
                type: "address",
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool",
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "interfaceId",
                type: "bytes4",
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "tokenURI",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "tokenId",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620014c4380380620014c483398101604081905262000034916200012b565b600262000042838262000224565b50600362000051828262000224565b50506000805550620002f0565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200008657600080fd5b81516001600160401b0380821115620000a357620000a36200005e565b604051601f8301601f19908116603f01168101908282118183101715620000ce57620000ce6200005e565b81604052838152602092508683858801011115620000eb57600080fd5b600091505b838210156200010f5785820183015181830184015290820190620000f0565b83821115620001215760008385830101525b9695505050505050565b600080604083850312156200013f57600080fd5b82516001600160401b03808211156200015757600080fd5b620001658683870162000074565b935060208501519150808211156200017c57600080fd5b506200018b8582860162000074565b9150509250929050565b600181811c90821680620001aa57607f821691505b602082108103620001cb57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021f57600081815260208120601f850160051c81016020861015620001fa5750805b601f850160051c820191505b818110156200021b5782815560010162000206565b5050505b505050565b81516001600160401b038111156200024057620002406200005e565b620002588162000251845462000195565b84620001d1565b602080601f831160018114620002905760008415620002775750858301515b600019600386901b1c1916600185901b1785556200021b565b600085815260208120601f198616915b82811015620002c157888601518255948401946001909101908401620002a0565b5085821015620002e05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6111c480620003006000396000f3fe6080604052600436106100dd5760003560e01c80636352211e1161007f578063a22cb46511610059578063a22cb46514610231578063b88d4fde14610251578063c87b56dd14610264578063e985e9c51461028457600080fd5b80636352211e146101dc57806370a08231146101fc57806395d89b411461021c57600080fd5b8063095ea7b3116100bb578063095ea7b31461017e57806318160ddd1461019357806323b872dd146101b657806342842e0e146101c957600080fd5b806301ffc9a7146100e257806306fdde0314610117578063081812fc14610139575b600080fd5b3480156100ee57600080fd5b506101026100fd366004610da5565b6102da565b60405190151581526020015b60405180910390f35b34801561012357600080fd5b5061012c6103bf565b60405161010e9190610e38565b34801561014557600080fd5b50610159610154366004610e4b565b610451565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010e565b61019161018c366004610e8d565b6104bb565b005b34801561019f57600080fd5b50600154600054035b60405190815260200161010e565b6101916101c4366004610eb7565b6105a6565b6101916101d7366004610eb7565b610835565b3480156101e857600080fd5b506101596101f7366004610e4b565b610855565b34801561020857600080fd5b506101a8610217366004610ef3565b610860565b34801561022857600080fd5b5061012c6108e2565b34801561023d57600080fd5b5061019161024c366004610f0e565b6108f1565b61019161025f366004610f79565b610988565b34801561027057600080fd5b5061012c61027f366004610e4b565b6109f8565b34801561029057600080fd5b5061010261029f366004611073565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260076020908152604080832093909416825291909152205460ff1690565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316148061036d57507f80ac58cd000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b806103b957507f5b5e139f000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6060600280546103ce906110a6565b80601f01602080910402602001604051908101604052809291908181526020018280546103fa906110a6565b80156104475780601f1061041c57610100808354040283529160200191610447565b820191906000526020600020905b81548152906001019060200180831161042a57829003601f168201915b5050505050905090565b600061045c82610aa2565b610492576040517fcf4700e400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060009081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60006104c682610855565b90503373ffffffffffffffffffffffffffffffffffffffff821614610525576104ef813361029f565b610525576040517fcfb3b94200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006105b182610ae2565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610618576040517fa114810000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600082815260066020526040902080543380821473ffffffffffffffffffffffffffffffffffffffff88169091141761068b57610655863361029f565b61068b576040517f59c896be00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff85166106d8576040517fea553b3400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156106e357600082555b73ffffffffffffffffffffffffffffffffffffffff86811660009081526005602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019055918716808252919020805460010190554260a01b177c0200000000000000000000000000000000000000000000000000000000176000858152600460205260408120919091557c0200000000000000000000000000000000000000000000000000000000841690036107d2576001840160008181526004602052604081205490036107d05760005481146107d05760008181526004602052604090208490555b505b838573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b61085083838360405180602001604052806000815250610988565b505050565b60006103b982610ae2565b600073ffffffffffffffffffffffffffffffffffffffff82166108af576040517f8f4eb60400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5073ffffffffffffffffffffffffffffffffffffffff1660009081526005602052604090205467ffffffffffffffff1690565b6060600380546103ce906110a6565b33600081815260076020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6109938484846105a6565b73ffffffffffffffffffffffffffffffffffffffff83163b156109f2576109bc84848484610b99565b6109f2576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6060610a0382610aa2565b610a39576040517fa14c4b5000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610a5060408051602081019091526000815290565b90508051600003610a705760405180602001604052806000815250610a9b565b80610a7a84610d12565b604051602001610a8b9291906110f9565b6040516020818303038152906040525b9392505050565b60008054821080156103b95750506000908152600460205260409020547c0100000000000000000000000000000000000000000000000000000000161590565b600081600054811015610b6757600081815260046020526040812054907c010000000000000000000000000000000000000000000000000000000082169003610b65575b80600003610a9b57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01600081815260046020526040902054610b26565b505b6040517fdf2d9b4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f150b7a0200000000000000000000000000000000000000000000000000000000815260009073ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290610bf4903390899088908890600401611128565b6020604051808303816000875af1925050508015610c4d575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610c4a91810190611171565b60015b610cc4573d808015610c7b576040519150601f19603f3d011682016040523d82523d6000602084013e610c80565b606091505b508051600003610cbc576040517fd1a57ed600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050949350505050565b606060a06040510180604052602081039150506000815280825b600183039250600a81066030018353600a900480610d2c57508190037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909101908152919050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610da257600080fd5b50565b600060208284031215610db757600080fd5b8135610a9b81610d74565b60005b83811015610ddd578181015183820152602001610dc5565b838111156109f25750506000910152565b60008151808452610e06816020860160208601610dc2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610a9b6020830184610dee565b600060208284031215610e5d57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610e8857600080fd5b919050565b60008060408385031215610ea057600080fd5b610ea983610e64565b946020939093013593505050565b600080600060608486031215610ecc57600080fd5b610ed584610e64565b9250610ee360208501610e64565b9150604084013590509250925092565b600060208284031215610f0557600080fd5b610a9b82610e64565b60008060408385031215610f2157600080fd5b610f2a83610e64565b915060208301358015158114610f3f57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215610f8f57600080fd5b610f9885610e64565b9350610fa660208601610e64565b925060408501359150606085013567ffffffffffffffff80821115610fca57600080fd5b818701915087601f830112610fde57600080fd5b813581811115610ff057610ff0610f4a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561103657611036610f4a565b816040528281528a602084870101111561104f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561108657600080fd5b61108f83610e64565b915061109d60208401610e64565b90509250929050565b600181811c908216806110ba57607f821691505b6020821081036110f3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000835161110b818460208801610dc2565b83519083019061111f818360208801610dc2565b01949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526111676080830184610dee565b9695505050505050565b60006020828403121561118357600080fd5b8151610a9b81610d7456fea2646970667358221220ec6a81d60dd3938a4900cc1034bb884ad6e3fcc8aff7e8805cfe765cc84ef9c664736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC721A__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(name_, symbol_, overrides) {
        return super.deploy(name_, symbol_, overrides || {});
    }
    getDeployTransaction(name_, symbol_, overrides) {
        return super.getDeployTransaction(name_, symbol_, overrides || {});
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
exports.ERC721A__factory = ERC721A__factory;
ERC721A__factory.bytecode = _bytecode;
ERC721A__factory.abi = _abi;
