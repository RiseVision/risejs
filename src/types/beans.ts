export interface BaseBlock {
  id: string;
  height: number;
  blockSignature: string;
  generatorPublicKey: PubKey;
  numberOfTransactions: number;
  payloadHash: string;
  payloadLength: number;
  previousBlock: string;
  timestamp: number;
  totalAmount: TokenAmount;
  totalFee: TokenAmount;
  reward: TokenAmount;
  version: number;
}

export interface Block extends BaseBlock {
  transactions: Array<ConfirmedTransaction<any>>;
}

export interface DelegateInfos {
  rankV1: number;
  rankV2: number;
  approval: Percentage;
  productivity: Percentage;
}

export interface Delegate {
  address: Address;
  cmb: number;
  forgingPK: PubKey;
  username: Username;
  vote: TokenAmount;
  votesWeight: TokenAmount;
  producedblocks: number;
  missedblocks: number;
}

export interface Account {
  address: Address;
  balance: string;
  unconfirmedBalance: string;
  forgingPK: string | null;
  username: string | null;
  secondPublicKey: string | null;
  secondSignature: boolean;
  unconfirmedSignature: boolean;
}

export enum TransactionType {
  SEND = 0,
  SIGNATURE = 1,
  DELEGATE = 2,
  VOTE = 3,
  SEND_V2 = 10,
  SIGNATURE_V2 = 11,
  DELEGATE_V2 = 12,
  VOTE_V2 = 13
}

export interface BaseTransaction<T> {
  id: string;
  type: TransactionType;
  timestamp: number;
  amount: TokenAmount;
  senderPubData: string;
  senderId: Address;
  recipientId: Address | null;
  fee: TokenAmount;
  asset: T;
  signatures: string[];
  version: number;
}
export interface ConfirmedTransaction<T> extends BaseTransaction<T> {
  height: number;
  blockId: string;
  confirmations: number;
}

export interface Peer {
  ip: string;
  port: number;
  state: PeerState;
  os: string;
  version: string;
  broadhash: string;
  height: number;
  updated: number;
  nonce: string;
}

export enum PeerState {
  BANNED = 0,
  DISCONNECTED = 1,
  ACTIVE = 2
}

export type Address = string;
export type TokenAmount = string;
export type Percentage = string;
export type Username = string;
export type UnixEpochTime = number;
export type PubKey = string;
