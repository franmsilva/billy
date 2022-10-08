import { IControllerCtx } from '@services/types';

import { client } from '../client';

import { getGreeting } from './greeting';

export const helloCtrl = () => {
  const ctx: IControllerCtx = {
    client: client(),
  };

  return {
    v1: {
      get: {
        greeting: getGreeting(ctx),
      },
    },
  };
};
