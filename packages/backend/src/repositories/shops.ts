import path from 'path';
import fs from 'fs';
import util from 'util';
import type { IShopModel, IProductModel, IShopMap } from '@interfaces';
import { shopMapper } from '@mappers';

export class ShopsRepository {
  private pathToDb: string;

  private shopsDBFile = 'shops.json';

  private productsDBFile = 'products.json';

  constructor({ pathToDb }: { pathToDb: string }) {
    this.pathToDb = pathToDb;
  }

  public async getShopsAndProducts(): Promise<IShopMap[]> {
    const shopsReadPromise = util.promisify(fs.readFile);
    const productsReadPromise = util.promisify(fs.readFile);

    console.log(this.pathToDb);
    
    const shops = <IShopModel[]>(
      JSON.parse(
        await shopsReadPromise(
          path.join(this.pathToDb, this.shopsDBFile),
          'utf-8',
        ),
      )
    );
    
    const products = <IProductModel[]>(
      JSON.parse(
        await productsReadPromise(
          path.join(this.pathToDb, this.productsDBFile),
          'utf-8',
        ),
      )
    );

    return shops.map((shop) => shopMapper(shop, products));
  }
}
