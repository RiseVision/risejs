import { BaseTransaction } from "./types/beans";

export type RouteDefinition = {
  url: string;
  method?: string;
  queryParamNames?: string[];
  queryParamObject?: boolean;
  hasBody?: boolean;
  bodyModifier?: (obj: any) => any;
};

export const DefaultRouteParams = {
  url: "",
  method: "GET",
  queryParamNames: [],
  queryParamObject: false,
  hasBody: false,
  bodyModifier: a => a
};

export const AccountsAPIDefinition = {
  getAccount: {
    url: "/accounts",
    queryParamNames: ["address"]
  },
  getVotes: {
    url: "/accounts/votes",
    queryParamNames: ["address"]
  },
  topAccounts: {
    url: "/accounts/top",
    queryParamObject: true
  }
};

export const BlocksAPIDefinition = {
  list: {
    url: "/blocks",
    queryParamObject: true
  },
  rewards: {
    url: "/blocks/rewards",
    queryParamObject: true
  },
  get: {
    url: "/blocks/get",
    queryParamNames: ["id"]
  },
  // height: {
  //   url: '/blocks/getHeight',
  // },
  // broadhash: {
  //   url: '/blocks/getBroadhash'
  // },
  epoch: {
    url: "/blocks/getEpoch"
  },

  fees: {
    url: "/blocks/getFees",
    queryParamNames: ["height?"]
  },

  // nethash: {
  //   url: '/blocks/getNethash'
  // },
  //
  // milestone: {
  //   url: '/blocks/getMilestone'
  // },
  //
  // reward: {
  //   url: '/blocks/getReward'
  // },
  //
  // supply: {
  //   url: '/blocks/getSupply'
  // },

  status: {
    url: "/blocks/getStatus"
  }
};

export const DelegatesAPIDefinition = {
  list: {
    url: "/delegates",
    queryParamObject: true
  },
  byUsername: {
    url: "/delegates/get",
    queryParamNames: ["username"]
  },
  byForgingKey: {
    url: "/delegates/get",
    queryParamNames: ["publicKey"]
  },
  rewards: {
    url: "/delegates/rewards",
    queryParamObject: true
  },
  voters: {
    url: "/delegates/voters",
    queryParamNames: ["username"]
  },
  search: {
    url: "/delegates/search",
    queryParamObject: true
  },
  count: {
    url: "/delegates/count"
  },
  nextForgers: {
    url: "/delegates/getNextForgers",
    queryParamNames: ["limit?"]
  },
  forgingStatus: {
    url: "/delegates/forging/status",
    queryParamNames: ["publicKey?"]
  },
  forgingEnable: {
    url: "/delegates/forging/enable",
    method: "POST",
    hasBody: true
  },
  forgingDisable: {
    url: "/delegates/forging/disable",
    method: "POST",
    hasBody: true
  }
};

export const LoaderAPIDefinition = {
  status: {
    url: "/loader/status/sync"
  },
  ping: {
    url: "/loader/status/ping"
  }
};

export const PeersAPIDefinition = {
  list: {
    url: "/peers"
  },
  byIPPort: {
    url: "/peers/get",
    queryParamObject: true
  },
  count: {
    url: "/peers/count"
  },
  version: {
    url: "/peers/version"
  }
};

export const TransactionsAPIDefinition = {
  get: {
    url: "/transactions/get",
    queryParamNames: ["id"]
  },
  list: {
    url: "/transactions",
    queryParamObject: true
  },

  pendingList: {
    url: "/transactions/pending",
    queryParamObject: true
  },
  pending: {
    url: "/transactions/pending/get",
    queryParamNames: ["id"]
  },
  queuedList: {
    url: "/transactions/queued",
    queryParamObject: true
  },
  queued: {
    url: "/transactions/queued/get",
    queryParamNames: ["id"]
  },
  unconfirmedList: {
    url: "/transactions/unconfirmed",
    queryParamObject: true
  },
  unconfirmed: {
    url: "/transactions/unconfirmed/get",
    queryParamNames: ["id"]
  },

  count: {
    url: "/transactions/count"
  },
  localNodeCreate: {
    url: "/transactions/",
    method: "POST",
    hasBody: true
  },
  postSingle: {
    url: "/transactions/",
    method: "PUT",
    hasBody: true,
    bodyModifier(transaction: BaseTransaction<any>) {
      return { transaction };
    }
  },
  postMulti: {
    url: "/transactions/",
    method: "PUT",
    hasBody: true,
    bodyModifier(transactions: Array<BaseTransaction<any>>) {
      return { transactions };
    }
  }
};
