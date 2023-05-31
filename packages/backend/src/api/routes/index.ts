import type { Router } from 'express';
import { ApiRoutes } from '@enums';
import type { Services } from '@services';
import { initAuthRouter } from './auth';
import { initShopsRouter } from './shops';
import { initOrdersRouter } from './order';

export const initRoutes = ({ services }: { services: Services }): Router[] => [
  initAuthRouter(services, ApiRoutes.AUTH),
  initShopsRouter(services, ApiRoutes.SHOP),
  initOrdersRouter(services, ApiRoutes.ORDER),
];
