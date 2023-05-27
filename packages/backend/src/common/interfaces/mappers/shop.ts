import type { IShopModel } from '@interfaces';
import type { IProdMap } from './products';

export interface IShopMap extends Omit<IShopModel, 'createdAt' | 'updatedAt'> {
  products: IProdMap[];
}
