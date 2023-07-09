import { useState, forwardRef, useId } from 'react';
import { SVGIcon } from 'components/primitives';
import type { InputTextProps } from './types';
import classes from './styles.module.css';

const Input = (
  {
    id,
    label,
    placeholder,
    error,
    isPassword = false,
    ...props
  }: InputTextProps,
  ref: React.LegacyRef<HTMLInputElement>,
) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const rId = useId();

  return (
    <div>
      {label && (
        <label
          className={classes.label}
          htmlFor={id ? id : rId}
          data-error={error && 'error'}
        >
          {label}
        </label>
      )}
      <div className={classes.inputInner}>
        <input
          ref={ref}
          className={classes.input}
          id={id ? id : rId}
          type={isPassword ? (showPassword ? 'text' : 'password') : 'text'}
          placeholder={placeholder}
          data-error={error && 'error'}
          {...props}
        />
        {error && <span className={classes.error}>{error}</span>}
        {isPassword && (
          <button
            type="button"
            className={classes.show}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <SVGIcon icon={showPassword ? 'eyeVisible' : 'eyeHidden'} />
          </button>
        )}
      </div>
    </div>
  );
};

export const InputText = forwardRef(Input);
