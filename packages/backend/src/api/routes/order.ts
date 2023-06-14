import { Router } from 'express';
import { OrderRoutes, type ApiRoutes } from '@enums';
import type { INewOrder, IOrderIdentifier } from '@interfaces';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import { requestWrapper } from '@middlewares';

export const initOrdersRouter = (
  services: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.post(
    apiPath(path, OrderRoutes.SEND_ORDER),
    requestWrapper(async (req) => {
      const newOrder = <INewOrder>req?.body;

      await services.ordersService.addNewOrder({ newOrder });

      return;
    }),
  );

  router.get(
    apiPath(path, OrderRoutes.GET_ORDERS),
    requestWrapper(async (req) => {
      const { orderIdentifier } = <IOrderIdentifier>req?.query;

      return await services.ordersService.getUserOrders({ orderIdentifier });
    }),
  );

  return router;
};
