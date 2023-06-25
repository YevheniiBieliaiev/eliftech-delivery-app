import type { CardShopProps } from 'common/interfaces';

export interface OrderInfoProps
  extends Omit<
    Pick<CardShopProps, 'image' | 'productName' | 'price' | 'count'>,
    'count'
  > {
  count: number;
}
