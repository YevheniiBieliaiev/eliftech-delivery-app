import type { OrdersRepository } from '@repositories';
import type { INewOrder } from '@interfaces';

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
}
