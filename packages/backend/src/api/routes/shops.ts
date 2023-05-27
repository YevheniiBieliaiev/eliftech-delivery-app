import { Router } from 'express';
import { ShopRoutes, type ApiRoutes } from '@enums';
import type { Services } from '@services';
import { apiPath } from '@helpers';
import { requestWrapper } from '@middlewares';

export const initShopsRouter = (
  services: Services,
  path: ApiRoutes,
): Router => {
  const router = Router();

  router.get(
    apiPath(path, ShopRoutes.GET_PRODUCTS),
    requestWrapper(
      async () => await services.shopsServices.getShopsAndProducts(),
    ),
  );

  return router;
};
