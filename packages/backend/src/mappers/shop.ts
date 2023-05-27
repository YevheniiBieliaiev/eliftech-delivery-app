import type { IShopMap, IShopModel, IProductModel } from '@interfaces';
import { productMapper } from './product';

export const shopMapper = (
  shop: IShopModel,
  products: IProductModel[],
): IShopMap => {
  const { id, shopName } = shop;

  const prods = products.filter((it) => it.shopId === id).map(productMapper);

  return {
    id,
    shopName,
    products: prods,
  };
};
