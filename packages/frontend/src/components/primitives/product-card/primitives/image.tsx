import type { ImageProps } from './types';
import classes from './styles.module.css';

export const Image = ({ image }: ImageProps) => (
  <div>
    <img className={classes.image} src={image} alt="product" />
  </div>
);
