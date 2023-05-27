import type { Repositories } from '@repositories';
import type { InitServices } from '@interfaces';
import { ShopsServices } from './shops';
import { AuthServices } from './auth';
import { HashServices } from './hash';

export const initServices = ({
  repositories,
}: {
  repositories: Repositories;
}): InitServices => {
  const hashServices = new HashServices({
    authRepository: repositories.authRepositiry,
  });

  return {
    shopsServices: new ShopsServices({
      shopsRepository: repositories.shopsRepository,
    }),
    authServices: new AuthServices({
      authRepository: repositories.authRepositiry,
      hashServices,
    }),
  };
};

export type Services = ReturnType<typeof initServices>;

export { type ShopsServices, type AuthServices, type HashServices };
