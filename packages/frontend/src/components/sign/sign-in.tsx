import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { ISignIn } from 'common/interfaces';
import { InputText, Button, Spinner } from 'components/primitives';
import { useAppDispatch, useAppSelector } from 'hooks';
import { userLogin } from 'store/auth';
import { userLoader } from 'store/selectors/auth';
import classes from './styles.module.css';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loading = useAppSelector(userLoader);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSignIn: SubmitHandler<ISignIn> = (data) => {
    dispatch(userLogin({ data, navigate }));
  };

  const onCutHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };
  const onCopyHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };
  const onPastHandler = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    return false;
  };

  return (
    <div className={classes.form__wrapper}>
      <form onSubmit={handleSubmit(onSignIn)}>
        <div className={classes.row}>
          <InputText
            {...register('email')}
            label="Email"
            placeholder="Enter your email"
            error={errors.email?.message}
          />
        </div>

        <div className={classes.row}>
          <InputText
            {...register('password')}
            label="Password"
            placeholder="Enter your password"
            isPassword={true}
            error={errors.password?.message}
            onCut={onCutHandler}
            onCopy={onCopyHandler}
            onPaste={onPastHandler}
          />
        </div>

        <div className={classes.row}>
          <Button type="submit" cssExtension="form" disabled={loading}>
            {loading ? <Spinner /> : 'Sign In'}
          </Button>
        </div>
      </form>
    </div>
  );
};
