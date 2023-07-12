/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockAuctionHouse,
  MockAuctionHouseInterface,
} from "../../../contracts/mock/MockAuctionHouse";

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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101eb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806352204ae01461003b5780637d9f6db5146100d9575b600080fd5b6100d761004936600461016f565b6040805160c081018252858152600060208201819052918101859052606081018490526080810182905291151560a0909201829052938455600193909355600291909155600355600480547fffffffffffffffffffffff0000000000000000000000000000000000000000001674010000000000000000000000000000000000000000909202919091179055565b005b600054600154600254600354600454610126949392919073ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1686565b60408051968752602087019590955293850192909252606084015273ffffffffffffffffffffffffffffffffffffffff166080830152151560a082015260c00160405180910390f35b6000806000806080858703121561018557600080fd5b843593506020850135925060408501359150606085013580151581146101aa57600080fd5b93969295509093505056fea2646970667358221220b9048d150d25fa9049da3f24410a41e84c14eb9c08a593b1193cee16c627037f64736f6c634300080f0033";

type MockAuctionHouseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAuctionHouseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAuctionHouse__factory extends ContractFactory {
  constructor(...args: MockAuctionHouseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockAuctionHouse> {
    return super.deploy(overrides || {}) as Promise<MockAuctionHouse>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockAuctionHouse {
    return super.attach(address) as MockAuctionHouse;
  }
  override connect(signer: Signer): MockAuctionHouse__factory {
    return super.connect(signer) as MockAuctionHouse__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAuctionHouseInterface {
    return new utils.Interface(_abi) as MockAuctionHouseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAuctionHouse {
    return new Contract(address, _abi, signerOrProvider) as MockAuctionHouse;
  }
}
