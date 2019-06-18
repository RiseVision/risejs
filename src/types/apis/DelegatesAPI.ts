import { BaseApiResponse } from "../base";
import {
  Address,
  Block,
  Delegate,
  DelegateInfos,
  PubKey,
  TokenAmount,
  UnixEpochTime,
  Username
} from "../beans";

export interface DelegatesAPI {
  list(query?: {
    limit?: number;
    offset?: number;
    orderBy?: string;
  }): Promise<
    {
      delegates: Array<Delegate & { infos: DelegateInfos }>;
      totalCount: number;
    } & BaseApiResponse
  >;

  byUsername(
    username: string
  ): Promise<{
    delegate: Delegate;
    info: DelegateInfos;
    forgingPKs: Array<{
      forgingPK: PubKey;
      height: number;
    }>;
  }>;

  byForgingKey(
    forgingPK: PubKey
  ): Promise<{
    delegate: Delegate;
    info: DelegateInfos;
    forgingPKs: Array<{
      forgingPK: PubKey;
      height: number;
    }>;
  }>;

  /**
   * Query the rewards per username
   */
  rewards(query: {
    username: Username;
    from: UnixEpochTime;
    to: UnixEpochTime;
  }): Promise<
    {
      cumulative: {
        fees: TokenAmount;
        rewards: TokenAmount;
        totalBlocks: number;
      };
      details: Array<{
        forgingPK: PubKey;
        fromHeight: number;
        rewards: TokenAmount;
        totalBlocks: number;
      }>;
    } & BaseApiResponse
  >;

  voters(
    username: string
  ): Promise<
    {
      voters: Array<{
        address: Address;
        balance: TokenAmount;
      }>;
    } & BaseApiResponse
  >;

  search(query: {
    q: string;
    limit?: number;
    orderBy?: string;
  }): Promise<{
    delegates: Array<Delegate & { infos: DelegateInfos }>;
  }>;

  count(): Promise<{ count: number } & BaseApiResponse>;

  /**
   * Returns the next delegates meant to forge.
   * @param limit
   */
  nextForgers(
    limit?: number
  ): Promise<
    {
      currentBlock: Block;
      currentBlockSlot: number;
      currentSlot: number;
      delegates: PubKey[];
    } & BaseApiResponse
  >;

  forgingStatus(
    publicKey?: PubKey
  ): Promise<
    {
      enabled: true;
      delegates: PubKey[];
    } & BaseApiResponse
  >;

  forgingEnable(secret: string): Promise<BaseApiResponse>;

  forgingDisable(secret: string): Promise<BaseApiResponse>;
}
