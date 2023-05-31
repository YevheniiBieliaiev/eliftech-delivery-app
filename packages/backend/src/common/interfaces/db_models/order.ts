import type { IOrderPersonalData } from '../requests';
import type { IProdMap } from '../mappers';

export interface CardShopProps extends IProdMap {
  shopId: string;
  shopName: string;
  count?: number;
}

export interface IOrderModel {
  id: string;
  personalData: IOrderPersonalData;
  products: CardShopProps[];
  createdAt: Date;
  updatedAt: Date;
}
