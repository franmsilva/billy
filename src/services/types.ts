import { AxiosInstance } from 'axios';

export interface IControllerCtx {
  client: AxiosInstance;
}

export type TControllerFunc<Config, Data> = (
  ctx: IControllerCtx
) => TControllerHandler<Config, Data>;

export type TControllerHandler<Config, Data> = (config: Config) => Promise<Data>;
