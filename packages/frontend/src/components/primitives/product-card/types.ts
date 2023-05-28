import type { IProductResponse } from 'common/interfaces';

export interface CardShopProps extends IProductResponse {
  shopId: string;
  shopName: string;
}
