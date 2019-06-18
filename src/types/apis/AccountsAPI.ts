import { BaseApiResponse } from "../base";
import { Account, Address, Delegate, Username } from "../beans";
// tslint:disable max-line-length

export interface AccountsAPI {
  /**
   * Get Account information by its address
   * @param address
   */
  getAccount(address: Address): Promise<{ account: Account } & BaseApiResponse>;

  /**
   * Return accounts delegates by using the given address
   * @param address
   */
  getVotes(address: Address): Promise<{ votes: Username[] } & BaseApiResponse>;

  /**
   * Returns the top accounts
   * WARNING: Node should allow the request as topAccounts is CPU Expensive.
   * @param limit
   * @param offset
   */
  topAccounts(
    limit: number,
    offset: number
  ): Promise<{ delegates: Delegate[] } & BaseApiResponse>;
}
