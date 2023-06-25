import { Link } from 'react-router-dom';
import type { InternalLinkProps } from './types';
import classes from './styles.module.css';

export const InternalLink = ({
  path,
  label,
  isInactive = false,
  isPath = false,
}: InternalLinkProps) => {
  const styles = [classes.internal__link];

  if (isInactive) {
    styles.push(classes.inactive);
  }

  if (isPath) {
    styles.push(classes.current__path);
  }

  return (
    <Link className={styles.join(' ')} to={path}>
      <span>{label}</span>
    </Link>
  );
};
