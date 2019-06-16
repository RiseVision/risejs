import { APIWrapper, BaseTransaction } from 'dpos-api-wrapper';
import { RiseAPIWrapper } from './RiseAPIWrapper';
import { cback } from 'dpos-api-wrapper/dist/es5/types/base';

export const convertWrapper = (original: APIWrapper): RiseAPIWrapper => {
  (original.transactions as any).put = (tx: Array<BaseTransaction<any>>|BaseTransaction<any>, callback?: cback<void>) => {
    if (Array.isArray(tx)) {
      return original.rawRequest({
        data: {transactions: tx},
        method: 'PUT',
        path: '/transactions',
      }, callback);
    }
    return original.rawRequest({
      data: {transaction: tx},
      method: 'PUT',
      path: '/transactions',
    }, callback);
  };

  return original as RiseAPIWrapper;
};
