import { lazy } from 'react';
import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { ClientRoutes } from 'common/enums';
import { SignLayout as SignPage } from 'components';
import { MainLayout } from 'components/layout';

const HomePage = lazy(() =>
  import('../../components/home').then(({ Home }) => ({ default: Home })),
);
const CartPage = lazy(() =>
  import('../../components/cart').then(({ Cart }) => ({ default: Cart })),
);
const OrdersPage = lazy(() =>
  import('../../components/orders').then(({ Orders }) => ({ default: Orders })),
);

const SignIn = lazy(() =>
  import('../../components/sign').then(({ SignIn }) => ({
    default: SignIn,
  })),
);
const SignUp = lazy(() =>
  import('../../components/sign').then(({ SignUp }) => ({
    default: SignUp,
  })),
);

interface AppRouterProviderProps {
  userId: string;
}

const publicRoutes: RouteObject[] = [
  {
    path: ClientRoutes.ROOT,
    element: <MainLayout />,
    children: [
      { path: ClientRoutes.HOME, element: <HomePage /> },
      {
        path: ClientRoutes.CART,
        element: <CartPage />,
      },
      { path: ClientRoutes.HISTORY, element: <OrdersPage /> },
      {
        element: <SignPage />,
        children: [
          { path: ClientRoutes.SIGNIN, element: <SignIn /> },
          { path: ClientRoutes.SIGNUP, element: <SignUp /> },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to={ClientRoutes.HOME} replace={true} /> },
];

const privateRoutes: RouteObject[] = [
  {
    path: ClientRoutes.ROOT,
    element: <MainLayout />,
    children: [
      { path: ClientRoutes.HOME, element: <HomePage /> },
      { path: ClientRoutes.CART, element: <CartPage /> },
      { path: ClientRoutes.HISTORY, element: <OrdersPage /> },
    ],
  },
  { path: '*', element: <Navigate to={ClientRoutes.HOME} replace={true} /> },
];

const routes = (userId: string): RouteObject[] =>
  userId ? privateRoutes : publicRoutes;

export const AppRouterProvider = ({ userId }: AppRouterProviderProps) => (
  <RouterProvider router={createBrowserRouter(routes(userId))} />
);
