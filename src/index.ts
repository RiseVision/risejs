import { buildAPIObject, requester } from "./utils/internal_utils";

import { rs } from "./types/base";
import {
  AccountsAPIDefinition,
  BlocksAPIDefinition,
  DelegatesAPIDefinition,
  LoaderAPIDefinition,
  PeersAPIDefinition,
  TransactionsAPIDefinition
} from "./APIdefinition";
import {
  AccountsAPI,
  BlocksAPI,
  DelegatesAPI,
  LoaderAPI,
  PeersAPI,
  TransactionsAPI
} from "./types/apis";

export type RiseAPIWrapper = {
  accounts: AccountsAPI;
  blocks: BlocksAPI;
  delegates: DelegatesAPI;
  loader: LoaderAPI;
  peers: PeersAPI;
  transactions: TransactionsAPI;
};

export const Rise = {
  newWrapper(
    nodeAddress: string,
    opts: { timeout: number; errorAsResponse?: boolean } = { timeout: 10000 }
  ): RiseAPIWrapper {
    const req: rs = requester(nodeAddress, {
      errorAsResponse: true,
      ...opts
    });

    return {
      accounts: buildAPIObject(req, AccountsAPIDefinition),
      blocks: buildAPIObject(req, BlocksAPIDefinition),
      delegates: buildAPIObject(req, DelegatesAPIDefinition),
      loader: buildAPIObject(req, LoaderAPIDefinition),
      peers: buildAPIObject(req, PeersAPIDefinition),
      transactions: buildAPIObject(req, TransactionsAPIDefinition)
    };
  },
  rise: null as RiseAPIWrapper,
  trise: null as RiseAPIWrapper
};

Rise.rise = Rise.newWrapper("https://wallet.rise.vision");
Rise.trise = Rise.newWrapper("https://twallet.rise.vision");

export const rise = Rise.rise;
export const trise = Rise.trise;
