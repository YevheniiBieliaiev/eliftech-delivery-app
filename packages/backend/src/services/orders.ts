import type { OrdersRepository } from '@repositories';
import type { INewOrder, IOrderMap, IOrderIdentifier } from '@interfaces';

export class OrdersService {
  private ordersRepository: OrdersRepository;

  constructor({ ordersRepository }: { ordersRepository: OrdersRepository }) {
    this.ordersRepository = ordersRepository;
  }

  public async addNewOrder({
    newOrder,
  }: {
    newOrder: INewOrder;
  }): Promise<void> {
    await this.ordersRepository.addNewOrder({ newOrder });
  }

  public async getUserOrders({
    orderIdentifier,
  }: IOrderIdentifier): Promise<IOrderMap[]> {
    return await this.ordersRepository.getUserOrders({ orderIdentifier });
  }
}
