import type { ContainerProps } from './types';
import classes from './styles.module.css';

export const Container = ({ children }: ContainerProps) => (
  <div className={classes.container}>{children}</div>
);
