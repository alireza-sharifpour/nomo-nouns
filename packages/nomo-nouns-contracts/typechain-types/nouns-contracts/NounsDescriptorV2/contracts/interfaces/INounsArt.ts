/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";

export declare namespace INounsArt {
  export type NounArtStoragePageStruct = {
    imageCount: PromiseOrValue<BigNumberish>;
    decompressedLength: PromiseOrValue<BigNumberish>;
    pointer: PromiseOrValue<string>;
  };

  export type NounArtStoragePageStructOutput = [number, BigNumber, string] & {
    imageCount: number;
    decompressedLength: BigNumber;
    pointer: string;
  };

  export type TraitStruct = {
    storagePages: INounsArt.NounArtStoragePageStruct[];
    storedImagesCount: PromiseOrValue<BigNumberish>;
  };

  export type TraitStructOutput = [
    INounsArt.NounArtStoragePageStructOutput[],
    BigNumber
  ] & {
    storagePages: INounsArt.NounArtStoragePageStructOutput[];
    storedImagesCount: BigNumber;
  };
}

export interface INounsArtInterface extends utils.Interface {
  functions: {
    "accessories(uint256)": FunctionFragment;
    "addAccessories(bytes,uint80,uint16)": FunctionFragment;
    "addAccessoriesFromPointer(address,uint80,uint16)": FunctionFragment;
    "addBackground(string)": FunctionFragment;
    "addBodies(bytes,uint80,uint16)": FunctionFragment;
    "addBodiesFromPointer(address,uint80,uint16)": FunctionFragment;
    "addGlasses(bytes,uint80,uint16)": FunctionFragment;
    "addGlassesFromPointer(address,uint80,uint16)": FunctionFragment;
    "addHeads(bytes,uint80,uint16)": FunctionFragment;
    "addHeadsFromPointer(address,uint80,uint16)": FunctionFragment;
    "addManyBackgrounds(string[])": FunctionFragment;
    "backgrounds(uint256)": FunctionFragment;
    "backgroundsCount()": FunctionFragment;
    "bodies(uint256)": FunctionFragment;
    "descriptor()": FunctionFragment;
    "getAccessoriesTrait()": FunctionFragment;
    "getBodiesTrait()": FunctionFragment;
    "getGlassesTrait()": FunctionFragment;
    "getHeadsTrait()": FunctionFragment;
    "glasses(uint256)": FunctionFragment;
    "heads(uint256)": FunctionFragment;
    "inflator()": FunctionFragment;
    "palettes(uint8)": FunctionFragment;
    "setDescriptor(address)": FunctionFragment;
    "setInflator(address)": FunctionFragment;
    "setPalette(uint8,bytes)": FunctionFragment;
    "setPalettePointer(uint8,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accessories"
      | "addAccessories"
      | "addAccessoriesFromPointer"
      | "addBackground"
      | "addBodies"
      | "addBodiesFromPointer"
      | "addGlasses"
      | "addGlassesFromPointer"
      | "addHeads"
      | "addHeadsFromPointer"
      | "addManyBackgrounds"
      | "backgrounds"
      | "backgroundsCount"
      | "bodies"
      | "descriptor"
      | "getAccessoriesTrait"
      | "getBodiesTrait"
      | "getGlassesTrait"
      | "getHeadsTrait"
      | "glasses"
      | "heads"
      | "inflator"
      | "palettes"
      | "setDescriptor"
      | "setInflator"
      | "setPalette"
      | "setPalettePointer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accessories",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addAccessories",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addAccessoriesFromPointer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addBackground",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addBodies",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addBodiesFromPointer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addGlasses",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addGlassesFromPointer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addHeads",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addHeadsFromPointer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addManyBackgrounds",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "backgrounds",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "backgroundsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "bodies",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "descriptor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAccessoriesTrait",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBodiesTrait",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGlassesTrait",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHeadsTrait",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "glasses",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "heads",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "inflator", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "palettes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDescriptor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setInflator",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPalette",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setPalettePointer",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "accessories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAccessories",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAccessoriesFromPointer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addBackground",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addBodies", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addBodiesFromPointer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addGlasses", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addGlassesFromPointer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addHeads", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addHeadsFromPointer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addManyBackgrounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgrounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "backgroundsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "bodies", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "descriptor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAccessoriesTrait",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBodiesTrait",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGlassesTrait",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHeadsTrait",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "glasses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "heads", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "inflator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "palettes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDescriptor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInflator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPalette", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setPalettePointer",
    data: BytesLike
  ): Result;

  events: {
    "AccessoriesAdded(uint16)": EventFragment;
    "BackgroundsAdded(uint256)": EventFragment;
    "BodiesAdded(uint16)": EventFragment;
    "DescriptorUpdated(address,address)": EventFragment;
    "GlassesAdded(uint16)": EventFragment;
    "HeadsAdded(uint16)": EventFragment;
    "InflatorUpdated(address,address)": EventFragment;
    "PaletteSet(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccessoriesAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BackgroundsAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BodiesAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DescriptorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GlassesAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "HeadsAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "InflatorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaletteSet"): EventFragment;
}

export interface AccessoriesAddedEventObject {
  count: number;
}
export type AccessoriesAddedEvent = TypedEvent<
  [number],
  AccessoriesAddedEventObject
>;

export type AccessoriesAddedEventFilter =
  TypedEventFilter<AccessoriesAddedEvent>;

export interface BackgroundsAddedEventObject {
  count: BigNumber;
}
export type BackgroundsAddedEvent = TypedEvent<
  [BigNumber],
  BackgroundsAddedEventObject
>;

export type BackgroundsAddedEventFilter =
  TypedEventFilter<BackgroundsAddedEvent>;

export interface BodiesAddedEventObject {
  count: number;
}
export type BodiesAddedEvent = TypedEvent<[number], BodiesAddedEventObject>;

export type BodiesAddedEventFilter = TypedEventFilter<BodiesAddedEvent>;

export interface DescriptorUpdatedEventObject {
  oldDescriptor: string;
  newDescriptor: string;
}
export type DescriptorUpdatedEvent = TypedEvent<
  [string, string],
  DescriptorUpdatedEventObject
>;

export type DescriptorUpdatedEventFilter =
  TypedEventFilter<DescriptorUpdatedEvent>;

export interface GlassesAddedEventObject {
  count: number;
}
export type GlassesAddedEvent = TypedEvent<[number], GlassesAddedEventObject>;

export type GlassesAddedEventFilter = TypedEventFilter<GlassesAddedEvent>;

export interface HeadsAddedEventObject {
  count: number;
}
export type HeadsAddedEvent = TypedEvent<[number], HeadsAddedEventObject>;

export type HeadsAddedEventFilter = TypedEventFilter<HeadsAddedEvent>;

export interface InflatorUpdatedEventObject {
  oldInflator: string;
  newInflator: string;
}
export type InflatorUpdatedEvent = TypedEvent<
  [string, string],
  InflatorUpdatedEventObject
>;

export type InflatorUpdatedEventFilter = TypedEventFilter<InflatorUpdatedEvent>;

export interface PaletteSetEventObject {
  paletteIndex: number;
}
export type PaletteSetEvent = TypedEvent<[number], PaletteSetEventObject>;

export type PaletteSetEventFilter = TypedEventFilter<PaletteSetEvent>;

export interface INounsArt extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: INounsArtInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accessories(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    addAccessories(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addAccessoriesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBodies(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBodiesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addGlasses(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addGlassesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addHeads(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addHeadsFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    backgrounds(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    backgroundsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    bodies(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    descriptor(overrides?: CallOverrides): Promise<[string]>;

    getAccessoriesTrait(
      overrides?: CallOverrides
    ): Promise<[INounsArt.TraitStructOutput]>;

    getBodiesTrait(
      overrides?: CallOverrides
    ): Promise<[INounsArt.TraitStructOutput]>;

    getGlassesTrait(
      overrides?: CallOverrides
    ): Promise<[INounsArt.TraitStructOutput]>;

    getHeadsTrait(
      overrides?: CallOverrides
    ): Promise<[INounsArt.TraitStructOutput]>;

    glasses(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    heads(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    inflator(overrides?: CallOverrides): Promise<[string]>;

    palettes(
      paletteIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setDescriptor(
      descriptor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setInflator(
      inflator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      palette: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPalettePointer(
      paletteIndex: PromiseOrValue<BigNumberish>,
      pointer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  accessories(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  addAccessories(
    encodedCompressed: PromiseOrValue<BytesLike>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addAccessoriesFromPointer(
    pointer: PromiseOrValue<string>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBackground(
    _background: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBodies(
    encodedCompressed: PromiseOrValue<BytesLike>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBodiesFromPointer(
    pointer: PromiseOrValue<string>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addGlasses(
    encodedCompressed: PromiseOrValue<BytesLike>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addGlassesFromPointer(
    pointer: PromiseOrValue<string>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addHeads(
    encodedCompressed: PromiseOrValue<BytesLike>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addHeadsFromPointer(
    pointer: PromiseOrValue<string>,
    decompressedLength: PromiseOrValue<BigNumberish>,
    imageCount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addManyBackgrounds(
    _backgrounds: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  backgrounds(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  backgroundsCount(overrides?: CallOverrides): Promise<BigNumber>;

  bodies(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  descriptor(overrides?: CallOverrides): Promise<string>;

  getAccessoriesTrait(
    overrides?: CallOverrides
  ): Promise<INounsArt.TraitStructOutput>;

  getBodiesTrait(
    overrides?: CallOverrides
  ): Promise<INounsArt.TraitStructOutput>;

  getGlassesTrait(
    overrides?: CallOverrides
  ): Promise<INounsArt.TraitStructOutput>;

  getHeadsTrait(
    overrides?: CallOverrides
  ): Promise<INounsArt.TraitStructOutput>;

  glasses(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  heads(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  inflator(overrides?: CallOverrides): Promise<string>;

  palettes(
    paletteIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  setDescriptor(
    descriptor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setInflator(
    inflator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPalette(
    paletteIndex: PromiseOrValue<BigNumberish>,
    palette: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPalettePointer(
    paletteIndex: PromiseOrValue<BigNumberish>,
    pointer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accessories(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    addAccessories(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addAccessoriesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBodies(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBodiesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addGlasses(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addGlassesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addHeads(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addHeadsFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    backgrounds(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    backgroundsCount(overrides?: CallOverrides): Promise<BigNumber>;

    bodies(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    descriptor(overrides?: CallOverrides): Promise<string>;

    getAccessoriesTrait(
      overrides?: CallOverrides
    ): Promise<INounsArt.TraitStructOutput>;

    getBodiesTrait(
      overrides?: CallOverrides
    ): Promise<INounsArt.TraitStructOutput>;

    getGlassesTrait(
      overrides?: CallOverrides
    ): Promise<INounsArt.TraitStructOutput>;

    getHeadsTrait(
      overrides?: CallOverrides
    ): Promise<INounsArt.TraitStructOutput>;

    glasses(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    heads(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    inflator(overrides?: CallOverrides): Promise<string>;

    palettes(
      paletteIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    setDescriptor(
      descriptor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setInflator(
      inflator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      palette: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPalettePointer(
      paletteIndex: PromiseOrValue<BigNumberish>,
      pointer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AccessoriesAdded(uint16)"(count?: null): AccessoriesAddedEventFilter;
    AccessoriesAdded(count?: null): AccessoriesAddedEventFilter;

    "BackgroundsAdded(uint256)"(count?: null): BackgroundsAddedEventFilter;
    BackgroundsAdded(count?: null): BackgroundsAddedEventFilter;

    "BodiesAdded(uint16)"(count?: null): BodiesAddedEventFilter;
    BodiesAdded(count?: null): BodiesAddedEventFilter;

    "DescriptorUpdated(address,address)"(
      oldDescriptor?: null,
      newDescriptor?: null
    ): DescriptorUpdatedEventFilter;
    DescriptorUpdated(
      oldDescriptor?: null,
      newDescriptor?: null
    ): DescriptorUpdatedEventFilter;

    "GlassesAdded(uint16)"(count?: null): GlassesAddedEventFilter;
    GlassesAdded(count?: null): GlassesAddedEventFilter;

    "HeadsAdded(uint16)"(count?: null): HeadsAddedEventFilter;
    HeadsAdded(count?: null): HeadsAddedEventFilter;

    "InflatorUpdated(address,address)"(
      oldInflator?: null,
      newInflator?: null
    ): InflatorUpdatedEventFilter;
    InflatorUpdated(
      oldInflator?: null,
      newInflator?: null
    ): InflatorUpdatedEventFilter;

    "PaletteSet(uint8)"(paletteIndex?: null): PaletteSetEventFilter;
    PaletteSet(paletteIndex?: null): PaletteSetEventFilter;
  };

  estimateGas: {
    accessories(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addAccessories(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addAccessoriesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBodies(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBodiesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addGlasses(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addGlassesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addHeads(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addHeadsFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    backgrounds(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    backgroundsCount(overrides?: CallOverrides): Promise<BigNumber>;

    bodies(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    descriptor(overrides?: CallOverrides): Promise<BigNumber>;

    getAccessoriesTrait(overrides?: CallOverrides): Promise<BigNumber>;

    getBodiesTrait(overrides?: CallOverrides): Promise<BigNumber>;

    getGlassesTrait(overrides?: CallOverrides): Promise<BigNumber>;

    getHeadsTrait(overrides?: CallOverrides): Promise<BigNumber>;

    glasses(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    heads(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inflator(overrides?: CallOverrides): Promise<BigNumber>;

    palettes(
      paletteIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDescriptor(
      descriptor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setInflator(
      inflator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      palette: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPalettePointer(
      paletteIndex: PromiseOrValue<BigNumberish>,
      pointer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accessories(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addAccessories(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addAccessoriesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBackground(
      _background: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBodies(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBodiesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addGlasses(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addGlassesFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addHeads(
      encodedCompressed: PromiseOrValue<BytesLike>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addHeadsFromPointer(
      pointer: PromiseOrValue<string>,
      decompressedLength: PromiseOrValue<BigNumberish>,
      imageCount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addManyBackgrounds(
      _backgrounds: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    backgrounds(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    backgroundsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bodies(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    descriptor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAccessoriesTrait(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getBodiesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGlassesTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getHeadsTrait(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    glasses(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    heads(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inflator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    palettes(
      paletteIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDescriptor(
      descriptor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setInflator(
      inflator: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPalette(
      paletteIndex: PromiseOrValue<BigNumberish>,
      palette: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPalettePointer(
      paletteIndex: PromiseOrValue<BigNumberish>,
      pointer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
