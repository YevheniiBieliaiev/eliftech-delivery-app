type ButtonStyle = 'shop' | 'cart';

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'type'> {
  type?: 'button' | 'submit' | 'reset';
  cssExtension?: ButtonStyle;
  isActive?: boolean;
}
