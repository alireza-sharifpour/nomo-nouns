/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NomoNounsSeeder,
  NomoNounsSeederInterface,
} from "../../contracts/NomoNounsSeeder";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "nounId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "nounBlocknumberHash",
        type: "bytes32",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506104f5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063c5e918a914610030575b600080fd5b61004361003e366004610419565b6100ab565b6040516100a29190600060c08201905064ffffffffff8084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525092915050565b60405180910390f35b6040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a081019190915260408051602081018590529081018590526000906060016040516020818303038152906040528051906020012060001c905060008373ffffffffffffffffffffffffffffffffffffffff16634531c0a86040518163ffffffff1660e01b8152600401602060405180830381865afa15801561015c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610180919061046b565b905060008473ffffffffffffffffffffffffffffffffffffffff1663eba818066040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f3919061046b565b905060008573ffffffffffffffffffffffffffffffffffffffff16634daebac26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610242573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610266919061046b565b905060008673ffffffffffffffffffffffffffffffffffffffff1663cc2aa0916040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d9919061046b565b905060008773ffffffffffffffffffffffffffffffffffffffff16634479cef26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610328573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034c919061046b565b90506040518060c001604052808b64ffffffffff168152602001868865ffffffffffff1661037a9190610484565b64ffffffffff16815260200161039c8665ffffffffffff60308b901c16610484565b64ffffffffff1681526020016103be8565ffffffffffff60608b901c16610484565b64ffffffffff1681526020016103e08465ffffffffffff60908b901c16610484565b64ffffffffff1681526020016104028365ffffffffffff60c08b901c16610484565b64ffffffffff1690529a9950505050505050505050565b60008060006060848603121561042e57600080fd5b8335925060208401359150604084013573ffffffffffffffffffffffffffffffffffffffff8116811461046057600080fd5b809150509250925092565b60006020828403121561047d57600080fd5b5051919050565b6000826104ba577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50069056fea2646970667358221220d867f17931f2cf9bd7e2febc59b0bbcb73711bd1648abe381cede0898b38e67364736f6c634300080f0033";

type NomoNounsSeederConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NomoNounsSeederConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NomoNounsSeeder__factory extends ContractFactory {
  constructor(...args: NomoNounsSeederConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NomoNounsSeeder> {
    return super.deploy(overrides || {}) as Promise<NomoNounsSeeder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NomoNounsSeeder {
    return super.attach(address) as NomoNounsSeeder;
  }
  override connect(signer: Signer): NomoNounsSeeder__factory {
    return super.connect(signer) as NomoNounsSeeder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NomoNounsSeederInterface {
    return new utils.Interface(_abi) as NomoNounsSeederInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NomoNounsSeeder {
    return new Contract(address, _abi, signerOrProvider) as NomoNounsSeeder;
  }
}
