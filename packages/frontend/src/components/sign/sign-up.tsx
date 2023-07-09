import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import type { ISignUpForm } from 'common/interfaces';
import { InputText, Button, Spinner } from 'components/primitives';
import { useAppDispatch, useAppSelector } from 'hooks';
import { userRegister } from 'store/auth';
import { userLoader } from 'store/selectors/auth';
import { Candidate } from 'helpers';
import classes from './styles.module.css';

export const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(userLoader);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSignUp: SubmitHandler<ISignUpForm> = (data) => {
    const userDto = new Candidate(data);
    dispatch(userRegister({ data: userDto, navigate }));
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
      <form onSubmit={handleSubmit(onSignUp)}>
        <div className={classes.row}>
          <InputText
            {...register('name')}
            label="Name"
            placeholder="Enter your name"
            error={errors.name?.message}
          />
        </div>

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
            autoComplete="new-password"
            error={errors.password?.message}
            onCut={onCutHandler}
            onCopy={onCopyHandler}
            onPaste={onPastHandler}
          />
        </div>

        <div className={classes.row}>
          <InputText
            label="Confirm password"
            placeholder="Repeat your password"
            isPassword={true}
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            onCut={onCutHandler}
            onCopy={onCopyHandler}
            onPaste={onPastHandler}
          />
        </div>

        <div>
          <Button type="submit" cssExtension="form" disabled={loading}>
            {loading ? <Spinner /> : 'Sign In'}
          </Button>
        </div>
      </form>
    </div>
  );
};
