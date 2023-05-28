import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'hooks';
import { getProducts, shopNameFilter } from 'store/shop';
import { shopLoader } from 'store/selectors/shop';
import { Sidebar, Products } from './primitives';
import classes from './styles.module.css';

export const Home = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(shopLoader);

  useEffect(() => {
    dispatch(getProducts());

    return () => {
      dispatch(shopNameFilter({ shopName: 'all' }));
    };
  }, [dispatch]);

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <div className={classes.shop__wrapper}>
      <Sidebar />
      <Products />
    </div>
  );
};
