import { useForm, type SubmitHandler } from 'react-hook-form';
import type { IOrderPersonalData } from 'common/interfaces';
import { useAppDispatch, useAppSelector } from 'hooks';
import { submitOrder } from 'store/order';
import { clearCart } from 'store/cart';
import { orderLoader } from 'store/selectors/order';
import { cart } from 'store/selectors/cart';
import { cartUserData } from 'store/selectors/auth';
import { GoogleMap } from 'components/google-map';
import { InputText, Button, Spinner } from 'components/primitives';
import { totalPrice } from './utils';
import classes from './styles.module.css';

export const UserData = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(orderLoader);
  const products = useAppSelector(cart);
  const { name, email } = useAppSelector(cartUserData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderPersonalData>({
    defaultValues: {
      name,
      email,
      phone: '',
      address: '',
    },
  });

  const onSignupHandler: SubmitHandler<IOrderPersonalData> = (personalData) => {
    dispatch(submitOrder({ products, personalData }));
  };

  const onClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className={classes.form__wrapper}>
      <GoogleMap />
      <form onSubmit={handleSubmit(onSignupHandler)} className={classes.form}>
        <div className={classes.data__inputs}>
          <div className={classes.data__container}>
            <div className={classes.row}>
              <InputText
                {...register('name')}
                label="Name"
                placeholder="Enter your name"
                error={errors.name?.message}
                autoComplete="off"
              />
            </div>

            <div className={classes.row}>
              <InputText
                {...register('email')}
                label="Email"
                placeholder="Enter your email"
                error={errors.email?.message}
                autoComplete="off"
              />
            </div>
          </div>

          <div className={classes.data__container}>
            <div className={classes.row}>
              <InputText
                {...register('phone')}
                label="Phone"
                placeholder="Enter your phone"
                error={errors.phone?.message}
                autoComplete="off"
              />
            </div>

            <div className={classes.row}>
              <InputText
                {...register('address')}
                label="Address"
                placeholder="Enter your address"
                error={errors.address?.message}
                autoComplete="off"
              />
            </div>
          </div>
        </div>

        <div className={classes.submit}>
          <div className={classes.submit__action}>
            <div>Total price: {totalPrice(products)}</div>
            <Button type="submit" cssExtension="cart" disabled={loading}>
              {loading ? <Spinner contrast="dark" /> : 'Submit'}
            </Button>
          </div>

          <Button onClick={onClearCart} cssExtension="delete">
            Clear cart
          </Button>
        </div>
      </form>
    </div>
  );
};
