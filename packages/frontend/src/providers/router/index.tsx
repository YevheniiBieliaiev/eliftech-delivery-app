import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { ClientRoutes } from 'common/enums';
import { HomePage, CartPage, OrdersPage, SignPage } from 'pages';
import { SignIn, SignUp } from 'components/sign';

interface AppRouterProviderProps {
  userId: string;
}

const publicRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  { path: ClientRoutes.CART, element: <CartPage /> },
  { path: ClientRoutes.HISTORY, element: <OrdersPage /> },
  {
    path: ClientRoutes.SIGN,
    element: <SignPage />,
    children: [
      { path: ClientRoutes.SIGNIN, element: <SignIn /> },
      { path: ClientRoutes.SIGNUP, element: <SignUp /> },
    ],
  },
];

const privateRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  { path: ClientRoutes.CART, element: <CartPage /> },
  { path: ClientRoutes.HISTORY, element: <OrdersPage /> },
];

const routes = (userId: string): RouteObject[] =>
  userId ? privateRoutes : publicRoutes;

export const AppRouterProvider = ({ userId }: AppRouterProviderProps) => (
  <RouterProvider router={createBrowserRouter(routes(userId))} />
);
