import type { ShopsRepository, AuthRepository } from '@repositories';
import type { ShopsServices, AuthServices } from '@services';

export interface InitRepositories {
  shopsRepository: ShopsRepository;
  authRepositiry: AuthRepository;
}

export interface InitServices {
  shopsServices: ShopsServices;
  authServices: AuthServices;
}
