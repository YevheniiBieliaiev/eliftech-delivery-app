import type { IShopResponse } from 'common/interfaces';

export interface ShopFilter {
  shopName: string;
  products: IShopResponse[];
}
