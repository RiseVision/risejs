import { APIWrapper, BaseTransaction, Transaction } from 'dpos-api-wrapper';
import { TransactionsAPI } from 'dpos-api-wrapper/dist/es5/types/apis/TransactionsAPI';
import { BaseApiResponse, cback } from 'dpos-api-wrapper/dist/es5/types/base';


export type RiseAPITransaction = TransactionsAPI & {
  /**
   * Enqueues a new transaction (or multiple transactions) for inclusion in the block
   * @param {Array<Transaction<any>> | Transaction<any>} tx
   * @param {cback<void>} callback
   * @since 1.1.1 core version
   */
  put(tx: Array<BaseTransaction<any> & {senderId: string}>|(BaseTransaction<any> & {senderId: string}), callback?: cback<void>): Promise<BaseApiResponse>;
}
export type RiseAPIWrapper = APIWrapper & {
  transactions: RiseAPITransaction
}
