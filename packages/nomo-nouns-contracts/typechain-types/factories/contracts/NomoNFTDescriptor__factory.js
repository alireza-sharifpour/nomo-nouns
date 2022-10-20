"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NomoNFTDescriptor__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "contract ISVGRenderer",
                name: "renderer",
                type: "ISVGRenderer",
            },
            {
                components: [
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "nounId",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "description",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "background",
                        type: "string",
                    },
                    {
                        components: [
                            {
                                internalType: "bytes",
                                name: "image",
                                type: "bytes",
                            },
                            {
                                internalType: "bytes",
                                name: "palette",
                                type: "bytes",
                            },
                        ],
                        internalType: "struct ISVGRenderer.Part[]",
                        name: "parts",
                        type: "tuple[]",
                    },
                ],
                internalType: "struct NomoNFTDescriptor.TokenURIParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "constructTokenURI",
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
                internalType: "contract ISVGRenderer",
                name: "renderer",
                type: "ISVGRenderer",
            },
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "bytes",
                                name: "image",
                                type: "bytes",
                            },
                            {
                                internalType: "bytes",
                                name: "palette",
                                type: "bytes",
                            },
                        ],
                        internalType: "struct ISVGRenderer.Part[]",
                        name: "parts",
                        type: "tuple[]",
                    },
                    {
                        internalType: "string",
                        name: "background",
                        type: "string",
                    },
                ],
                internalType: "struct ISVGRenderer.SVGParams",
                name: "params",
                type: "tuple",
            },
        ],
        name: "generateSVGImage",
        outputs: [
            {
                internalType: "string",
                name: "svg",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x610cc061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c806322cc1ad6146100455780638873aaf61461006e575b600080fd5b6100586100533660046105f4565b610081565b604051610065919061070a565b60405180910390f35b61005861007c36600461071d565b610110565b60606101098373ffffffffffffffffffffffffffffffffffffffff16635ea01e63846040518263ffffffff1660e01b81526004016100bf919061082d565b600060405180830381865afa1580156100dc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261010491908101906108f7565b6101a6565b9392505050565b6060600061013a846040518060400160405280866080015181526020018660600151815250610081565b905061017e8360000151846040015183610157876020015161037e565b60405160200161016a9493929190610965565b6040516020818303038152906040526101a6565b60405160200161018e9190610ab4565b60405160208183030381529060405291505092915050565b606081516000036101c557505060408051602081019091526000815290565b6000604051806060016040528060408152602001610c4b60409139905060006003845160026101f49190610b28565b6101fe9190610b40565b610209906004610b7b565b90506000610218826020610b28565b67ffffffffffffffff811115610230576102306103d0565b6040519080825280601f01601f19166020018201604052801561025a576020820181803683370190505b509050818152600183018586518101602084015b818310156102c6576003830192508251603f8160121c168501518253600182019150603f81600c1c168501518253600182019150603f8160061c168501518253600182019150603f811685015182535060010161026e565b6003895106600181146102e0576002811461032a57610370565b7f3d3d0000000000000000000000000000000000000000000000000000000000007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe830152610370565b7f3d000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8301525b509398975050505050505050565b6060816040516020016103919190610bb8565b6040516020818303038152906040529050919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103cb57600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610422576104226103d0565b60405290565b60405160a0810167ffffffffffffffff81118282101715610422576104226103d0565b604051601f8201601f1916810167ffffffffffffffff81118282101715610474576104746103d0565b604052919050565b600067ffffffffffffffff821115610496576104966103d0565b50601f01601f191660200190565b600082601f8301126104b557600080fd5b81356104c86104c38261047c565b61044b565b8181528460208386010111156104dd57600080fd5b816020850160208301376000918101602001919091529392505050565b600082601f83011261050b57600080fd5b8135602067ffffffffffffffff80831115610528576105286103d0565b8260051b61053783820161044b565b938452858101830193838101908886111561055157600080fd5b84880192505b858310156105e85782358481111561056f5760008081fd5b88016040818b03601f19018113156105875760008081fd5b61058f6103ff565b87830135878111156105a15760008081fd5b6105af8d8a838701016104a4565b8252509082013590868211156105c55760008081fd5b6105d38c89848601016104a4565b81890152845250509184019190840190610557565b98975050505050505050565b6000806040838503121561060757600080fd5b610610836103a7565b9150602083013567ffffffffffffffff8082111561062d57600080fd5b908401906040828703121561064157600080fd5b60405160408101818110838211171561065c5761065c6103d0565b60405282358281111561066e57600080fd5b61067a888286016104fa565b82525060208301358281111561068f57600080fd5b61069b888286016104a4565b6020830152508093505050509250929050565b60005b838110156106c95781810151838201526020016106b1565b838111156106d8576000848401525b50505050565b600081518084526106f68160208601602086016106ae565b601f01601f19169290920160200192915050565b60208152600061010960208301846106de565b6000806040838503121561073057600080fd5b610739836103a7565b9150602083013567ffffffffffffffff8082111561075657600080fd5b9084019060a0828703121561076a57600080fd5b610772610428565b82358281111561078157600080fd5b61078d888286016104a4565b8252506020830135828111156107a257600080fd5b6107ae888286016104a4565b6020830152506040830135828111156107c657600080fd5b6107d2888286016104a4565b6040830152506060830135828111156107ea57600080fd5b6107f6888286016104a4565b60608301525060808301358281111561080e57600080fd5b61081a888286016104fa565b6080830152508093505050509250929050565b600060208083526060830184516040808487015282825180855260808801915060808160051b8901019450858401935060005b818110156108ce577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80898703018352845180518588526108a2868901826106de565b91890151888303898b01529190506108ba81836106de565b975050509386019391860191600101610860565b505050838701519350601f19868403018187015250506108ee81836106de565b95945050505050565b60006020828403121561090957600080fd5b815167ffffffffffffffff81111561092057600080fd5b8201601f8101841361093157600080fd5b805161093f6104c38261047c565b81815285602083850101111561095457600080fd5b6108ee8260208301602086016106ae565b7f7b226e616d65223a22000000000000000000000000000000000000000000000081526000855161099d816009850160208a016106ae565b7f222c20226465736372697074696f6e223a22000000000000000000000000000060099184019182015285516109da81601b840160208a016106ae565b7f222c2022696d616765223a202200000000000000000000000000000000000000601b92909101918201527f646174613a696d6167652f7376672b786d6c3b6261736536342c00000000000060288201528451610a3e8160428401602089016106ae565b7f222c200000000000000000000000000000000000000000000000000000000000604292909101918201528351610a7c8160458401602088016106ae565b7f7d00000000000000000000000000000000000000000000000000000000000000604592909101918201526046019695505050505050565b7f646174613a6170706c69636174696f6e2f6a736f6e3b6261736536342c000000815260008251610aec81601d8501602087016106ae565b91909101601d0192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610b3b57610b3b610af9565b500190565b600082610b76577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610bb357610bb3610af9565b500290565b7f2261747472696275746573223a205b7b2274726169745f74797065223a20224e81527f6f756e204964222c2276616c7565223a20000000000000000000000000000000602082015260008251610c168160318501602087016106ae565b7f7d2c5d0000000000000000000000000000000000000000000000000000000000603193909101928301525060340191905056fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392b2fa2646970667358221220e8dace2ff92715976145ca11b0200c50a16a2cc039a6e615fcf0e0e7f1e5db3364736f6c634300080f0033";
const isSuperArgs = (xs) => xs.length > 1;
class NomoNFTDescriptor__factory extends ethers_1.ContractFactory {
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
exports.NomoNFTDescriptor__factory = NomoNFTDescriptor__factory;
NomoNFTDescriptor__factory.bytecode = _bytecode;
NomoNFTDescriptor__factory.abi = _abi;
