import path from 'path';
import fs from 'fs';
import util from 'util';
import { v4 as uuidv4 } from 'uuid';
import type {
  IOrderModel,
  INewOrder,
  IOrderIdentifier,
  IOrderMap,
} from '@interfaces';
import { orderMapper } from '@mappers';

export class OrdersRepository {
  private pathToDb: string;

  private ordersDBFile = 'orders.json';

  constructor({ pathToDb }: { pathToDb: string }) {
    this.pathToDb = pathToDb;
  }

  public async addNewOrder({
    newOrder,
  }: {
    newOrder: INewOrder;
  }): Promise<void> {
    const ordersReadPromise = util.promisify(fs.readFile);
    const ordersWritePromise = util.promisify(fs.writeFile);

    const orders = <IOrderModel[]>(
      JSON.parse(
        await ordersReadPromise(
          path.join(this.pathToDb, this.ordersDBFile),
          'utf-8',
        ),
      )
    );

    const date = new Date();

    const orderDto: IOrderModel = {
      id: uuidv4(),
      ...newOrder,
      createdAt: date,
      updatedAt: date,
    };

    orders.push(orderDto);

    await ordersWritePromise(
      path.join(this.pathToDb, this.ordersDBFile),
      JSON.stringify(orders),
      'utf-8',
    );
  }

  public async getUserOrders({
    orderIdentifier,
  }: IOrderIdentifier): Promise<IOrderMap[]> {
    const ordersReadPromise = util.promisify(fs.readFile);

    const orders = <IOrderModel[]>(
      JSON.parse(
        await ordersReadPromise(
          path.join(this.pathToDb, this.ordersDBFile),
          'utf-8',
        ),
      )
    );

    return orders
      .filter(
        (order) =>
          order.id === orderIdentifier ||
          order.personalData.email === orderIdentifier ||
          order.personalData.phone === orderIdentifier,
      )
      .map(orderMapper);
  }
}
