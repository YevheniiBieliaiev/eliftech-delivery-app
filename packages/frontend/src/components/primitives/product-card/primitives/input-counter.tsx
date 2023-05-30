import type { InputCounterProps } from './types';
import classes from './styles.module.css';

export const InputCounter = ({
  value,
  onChange,
  ...props
}: InputCounterProps) => (
  <input
    className={classes.input__count}
    type="number"
    name="count"
    min="1"
    value={value}
    onChange={onChange}
    {...props}
  />
);
