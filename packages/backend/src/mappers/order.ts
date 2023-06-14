import type { IOrderModel, IOrderMap } from '@interfaces';

export const orderMapper = (order: IOrderModel): IOrderMap => {
  const { id, products } = order;

  return {
    id,
    products,
  };
};
