import { useForm, type SubmitHandler } from 'react-hook-form';
import { InputText, Button, Spinner } from 'components/primitives';
import type { IOrderIdentifier } from 'common/interfaces';
import { useAppDispatch, useAppSelector } from 'hooks';
import { userOrders } from 'store/order';
import { orderLoader } from 'store/selectors/order';
import classes from './styles.module.css';

export const Form = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(orderLoader);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderIdentifier>({
    defaultValues: {
      orderIdentifier: '',
    },
  });

  const onSearchOrders: SubmitHandler<IOrderIdentifier> = (data) => {
    dispatch(userOrders(data));
  };

  return (
    <form
      className={classes.search__form}
      onSubmit={handleSubmit(onSearchOrders)}
    >
      <div className={classes.search__order}>
        <div className={classes.input}>
          <InputText
            {...register('orderIdentifier')}
            id="orderIdentifier"
            label="Enter your phone, email or order id"
            placeholder="Phone, email, order id"
            error={errors.orderIdentifier?.message}
          />
        </div>

        <Button type="submit" cssExtension="search">
          {loading ? <Spinner /> : 'Search'}
        </Button>
      </div>
    </form>
  );
};
