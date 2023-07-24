/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  INomoToNounMapper,
  INomoToNounMapperInterface,
} from "../../../contracts/interfaces/INomoToNounMapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getNounId",
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
] as const;

export class INomoToNounMapper__factory {
  static readonly abi = _abi;
  static createInterface(): INomoToNounMapperInterface {
    return new utils.Interface(_abi) as INomoToNounMapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INomoToNounMapper {
    return new Contract(address, _abi, signerOrProvider) as INomoToNounMapper;
  }
}
