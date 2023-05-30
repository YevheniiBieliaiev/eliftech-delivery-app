import * as iconsSVG from 'components/images/svg';
import type { SVGIconProps } from './types';
import classes from './styles.module.css';

export const SVGIcon = ({ icon }: SVGIconProps) => (
  <div>
    <img className={classes.icon} src={iconsSVG[icon]} alt="icon" />
  </div>
);
