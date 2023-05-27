import type { IProductModel } from '@interfaces';

export type IProdMap = Omit<
  IProductModel,
  'shopId' | 'createdAt' | 'updatedAt'
>;
