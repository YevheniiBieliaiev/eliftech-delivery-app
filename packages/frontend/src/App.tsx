import { useEffect } from 'react';
import { AppRouterProvider } from 'providers';
import { useAppDispatch } from 'hooks';
import { getLocalCart } from 'store/cart';
import { userId } from 'store/selectors/auth';
import { useAppSelector } from 'hooks';

export const App = () => {
  const id = useAppSelector(userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getLocalCart());
  }, [dispatch]);

  return <AppRouterProvider userId={id} />;
};
