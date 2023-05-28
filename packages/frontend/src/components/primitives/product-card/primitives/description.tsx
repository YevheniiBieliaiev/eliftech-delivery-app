import type { DescriptionProps } from './types';
import classes from './styles.module.css';

export const Description = ({ description }: DescriptionProps) => (
  <div className={classes.description__wrapper}>
    <span className={classes.description}>{description}</span>
  </div>
);
