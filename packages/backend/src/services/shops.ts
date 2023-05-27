import type { ShopsRepository } from '@repositories';
import type { IShopMap } from '@interfaces';

export class ShopsServices {
  private shopsRepository: ShopsRepository;

  constructor({ shopsRepository }: { shopsRepository: ShopsRepository }) {
    this.shopsRepository = shopsRepository;
  }

  public getShopsAndProducts(): Promise<IShopMap[]> {
    return this.shopsRepository.getShopsAndProducts();
  }
}
