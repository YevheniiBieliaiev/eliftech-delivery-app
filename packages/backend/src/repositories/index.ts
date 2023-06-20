import type { InitRepositories } from '@interfaces';
import { ShopsRepository } from './shops';
import { AuthRepository } from './auth';
import { OrdersRepository } from './orders';

export const initRepositories = (): InitRepositories => {
  const pathToDb = '../data-base';

  return {
    shopsRepository: new ShopsRepository({ pathToDb }),
    authRepositiry: new AuthRepository({ pathToDb }),
    ordersRepository: new OrdersRepository({ pathToDb }),
  };
};

export type Repositories = ReturnType<typeof initRepositories>;

export { type ShopsRepository, type AuthRepository, type OrdersRepository };
