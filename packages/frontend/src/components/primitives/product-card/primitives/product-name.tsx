import type { ProductNameProps } from './types';
import classes from './styles.module.css';

export const ProductName = ({ productName }: ProductNameProps) => (
  <div className={classes.product__name}>
    <span>{productName}</span>
  </div>
);
