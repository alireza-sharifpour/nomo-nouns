/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  NomoNounsDescriptorV2,
  NomoNounsDescriptorV2Interface,
} from "../../contracts/NomoNounsDescriptorV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INounsArt",
        name: "_art",
        type: "address",
      },
      {
        internalType: "contract ISVGRenderer",
        name: "_renderer",
        type: "address",
      },
      {
        internalType: "contract INomoToNounMapper",
        name: "_nomoToNounMapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BadPaletteLength",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyPalette",
    type: "error",
  },
  {
    inputs: [],
    name: "IndexNotFound",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract INounsArt",
        name: "art",
        type: "address",
      },
    ],
    name: "ArtUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "baseURI",
        type: "string",
      },
    ],
    name: "BaseURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "DataURIToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ISVGRenderer",
        name: "renderer",
        type: "address",
      },
    ],
    name: "RendererUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "accessories",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accessoryCount",
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
    inputs: [],
    name: "art",
    outputs: [
      {
        internalType: "contract INounsArt",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "backgroundCount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "backgroundOverrides",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "backgrounds",
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
    name: "baseURI",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "bodies",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bodyCount",
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
        name: "seed",
        type: "tuple",
      },
    ],
    name: "dataURI",
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
        name: "seed",
        type: "tuple",
      },
    ],
    name: "generateSVGImage",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
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
        name: "seed",
        type: "tuple",
      },
    ],
    name: "genericDataURI",
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
      {
        internalType: "uint256",
        name: "tokenNounId",
        type: "uint256",
      },
    ],
    name: "getNomoSerialNumber",
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
        name: "seed",
        type: "tuple",
      },
    ],
    name: "getPartsForSeed",
    outputs: [
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
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "glasses",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "glassesCount",
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
    inputs: [],
    name: "headCount",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "heads",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isDataURIEnabled",
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
    name: "nomoToNounMapper",
    outputs: [
      {
        internalType: "contract INomoToNounMapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "palettes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renderer",
    outputs: [
      {
        internalType: "contract ISVGRenderer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract INounsArt",
        name: "_art",
        type: "address",
      },
    ],
    name: "setArt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_color",
        type: "string",
      },
    ],
    name: "setBackgroundOverride",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISVGRenderer",
        name: "_renderer",
        type: "address",
      },
    ],
    name: "setRenderer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleDataURIEnabled",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
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
        name: "seed",
        type: "tuple",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "unsetBackgroundOverride",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526003805460ff60a01b1916600160a01b1790553480156200002457600080fd5b5060405162002752380380620027528339810160408190526200004791620000fe565b620000523362000095565b600180546001600160a01b039485166001600160a01b03199182161790915560028054938516938216939093179092556003805491909316911617905562000152565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620000fb57600080fd5b50565b6000806000606084860312156200011457600080fd5b83516200012181620000e5565b60208501519093506200013481620000e5565b60408501519092506200014781620000e5565b809150509250925092565b6125f080620001626000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c80637ca942101161010f578063bc2d45fe116100a2578063dfe8478b11610071578063dfe8478b14610473578063e6b1a3ae1461047b578063eba818061461048e578063f2fde38b1461049657600080fd5b8063bc2d45fe14610410578063be9570bd14610423578063cc2aa09114610436578063ce2f4f531461043e57600080fd5b8063b8bed3b1116100de578063b8bed3b1146103c4578063b982d1b9146103d7578063bb145866146103ea578063bbf103ef146103fd57600080fd5b80637ca94210146103605780638ada6b0f146103735780638da5cb5b14610393578063aa685cc5146103b157600080fd5b80634daebac2116101875780635a503f13116101565780635a503f131461032a5780635b9968f91461033d5780636c0360eb14610350578063715018a61461035857600080fd5b80634daebac2146102e957806355f804b3146102f157806356d3163d1461030457806357c1bf011461031757600080fd5b8063437190ba116101c3578063437190ba146102985780634479cef2146102b857806344cee73c146102ce5780634531c0a8146102e157600080fd5b806304bde4dd146101f557806315d6cde91461021e578063301bd28e1461023e5780634136a00614610283575b600080fd5b610208610203366004611959565b6104a9565b60405161021591906119ca565b60405180910390f35b61023161022c366004611b45565b610609565b6040516102159190611b61565b60015461025e9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610215565b610296610291366004611959565b6109e8565b005b60035461025e9073ffffffffffffffffffffffffffffffffffffffff1681565b6102c0610a0a565b604051908152602001610215565b6102086102dc366004611959565b610aaa565b6102c0610b43565b6102c0610bdc565b6102966102ff366004611c4d565b610c4b565b610296610312366004611cb1565b610c9e565b610208610325366004611cce565b610d20565b610208610338366004611959565b610df9565b61029661034b366004611cfb565b610e51565b610208610e78565b610296610f06565b61020861036e366004611959565b610f1a565b60025461025e9073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff1661025e565b6102c06103bf366004611d47565b610f72565b6102086103d2366004611cce565b611034565b6102086103e5366004611959565b61109e565b6102086103f8366004611959565b6110f6565b61020861040b366004611b45565b61110f565b61020861041e366004611d69565b6111f6565b610208610431366004611e0a565b611250565b6102c0611365565b6003546104639074010000000000000000000000000000000000000000900460ff1681565b6040519015158152602001610215565b6102966113d4565b610296610489366004611cb1565b611458565b6102c06114d3565b6102966104a4366004611cb1565b611542565b60008181526005602052604090208054606091906104c690611e80565b905060000361056b576001546040517f04bde4dd0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff909116906304bde4dd90602401600060405180830381865afa15801561053e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105669190810190611f03565b610603565b6000828152600560205260409020805461058490611e80565b80601f01602080910402602001604051908101604052809291908181526020018280546105b090611e80565b80156105fd5780601f106105d2576101008083540402835291602001916105fd565b820191906000526020600020905b8154815290600101906020018083116105e057829003601f168201915b50505050505b92915050565b60015460408281015190517f44cee73c00000000000000000000000000000000000000000000000000000000815264ffffffffff909116600482015260609160009173ffffffffffffffffffffffffffffffffffffffff909116906344cee73c90602401600060405180830381865afa15801561068a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106b29190810190611f03565b60015460608501516040517f7ca9421000000000000000000000000000000000000000000000000000000000815264ffffffffff909116600482015291925060009173ffffffffffffffffffffffffffffffffffffffff90911690637ca9421090602401600060405180830381865afa158015610733573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261075b9190810190611f03565b60015460808601516040517f5a503f1300000000000000000000000000000000000000000000000000000000815264ffffffffff909116600482015291925060009173ffffffffffffffffffffffffffffffffffffffff90911690635a503f1390602401600060405180830381865afa1580156107dc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108049190810190611f03565b60015460a08701516040517fb982d1b900000000000000000000000000000000000000000000000000000000815264ffffffffff909116600482015291925060009173ffffffffffffffffffffffffffffffffffffffff9091169063b982d1b990602401600060405180830381865afa158015610885573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526108ad9190810190611f03565b60408051600480825260a0820190925291925060009190816020015b60408051808201909152606080825260208201528152602001906001900390816108c9579050509050604051806040016040528086815260200161090c876115fb565b8152508160008151811061092257610922611f54565b60200260200101819052506040518060400160405280858152602001610947866115fb565b8152508160018151811061095d5761095d611f54565b60200260200101819052506040518060400160405280848152602001610982856115fb565b8152508160028151811061099857610998611f54565b602002602001018190525060405180604001604052808381526020016109bd846115fb565b815250816003815181106109d3576109d3611f54565b60209081029190910101529695505050505050565b6109f0611675565b6000818152600560205260408120610a079161190b565b50565b600154604080517fe73dd383000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163e73dd38391600480830192869291908290030181865afa158015610a79573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610aa19190810190611f83565b60200151905090565b6001546040517f44cee73c0000000000000000000000000000000000000000000000000000000081526004810183905260609173ffffffffffffffffffffffffffffffffffffffff16906344cee73c906024015b600060405180830381865afa158015610b1b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106039190810190611f03565b600154604080517ffd30704b000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163fd30704b9160048083019260209291908290030181865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd791906120bf565b905090565b600154604080517fc64b2f5d000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163c64b2f5d91600480830192869291908290030181865afa158015610a79573d6000803e3d6000fd5b610c53611675565b6004610c60828483612127565b507f6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad8282604051610c92929190612224565b60405180910390a15050565b610ca6611675565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f482cbbbcf912da3be80deb8503ae1e94c0b7d5d1d0ec0af3d9d6403e06e609ee906020015b60405180910390a150565b80516060906000610d388564ffffffffff8416610f72565b90506000610d4c8364ffffffffff166116f6565b610d55836116f6565b604051602001610d66929190612253565b60405160208183030381529060405290506000604051602001610dd2907f546865792077616e74656420746f206265636f6d652061204e6f756e2c20627581527f74206e6f77207468657920617265204e6f27204d6f2700000000000000000000602082015260360190565b6040516020818303038152906040529050610dee828288611250565b979650505050505050565b6001546040517f5a503f130000000000000000000000000000000000000000000000000000000081526004810183905260609173ffffffffffffffffffffffffffffffffffffffff1690635a503f1390602401610afe565b610e59611675565b6000838152600560205260409020610e72828483612127565b50505050565b60048054610e8590611e80565b80601f0160208091040260200160405190810160405280929190818152602001828054610eb190611e80565b8015610efe5780601f10610ed357610100808354040283529160200191610efe565b820191906000526020600020905b815481529060010190602001808311610ee157829003601f168201915b505050505081565b610f0e611675565b610f1860006117b4565b565b6001546040517f7ca942100000000000000000000000000000000000000000000000000000000081526004810183905260609173ffffffffffffffffffffffffffffffffffffffff1690637ca9421090602401610afe565b600060015b6000610f838286612303565b1180156110165750600354839073ffffffffffffffffffffffffffffffffffffffff1663fc187d25610fb58488612303565b6040518263ffffffff1660e01b8152600401610fd391815260200190565b602060405180830381865afa158015610ff0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101491906120bf565b145b1561102d57806110258161231a565b915050610f77565b9392505050565b60035460609074010000000000000000000000000000000000000000900460ff161561106b576110648383610d20565b9050610603565b6004611076846116f6565b604051602001611087929190612352565b604051602081830303815290604052905092915050565b6001546040517fb982d1b90000000000000000000000000000000000000000000000000000000081526004810183905260609173ffffffffffffffffffffffffffffffffffffffff169063b982d1b990602401610afe565b60056020526000908152604090208054610e8590611e80565b60606000604051806040016040528061112785610609565b8152602001611140856020015164ffffffffff166104a9565b90526002546040517f22cc1ad600000000000000000000000000000000000000000000000000000000815291925073__$898be40fe8843234b138800c5ed3fc0496$__916322cc1ad6916111b19173ffffffffffffffffffffffffffffffffffffffff909116908590600401612472565b600060405180830381865af41580156111ce573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261102d9190810190611f03565b6001546040517fbc2d45fe00000000000000000000000000000000000000000000000000000000815260ff8316600482015260609173ffffffffffffffffffffffffffffffffffffffff169063bc2d45fe90602401610afe565b606060006040518060a00160405280868152602001611279856000015164ffffffffff166116f6565b8152602001858152602001611298856020015164ffffffffff166104a9565b81526020016112a685610609565b90526002546040517f8873aaf600000000000000000000000000000000000000000000000000000000815291925073__$898be40fe8843234b138800c5ed3fc0496$__91638873aaf6916113179173ffffffffffffffffffffffffffffffffffffffff9091169085906004016124ee565b600060405180830381865af4158015611334573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261135c9190810190611f03565b95945050505050565b600154604080517f368013dc000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163368013dc91600480830192869291908290030181865afa158015610a79573d6000803e3d6000fd5b6113dc611675565b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff8116740100000000000000000000000000000000000000009182900460ff1615918202179091556040518181527f360c3d72ee193226275b842f85231c259c934e85459fed80fa68e502ffa9dbde90602001610d15565b611460611675565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f89382d75256b43b6826ad8d6cbd8e517eaf5e10f1ef4c8f123c9a25ac4529b5590602001610d15565b600154604080517f222a36d0000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163222a36d091600480830192869291908290030181865afa158015610a79573d6000803e3d6000fd5b61154a611675565b73ffffffffffffffffffffffffffffffffffffffff81166115f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610a07816117b4565b600154815160609173ffffffffffffffffffffffffffffffffffffffff169063bc2d45fe90849060009061163157611631611f54565b01602001516040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815260f89190911c6004820152602401610afe565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016115e9565b6060600061170383611829565b600101905060008167ffffffffffffffff811115611723576117236119dd565b6040519080825280601f01601f19166020018201604052801561174d576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461175757509392505050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611872577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef8100000000831061189e576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106118bc57662386f26fc10000830492506010015b6305f5e10083106118d4576305f5e100830492506008015b61271083106118e857612710830492506004015b606483106118fa576064830492506002015b600a83106106035760010192915050565b50805461191790611e80565b6000825580601f10611927575050565b601f016020900490600052602060002090810190610a0791905b808211156119555760008155600101611941565b5090565b60006020828403121561196b57600080fd5b5035919050565b60005b8381101561198d578181015183820152602001611975565b83811115610e725750506000910152565b600081518084526119b6816020860160208601611972565b601f01601f19169290920160200192915050565b60208152600061102d602083018461199e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611a2f57611a2f6119dd565b60405290565b6040516060810167ffffffffffffffff81118282101715611a2f57611a2f6119dd565b604051601f8201601f1916810167ffffffffffffffff81118282101715611a8157611a816119dd565b604052919050565b803564ffffffffff81168114611a9e57600080fd5b919050565b600060c08284031215611ab557600080fd5b60405160c0810181811067ffffffffffffffff82111715611ad857611ad86119dd565b604052905080611ae783611a89565b8152611af560208401611a89565b6020820152611b0660408401611a89565b6040820152611b1760608401611a89565b6060820152611b2860808401611a89565b6080820152611b3960a08401611a89565b60a08201525092915050565b600060c08284031215611b5757600080fd5b61102d8383611aa3565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b83811015611bf6577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc089840301855281518051878552611bca8886018261199e565b91890151858303868b0152919050611be2818361199e565b968901969450505090860190600101611b88565b509098975050505050505050565b60008083601f840112611c1657600080fd5b50813567ffffffffffffffff811115611c2e57600080fd5b602083019150836020828501011115611c4657600080fd5b9250929050565b60008060208385031215611c6057600080fd5b823567ffffffffffffffff811115611c7757600080fd5b611c8385828601611c04565b90969095509350505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610a0757600080fd5b600060208284031215611cc357600080fd5b813561102d81611c8f565b60008060e08385031215611ce157600080fd5b82359150611cf28460208501611aa3565b90509250929050565b600080600060408486031215611d1057600080fd5b83359250602084013567ffffffffffffffff811115611d2e57600080fd5b611d3a86828701611c04565b9497909650939450505050565b60008060408385031215611d5a57600080fd5b50508035926020909101359150565b600060208284031215611d7b57600080fd5b813560ff8116811461102d57600080fd5b600067ffffffffffffffff821115611da657611da66119dd565b50601f01601f191660200190565b600082601f830112611dc557600080fd5b8135611dd8611dd382611d8c565b611a58565b818152846020838601011115611ded57600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006101008486031215611e2057600080fd5b833567ffffffffffffffff80821115611e3857600080fd5b611e4487838801611db4565b94506020860135915080821115611e5a57600080fd5b50611e6786828701611db4565b925050611e778560408601611aa3565b90509250925092565b600181811c90821680611e9457607f821691505b602082108103611ecd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b6000611ee1611dd384611d8c565b9050828152838383011115611ef557600080fd5b61102d836020830184611972565b600060208284031215611f1557600080fd5b815167ffffffffffffffff811115611f2c57600080fd5b8201601f81018413611f3d57600080fd5b611f4c84825160208401611ed3565b949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020808385031215611f9657600080fd5b825167ffffffffffffffff80821115611fae57600080fd5b81850191506040808388031215611fc457600080fd5b611fcc611a0c565b835183811115611fdb57600080fd5b8401601f81018913611fec57600080fd5b805184811115611ffe57611ffe6119dd565b61200c878260051b01611a58565b8181528781019550606091820283018801918b83111561202b57600080fd5b928801925b828410156120a65780848d0312156120485760008081fd5b612050611a35565b845161ffff811681146120635760008081fd5b8152848a015169ffffffffffffffffffff811681146120825760008081fd5b818b01528487015161209381611c8f565b8188015287529588019592830192612030565b5083525050928401519383019390935250949350505050565b6000602082840312156120d157600080fd5b5051919050565b601f82111561212257600081815260208120601f850160051c810160208610156120ff5750805b601f850160051c820191505b8181101561211e5782815560010161210b565b5050505b505050565b67ffffffffffffffff83111561213f5761213f6119dd565b6121538361214d8354611e80565b836120d8565b6000601f8411600181146121a5576000851561216f5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b17835561221d565b600083815260209020601f19861690835b828110156121d657868501358255602094850194600190920191016121b6565b5086821015612211577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b7f4e6f6d6f2065646974696f6e200000000000000000000000000000000000000081526000835161228b81600d850160208801611972565b7f2023000000000000000000000000000000000000000000000000000000000000600d9184019182015283516122c881600f840160208801611972565b01600f01949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015612315576123156122d4565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361234b5761234b6122d4565b5060010190565b600080845461236081611e80565b6001828116801561237857600181146123ab576123da565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00841687528215158302870194506123da565b8860005260208060002060005b858110156123d15781548a8201529084019082016123b8565b50505082870194505b5050505083516123ee818360208801611972565b01949350505050565b600081518084526020808501808196508360051b8101915082860160005b858110156124655782840389528151604081518187526124378288018261199e565b91505086820151915085810387870152612451818361199e565b9a87019a9550505090840190600101612415565b5091979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600082516040808401526124a960808401826123f7565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08483030160608501526124e4828261199e565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000825160a0604084015261252660e084018261199e565b905060208401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc080858403016060860152612562838361199e565b9250604086015191508085840301608086015261257f838361199e565b925060608601519150808584030160a086015261259c838361199e565b925060808601519150808584030160c0860152506124e482826123f756fea2646970667358221220735db67e3a77346be7ebd870f70ccfab5d56743a9ae4854415b4e25e42e4883b64736f6c634300080f0033";

type NomoNounsDescriptorV2ConstructorParams =
  | [
      linkLibraryAddresses: NomoNounsDescriptorV2LibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NomoNounsDescriptorV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class NomoNounsDescriptorV2__factory extends ContractFactory {
  constructor(...args: NomoNounsDescriptorV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        NomoNounsDescriptorV2__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: NomoNounsDescriptorV2LibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$898be40fe8843234b138800c5ed3fc0496\\$__", "g"),
      linkLibraryAddresses["contracts/NomoNFTDescriptor.sol:NomoNFTDescriptor"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    _art: PromiseOrValue<string>,
    _renderer: PromiseOrValue<string>,
    _nomoToNounMapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NomoNounsDescriptorV2> {
    return super.deploy(
      _art,
      _renderer,
      _nomoToNounMapper,
      overrides || {}
    ) as Promise<NomoNounsDescriptorV2>;
  }
  override getDeployTransaction(
    _art: PromiseOrValue<string>,
    _renderer: PromiseOrValue<string>,
    _nomoToNounMapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _art,
      _renderer,
      _nomoToNounMapper,
      overrides || {}
    );
  }
  override attach(address: string): NomoNounsDescriptorV2 {
    return super.attach(address) as NomoNounsDescriptorV2;
  }
  override connect(signer: Signer): NomoNounsDescriptorV2__factory {
    return super.connect(signer) as NomoNounsDescriptorV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NomoNounsDescriptorV2Interface {
    return new utils.Interface(_abi) as NomoNounsDescriptorV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NomoNounsDescriptorV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as NomoNounsDescriptorV2;
  }
}

export interface NomoNounsDescriptorV2LibraryAddresses {
  ["contracts/NomoNFTDescriptor.sol:NomoNFTDescriptor"]: string;
}
