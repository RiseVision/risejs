import { BaseApiResponse } from "../base";
import { Peer, PeerState } from "../beans";

export interface PeersAPI {
  list(query?: {
    state?: PeerState;
    os?: string;
    version?: string;
    limit?: number;
    offset?: number;
    orderBy?: string;
  }): Promise<
    {
      peers: Peer[];
    } & BaseApiResponse
  >;

  getByIPPort(params: {
    ip: string;
    port: number;
  }): Promise<{ peer: Peer } & BaseApiResponse>;

  count(): Promise<
    {
      connected: number;
      disconnected: number;
      banned: number;
    } & BaseApiResponse
  >;

  version(): Promise<
    {
      build: string;
      minVersion: string;
      version: string;
    } & BaseApiResponse
  >;
}
