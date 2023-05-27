import type { Repositories } from '@repositories';
import type { InitServices } from '@interfaces';
import { ShopsServices } from './shops';

export const initServices = ({
  repositories,
}: {
  repositories: Repositories;
}): InitServices => ({
  shopsServices: new ShopsServices({
    shopsRepository: repositories.shopsRepository,
  }),
});

export type Services = ReturnType<typeof initServices>;

export { type ShopsServices };
