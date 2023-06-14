import type { IProductModel } from '@interfaces';

export interface IProdMap
  extends Omit<IProductModel, 'shopId' | 'createdAt' | 'updatedAt'> {}
