import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { ClientRoutes } from '../../common/enums';
import { HomePage, CartPage } from '../../pages';

interface AppRouterProviderProps {
  userId: string;
}

const publicRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  { path: ClientRoutes.CART, element: <CartPage /> },
];

const privateRoutes: RouteObject[] = [
  { path: ClientRoutes.HOME, element: <HomePage /> },
  { path: ClientRoutes.CART, element: <CartPage /> },
];

const routes = (userId: string): RouteObject[] =>
  userId ? privateRoutes : publicRoutes;

export const AppRouterProvider = ({ userId }: AppRouterProviderProps) => (
  <RouterProvider router={createBrowserRouter(routes(userId))} />
);
