import path from 'path';
import type { InitRepositories } from '@interfaces';
import { ShopsRepository } from './shops';
import { AuthRepository } from './auth';
import { OrdersRepository } from './orders';

export const initRepositories = (): InitRepositories => {
  const serverPath = path.dirname(process.argv[1]);
  const pathToDb = path.join(serverPath, 'data-base');

  return {
    shopsRepository: new ShopsRepository({ pathToDb }),
    authRepositiry: new AuthRepository({ pathToDb }),
    ordersRepository: new OrdersRepository({ pathToDb }),
  };
};

export type Repositories = ReturnType<typeof initRepositories>;

export { type ShopsRepository, type AuthRepository, type OrdersRepository };
