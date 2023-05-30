import { useForm, type SubmitHandler } from 'react-hook-form';
import type { IOrderPersonalData } from 'common/interfaces';
import { useAppDispatch, useAppSelector } from 'hooks';
import { submitOrder } from 'store/order';
import { orderLoader } from 'store/selectors/order';
import { cart } from 'store/selectors/cart';
import { InputText, Button, Spinner } from 'components/primitives';
import { totalPrice } from './utils';
import classes from './styles.module.css';

export const UserData = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(orderLoader);
  const products = useAppSelector(cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderPersonalData>({
    defaultValues: {
      login: '',
      email: '',
      phone: '',
      address: '',
    },
  });

  const onSignupHandler: SubmitHandler<IOrderPersonalData> = (personalData) => {
    dispatch(submitOrder({ products, personalData }));
  };

  return (
    <div className={classes.form__wrapper}>
      <form onSubmit={handleSubmit(onSignupHandler)} className={classes.form}>
        <div className={classes.row}>
          <InputText
            {...register('login')}
            id="login"
            label="Name"
            placeholder="Enter your name"
            error={errors.login?.message}
            autoComplete="off"
          />
        </div>

        <div className={classes.row}>
          <InputText
            {...register('email')}
            id="email"
            label="Email"
            placeholder="Enter your email"
            error={errors.email?.message}
            autoComplete="off"
          />
        </div>

        <div className={classes.row}>
          <InputText
            {...register('phone')}
            id="phone"
            label="Phone"
            placeholder="Enter your phone"
            error={errors.phone?.message}
            autoComplete="off"
          />
        </div>

        <div className={classes.row}>
          <InputText
            {...register('address')}
            id="address"
            label="Address"
            placeholder="Enter your address"
            error={errors.address?.message}
            autoComplete="off"
          />
        </div>

        <div className={classes.submit}>
          <div>Total price: {totalPrice(products)}</div>
          <Button type="submit" cssExtension="cart" disabled={loading}>
            {loading ? <Spinner contrast="dark" /> : 'Submit'}
          </Button>
        </div>
      </form>
    </div>
  );
};
