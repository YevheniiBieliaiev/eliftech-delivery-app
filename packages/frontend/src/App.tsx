import { AppRouterProvider } from 'providers';
import { userId } from 'store/selectors/auth';
import { useAppSelector } from 'hooks';

export const App = () => {
  const id = useAppSelector(userId);

  return <AppRouterProvider userId={id} />;
};
