import type { IOrderModel } from '../db_models';

export interface IOrderMap
  extends Omit<IOrderModel, 'personalData' | 'createdAt' | 'updatedAt'> {}
