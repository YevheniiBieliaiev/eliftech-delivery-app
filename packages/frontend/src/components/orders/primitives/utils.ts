import type { CardShopProps } from 'common/interfaces';

export const orderAmount = (products: CardShopProps[]): number =>
  products.reduce((acc, prod) => {
    const { price, count } = prod;

    return (acc += price * <number>count);
  }, 0);
