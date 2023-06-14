import type { CardShopProps } from '../db_models';
import type { IOrderPersonalData } from './auth';

export interface INewOrder {
  personalData: IOrderPersonalData;
  products: CardShopProps[];
}

export interface IOrderIdentifier {
  orderIdentifier?: string;
}
