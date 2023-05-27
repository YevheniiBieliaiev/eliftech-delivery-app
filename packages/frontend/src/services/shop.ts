import { http } from '../helpers';
import { ApiRoutes, ShopRoutes } from '../common/enums';
import type { IShopResponse } from '../common/interfaces';

export const shopProducts = (): Promise<IShopResponse[]> =>
  http.get({ url: `${ApiRoutes.SHOP}${ShopRoutes.GET_PRODUCTS}` });
