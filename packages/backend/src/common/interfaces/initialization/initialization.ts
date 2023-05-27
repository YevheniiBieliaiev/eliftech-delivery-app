import type { ShopsRepository } from '@repositories';

import type { ShopsServices } from '@services';

export interface InitRepositories {
  shopsRepository: ShopsRepository;
}

export interface InitServices {
  shopsServices: ShopsServices;
}
