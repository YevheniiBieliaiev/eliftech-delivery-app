import type { PriceProps } from './types';
import classes from './styles.module.css';

export const Price = ({ price }: PriceProps) => (
  <div>
    <span className={classes.price}>Price: {price}</span>
  </div>
);
