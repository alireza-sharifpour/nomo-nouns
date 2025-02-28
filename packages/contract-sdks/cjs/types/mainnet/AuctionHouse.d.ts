import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export interface AuctionHouseInterface extends utils.Interface {
    functions: {
        "auction()": FunctionFragment;
        "createBid(uint256)": FunctionFragment;
        "duration()": FunctionFragment;
        "initialize(address,address,uint256,uint256,uint8,uint256)": FunctionFragment;
        "minBidIncrementPercentage()": FunctionFragment;
        "nouns()": FunctionFragment;
        "owner()": FunctionFragment;
        "pause()": FunctionFragment;
        "paused()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "reservePrice()": FunctionFragment;
        "setMinBidIncrementPercentage(uint8)": FunctionFragment;
        "setReservePrice(uint256)": FunctionFragment;
        "setTimeBuffer(uint256)": FunctionFragment;
        "settleAuction()": FunctionFragment;
        "settleCurrentAndCreateNewAuction()": FunctionFragment;
        "timeBuffer()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "unpause()": FunctionFragment;
        "weth()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "auction" | "createBid" | "duration" | "initialize" | "minBidIncrementPercentage" | "nouns" | "owner" | "pause" | "paused" | "renounceOwnership" | "reservePrice" | "setMinBidIncrementPercentage" | "setReservePrice" | "setTimeBuffer" | "settleAuction" | "settleCurrentAndCreateNewAuction" | "timeBuffer" | "transferOwnership" | "unpause" | "weth"): FunctionFragment;
    encodeFunctionData(functionFragment: "auction", values?: undefined): string;
    encodeFunctionData(functionFragment: "createBid", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "duration", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "minBidIncrementPercentage", values?: undefined): string;
    encodeFunctionData(functionFragment: "nouns", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "reservePrice", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMinBidIncrementPercentage", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setReservePrice", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setTimeBuffer", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "settleAuction", values?: undefined): string;
    encodeFunctionData(functionFragment: "settleCurrentAndCreateNewAuction", values?: undefined): string;
    encodeFunctionData(functionFragment: "timeBuffer", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "auction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createBid", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "duration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minBidIncrementPercentage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nouns", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reservePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinBidIncrementPercentage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReservePrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTimeBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "settleCurrentAndCreateNewAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {
        "AuctionBid(uint256,address,uint256,bool)": EventFragment;
        "AuctionCreated(uint256,uint256,uint256)": EventFragment;
        "AuctionExtended(uint256,uint256)": EventFragment;
        "AuctionMinBidIncrementPercentageUpdated(uint256)": EventFragment;
        "AuctionReservePriceUpdated(uint256)": EventFragment;
        "AuctionSettled(uint256,address,uint256)": EventFragment;
        "AuctionTimeBufferUpdated(uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AuctionBid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionExtended"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionMinBidIncrementPercentageUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionReservePriceUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionSettled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionTimeBufferUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export interface AuctionBidEventObject {
    nounId: BigNumber;
    sender: string;
    value: BigNumber;
    extended: boolean;
}
export declare type AuctionBidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    boolean
], AuctionBidEventObject>;
export declare type AuctionBidEventFilter = TypedEventFilter<AuctionBidEvent>;
export interface AuctionCreatedEventObject {
    nounId: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
}
export declare type AuctionCreatedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], AuctionCreatedEventObject>;
export declare type AuctionCreatedEventFilter = TypedEventFilter<AuctionCreatedEvent>;
export interface AuctionExtendedEventObject {
    nounId: BigNumber;
    endTime: BigNumber;
}
export declare type AuctionExtendedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], AuctionExtendedEventObject>;
export declare type AuctionExtendedEventFilter = TypedEventFilter<AuctionExtendedEvent>;
export interface AuctionMinBidIncrementPercentageUpdatedEventObject {
    minBidIncrementPercentage: BigNumber;
}
export declare type AuctionMinBidIncrementPercentageUpdatedEvent = TypedEvent<[
    BigNumber
], AuctionMinBidIncrementPercentageUpdatedEventObject>;
export declare type AuctionMinBidIncrementPercentageUpdatedEventFilter = TypedEventFilter<AuctionMinBidIncrementPercentageUpdatedEvent>;
export interface AuctionReservePriceUpdatedEventObject {
    reservePrice: BigNumber;
}
export declare type AuctionReservePriceUpdatedEvent = TypedEvent<[
    BigNumber
], AuctionReservePriceUpdatedEventObject>;
export declare type AuctionReservePriceUpdatedEventFilter = TypedEventFilter<AuctionReservePriceUpdatedEvent>;
export interface AuctionSettledEventObject {
    nounId: BigNumber;
    winner: string;
    amount: BigNumber;
}
export declare type AuctionSettledEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], AuctionSettledEventObject>;
export declare type AuctionSettledEventFilter = TypedEventFilter<AuctionSettledEvent>;
export interface AuctionTimeBufferUpdatedEventObject {
    timeBuffer: BigNumber;
}
export declare type AuctionTimeBufferUpdatedEvent = TypedEvent<[
    BigNumber
], AuctionTimeBufferUpdatedEventObject>;
export declare type AuctionTimeBufferUpdatedEventFilter = TypedEventFilter<AuctionTimeBufferUpdatedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PausedEventObject {
    account: string;
}
export declare type PausedEvent = TypedEvent<[string], PausedEventObject>;
export declare type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface UnpausedEventObject {
    account: string;
}
export declare type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
export declare type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface AuctionHouse extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AuctionHouseInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        auction(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            boolean
        ] & {
            nounId: BigNumber;
            amount: BigNumber;
            startTime: BigNumber;
            endTime: BigNumber;
            bidder: string;
            settled: boolean;
        }>;
        createBid(nounId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        duration(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_nouns: PromiseOrValue<string>, _weth: PromiseOrValue<string>, _timeBuffer: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _minBidIncrementPercentage: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        minBidIncrementPercentage(overrides?: CallOverrides): Promise<[number]>;
        nouns(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        paused(overrides?: CallOverrides): Promise<[boolean]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        reservePrice(overrides?: CallOverrides): Promise<[BigNumber]>;
        setMinBidIncrementPercentage(_minBidIncrementPercentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReservePrice(_reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setTimeBuffer(_timeBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleAuction(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        settleCurrentAndCreateNewAuction(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        timeBuffer(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    auction(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean
    ] & {
        nounId: BigNumber;
        amount: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        bidder: string;
        settled: boolean;
    }>;
    createBid(nounId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    duration(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_nouns: PromiseOrValue<string>, _weth: PromiseOrValue<string>, _timeBuffer: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _minBidIncrementPercentage: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    minBidIncrementPercentage(overrides?: CallOverrides): Promise<number>;
    nouns(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    paused(overrides?: CallOverrides): Promise<boolean>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    reservePrice(overrides?: CallOverrides): Promise<BigNumber>;
    setMinBidIncrementPercentage(_minBidIncrementPercentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReservePrice(_reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setTimeBuffer(_timeBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleAuction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    settleCurrentAndCreateNewAuction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        auction(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            boolean
        ] & {
            nounId: BigNumber;
            amount: BigNumber;
            startTime: BigNumber;
            endTime: BigNumber;
            bidder: string;
            settled: boolean;
        }>;
        createBid(nounId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_nouns: PromiseOrValue<string>, _weth: PromiseOrValue<string>, _timeBuffer: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _minBidIncrementPercentage: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        minBidIncrementPercentage(overrides?: CallOverrides): Promise<number>;
        nouns(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        paused(overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        reservePrice(overrides?: CallOverrides): Promise<BigNumber>;
        setMinBidIncrementPercentage(_minBidIncrementPercentage: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setReservePrice(_reservePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setTimeBuffer(_timeBuffer: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        settleAuction(overrides?: CallOverrides): Promise<void>;
        settleCurrentAndCreateNewAuction(overrides?: CallOverrides): Promise<void>;
        timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AuctionBid(uint256,address,uint256,bool)"(nounId?: PromiseOrValue<BigNumberish> | null, sender?: null, value?: null, extended?: null): AuctionBidEventFilter;
        AuctionBid(nounId?: PromiseOrValue<BigNumberish> | null, sender?: null, value?: null, extended?: null): AuctionBidEventFilter;
        "AuctionCreated(uint256,uint256,uint256)"(nounId?: PromiseOrValue<BigNumberish> | null, startTime?: null, endTime?: null): AuctionCreatedEventFilter;
        AuctionCreated(nounId?: PromiseOrValue<BigNumberish> | null, startTime?: null, endTime?: null): AuctionCreatedEventFilter;
        "AuctionExtended(uint256,uint256)"(nounId?: PromiseOrValue<BigNumberish> | null, endTime?: null): AuctionExtendedEventFilter;
        AuctionExtended(nounId?: PromiseOrValue<BigNumberish> | null, endTime?: null): AuctionExtendedEventFilter;
        "AuctionMinBidIncrementPercentageUpdated(uint256)"(minBidIncrementPercentage?: null): AuctionMinBidIncrementPercentageUpdatedEventFilter;
        AuctionMinBidIncrementPercentageUpdated(minBidIncrementPercentage?: null): AuctionMinBidIncrementPercentageUpdatedEventFilter;
        "AuctionReservePriceUpdated(uint256)"(reservePrice?: null): AuctionReservePriceUpdatedEventFilter;
        AuctionReservePriceUpdated(reservePrice?: null): AuctionReservePriceUpdatedEventFilter;
        "AuctionSettled(uint256,address,uint256)"(nounId?: PromiseOrValue<BigNumberish> | null, winner?: null, amount?: null): AuctionSettledEventFilter;
        AuctionSettled(nounId?: PromiseOrValue<BigNumberish> | null, winner?: null, amount?: null): AuctionSettledEventFilter;
        "AuctionTimeBufferUpdated(uint256)"(timeBuffer?: null): AuctionTimeBufferUpdatedEventFilter;
        AuctionTimeBufferUpdated(timeBuffer?: null): AuctionTimeBufferUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        auction(overrides?: CallOverrides): Promise<BigNumber>;
        createBid(nounId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        duration(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_nouns: PromiseOrValue<string>, _weth: PromiseOrValue<string>, _timeBuffer: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _minBidIncrementPercentage: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        minBidIncrementPercentage(overrides?: CallOverrides): Promise<BigNumber>;
        nouns(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        paused(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        reservePrice(overrides?: CallOverrides): Promise<BigNumber>;
        setMinBidIncrementPercentage(_minBidIncrementPercentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReservePrice(_reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setTimeBuffer(_timeBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleAuction(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        settleCurrentAndCreateNewAuction(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        auction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createBid(nounId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        duration(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_nouns: PromiseOrValue<string>, _weth: PromiseOrValue<string>, _timeBuffer: PromiseOrValue<BigNumberish>, _reservePrice: PromiseOrValue<BigNumberish>, _minBidIncrementPercentage: PromiseOrValue<BigNumberish>, _duration: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        minBidIncrementPercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nouns(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        reservePrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMinBidIncrementPercentage(_minBidIncrementPercentage: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReservePrice(_reservePrice: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setTimeBuffer(_timeBuffer: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleAuction(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        settleCurrentAndCreateNewAuction(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        timeBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
