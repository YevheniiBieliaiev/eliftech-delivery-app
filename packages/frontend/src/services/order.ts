import { http } from 'helpers';
import { ApiRoutes, OrderRoutes } from 'common/enums';
import type { IOrderRequest } from 'common/interfaces';

export const sendOrder = (data: IOrderRequest): Promise<void> =>
  http.post({
    url: `${ApiRoutes.ORDER}${OrderRoutes.SEND_ORDER}`,
    body: { ...data },
  });
