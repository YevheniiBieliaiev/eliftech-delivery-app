import type { IShopResponse } from 'common/interfaces';
import type { ShopFilter } from './types';

export const shopFilter = ({
  products,
  shopName,
}: ShopFilter): IShopResponse[] => {
  if (shopName !== 'all') {
    return products.filter((shop) => shop.shopName === shopName);
  }

  return products;
};
