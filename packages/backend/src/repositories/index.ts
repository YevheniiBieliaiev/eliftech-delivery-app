import path from 'path';
import type { InitRepositories } from '@interfaces';
import { ShopsRepository } from './shops';
import { AuthRepository } from './auth';

export const initRepositories = (): InitRepositories => {
  const serverPath = path.dirname(process.argv[1]);
  const pathToDb = path.join(serverPath, '../src/data-base');

  return {
    shopsRepository: new ShopsRepository({ pathToDb }),
    authRepositiry: new AuthRepository({ pathToDb }),
  };
};

export type Repositories = ReturnType<typeof initRepositories>;

export { type ShopsRepository, type AuthRepository };
