import type { CardShopProps } from 'common/interfaces';

export const totalPrice = (products: CardShopProps[]): number =>
  products.reduce((acc, item) => {
    const count = item.count as number;
    const itemSum = item.price * count;

    return (acc += itemSum);
  }, 0);
