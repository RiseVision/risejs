import { BaseApiResponse } from "../base";
import { Percentage } from "../beans";

export interface LoaderAPI {
  status(): Promise<
    {
      broadhash: string;
      consensus: Percentage;
      height: number;
      isStale: boolean;
      syncing: boolean;
    } & BaseApiResponse
  >;

  ping(): Promise<BaseApiResponse>;
}
