import type { CountProps } from './types';
import classes from './styles.module.css';

export const Count = ({ count }: CountProps) => (
  <div className={classes.count}>
    <span>Number: {count}</span>
  </div>
);
