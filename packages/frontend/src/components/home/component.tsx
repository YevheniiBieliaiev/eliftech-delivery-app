import { useEffect } from 'react';
import { PageTitle } from 'components/primitives';
import { useAppSelector, useAppDispatch } from 'hooks';
import { getProducts, shopNameFilter } from 'store/shop';
import { shopLoader } from 'store/selectors/shop';
import { Shops, Products } from './primitives';
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
    <PageTitle>
      <div className={classes.shop__wrapper}>
        <Shops />
        <Products />
      </div>
    </PageTitle>
  );
};
