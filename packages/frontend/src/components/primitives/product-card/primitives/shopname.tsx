import type { ShopnameProps } from './types';
import classes from './styles.module.css';

export const ShopName = ({ shopName }: ShopnameProps) => (
  <div className={classes.shopname}>
    <span>Shop: {shopName}</span>
  </div>
);
