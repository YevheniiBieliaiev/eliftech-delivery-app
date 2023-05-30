import type { CardShopProps } from '../components';
import type { IOrderPersonalData } from './auth';

export interface IOrderRequest {
  personalData: IOrderPersonalData;
  products: CardShopProps[];
}
