import { http } from 'helpers';
import { ApiRoutes, OrderRoutes } from 'common/enums';
import type {
  IOrderRequest,
  IOrderIdentifier,
  IOrdesResponse,
} from 'common/interfaces';

export const sendOrder = (data: IOrderRequest): Promise<void> =>
  http.post({
    url: `${ApiRoutes.ORDER}${OrderRoutes.SEND_ORDER}`,
    body: { ...data },
  });

export const getOrders = ({
  orderIdentifier,
}: IOrderIdentifier): Promise<IOrdesResponse[]> =>
  http.get({
    url: `${ApiRoutes.ORDER}${OrderRoutes.GET_ORDERS}?orderIdentifier=${orderIdentifier}`,
  });
