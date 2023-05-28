import type { ButtonProps } from './types';
import classes from './styles.module.css';

export const Button = ({
  children,
  type = 'button',
  onClick,
  cssExtension,
  isActive = false,
  ...props
}: ButtonProps) => {
  const styles = [classes.button];

  if (cssExtension) {
    styles.push(classes[cssExtension]);
  }

  if (isActive) {
    styles.push(classes.active);
  }

  return (
    <button
      className={styles.join(' ')}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
