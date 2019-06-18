import { BaseApiResponse } from "../base";
import {
  Address,
  BaseTransaction,
  ConfirmedTransaction,
  TransactionType
} from "../beans";

export interface TransactionsAPI {
  get<T = any>(
    id: string
  ): Promise<{ transaction: ConfirmedTransaction<T> } & BaseApiResponse>;

  list(query?: {
    blockId?: string;
    "and:blockId"?: string;
    type?: TransactionType;
    "and:type"?: TransactionType;
    senderId?: string;
    "and:senderId"?: string;
    recipientId?: string;
    "and:recipientId"?: string;
    fromHeight?: number;
    "and:fromHeight"?: number;
    toHeight?: number;
    "and:toHeight"?: number;
    fromUnixTime?: number;
    "and:fromUnixTime"?: number;
    toUnixTime?: number;
    "and:toUnixTime"?: number;
    limit?: number;
    offset?: number;
    orderBy?: string;
  }): Promise<
    {
      count: number;
      transactions: Array<ConfirmedTransaction<any>>;
    } & BaseApiResponse
  >;

  pendingList(query: {
    address?: Address;
    queryType?: "all" | "sender" | "receiver";
  }): Promise<
    {
      count: number;
      transactions: BaseTransaction<any>;
    } & BaseApiResponse
  >;

  pending<T = any>(
    txID: string
  ): Promise<
    {
      transaction: BaseTransaction<T>;
    } & BaseApiResponse
  >;

  queuedList(query: {
    address?: Address;
    queryType?: "all" | "sender" | "receiver";
  }): Promise<
    {
      count: number;
      transactions: BaseTransaction<any>;
    } & BaseApiResponse
  >;

  queued<T = any>(
    txID: string
  ): Promise<
    {
      transaction: BaseTransaction<T>;
    } & BaseApiResponse
  >;

  unconfirmedList(query: {
    address?: Address;
    queryType?: "all" | "sender" | "receiver";
  }): Promise<
    {
      count: number;
      transactions: BaseTransaction<any>;
    } & BaseApiResponse
  >;

  unconfirmed<T = any>(
    txID: string
  ): Promise<
    {
      transaction: BaseTransaction<T>;
    } & BaseApiResponse
  >;

  count(): Promise<
    {
      confirmed: number;
      pending: number;
      queued: number;
      ready: number;
      unconfirmed: number;
    } & BaseApiResponse
  >;

  localNodeCreate(body: {
    secret: string;
    recipientId: string;
    amount: number;
    secondSecret?: string;
  }): Promise<{ transactionId: string } & BaseApiResponse>;

  postSingle(
    transaction: BaseTransaction<any>
  ): Promise<
    {
      accepted: string[];
      invalid: Array<{ id: string; reason: string }>;
    } & BaseApiResponse
  >;

  postMulti(
    transactions: Array<BaseTransaction<any>>
  ): Promise<
    {
      accepted: string[];
      invalid: Array<{ id: string; reason: string }>;
    } & BaseApiResponse
  >;
}
