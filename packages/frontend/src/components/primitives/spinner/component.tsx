import type { SpinnerProps } from './types';
import classes from './styles.module.css';

export const Spinner = ({ contrast = 'light' }: SpinnerProps) => (
  <div className={classes.spinner} data-contrast={contrast}></div>
);
