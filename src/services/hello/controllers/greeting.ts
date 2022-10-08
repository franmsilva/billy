import { TControllerFunc } from '@services/types';

import { GET_GREETING } from '../routes';

interface IGetFixturesConfig {
  params: { date: string };
}

export const getGreeting: TControllerFunc<IGetFixturesConfig, unknown> =
  ({ client }) =>
  async (config) => {
    const res = await client.get(GET_GREETING, config);

    return res.data;
  };
