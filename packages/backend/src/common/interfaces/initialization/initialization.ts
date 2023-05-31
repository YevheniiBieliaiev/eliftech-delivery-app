import type {
  ShopsRepository,
  AuthRepository,
  OrdersRepository,
} from '@repositories';
import type { ShopsServices, AuthServices, OrdersService } from '@services';

export interface InitRepositories {
  shopsRepository: ShopsRepository;
  authRepositiry: AuthRepository;
  ordersRepository: OrdersRepository;
}

export interface InitServices {
  shopsServices: ShopsServices;
  authServices: AuthServices;
  ordersService: OrdersService;
}
