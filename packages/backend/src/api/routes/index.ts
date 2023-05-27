import type { Router } from 'express';
import { ApiRoutes } from '@enums';
import type { Services } from '@services';
import { initAuthRouter } from './auth';
import { initShopsRouter } from './shops';

export const initRoutes = ({ services }: { services: Services }): Router[] => [
  initAuthRouter(),
  initShopsRouter(services, ApiRoutes.SHOP),
];
