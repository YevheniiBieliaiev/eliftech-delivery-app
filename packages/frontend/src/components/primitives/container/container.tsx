import type { ContainerProps } from './types';
import classes from './styles.module.css';

export const Container = ({ children, type }: ContainerProps) => (
  <div className={classes.container} data-content-pos={type}>
    {children}
  </div>
);
