import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { getLocalCart } from 'store/cart';
import { PageTitle } from 'components/primitives';
import { UserData, ChoseProducts } from './primitives';
import classes from './styles.module.css';

export const Cart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocalCart());
  }, [dispatch]);

  return (
    <PageTitle title="CART">
      <div className={classes.cart}>
        <UserData />
        <ChoseProducts />
      </div>
    </PageTitle>
  );
};
