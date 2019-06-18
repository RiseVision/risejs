import { BaseApiResponse } from "../base";
import { Block, PubKey, TokenAmount, UnixEpochTime } from "../beans";

export interface BlocksAPI {
  list(query: {
    limit?: number;
    orderBy?: string;
    offset?: number;
    generatorPublicKey?: string;
    totalAmount?: TokenAmount;
    totalFee?: TokenAmount;
    reward?: TokenAmount;
    previousBlock?: string;
    height?: number;
  });

  /**
   * Query the rewards per block generator.
   */
  rewards(query: {
    generator: PubKey;
    from: UnixEpochTime;
    to: UnixEpochTime;
  }): Promise<
    { fees: string; rewards: string; totalBlocks: number } & BaseApiResponse
  >;

  /**
   * Query single block by id
   */
  get(id: string): Promise<{ block: Block } & BaseApiResponse>;

  /**
   * Get the coin genesis epoch datetime stringified
   */
  epoch(): Promise<{ epoch: string } & BaseApiResponse>;

  fees(
    height?: number
  ): Promise<
    {
      fromHeight: number;
      height: number;
      toHeight: number | null;
      fees: {
        send: TokenAmount;
        sendDataMultiplier: TokenAmount;
        vote: TokenAmount;
        secondsignature: TokenAmount;
        delegate: TokenAmount;
        [k: string]: TokenAmount;
      };
    } & BaseApiResponse
  >;

  // The followings have been replaced by status
  // height(): Promise<{height: number} & BaseApiResponse>;
  // broadhash(): Promise<{broadhash: string} & BaseApiResponse>;
  // nethash(): Promise<{nethash: string} & BaseApiResponse>;
  // milestone(): Promise<{milestone: number} & BaseApiResponse>;
  // reward(): Promise<{reward: string} & BaseApiResponse>;
  // supply(): Promise<{supply: string} & BaseApiResponse>;

  status(): Promise<
    {
      broadhash: string;
      epoch: string;
      fee: TokenAmount;
      height: number;
      milestone: number;
      nethash: string;
      reward: TokenAmount;
      supply: TokenAmount;
    } & BaseApiResponse
  >;
}
