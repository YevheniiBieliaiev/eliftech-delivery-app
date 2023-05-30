import type { CardShopProps } from 'common/interfaces';
import type { StorageKeys } from 'common/types';

class LocalStorage {
  public set<T>(key: StorageKeys, item: T): void {
    if (key === 'cart') {
      const data = localStorage.getItem('cart') as string;
      const product = item as CardShopProps;
      let result: CardShopProps[] = [];

      if (data) {
        const items: CardShopProps[] = JSON.parse(data);
        const idx = items.findIndex((it) => it.id === product.id);
        idx > -1 ? items.splice(idx, 1, product) : items.push(product);
        result = [...items];
      } else {
        result.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(result));
    }
  }

  public get(key: StorageKeys): unknown {
    if (key === 'cart') {
      const data = localStorage.getItem('cart') as string;
      if (data) {
        return JSON.parse(data);
      } else {
        return [];
      }
    }
  }

  public delete<T>(key: StorageKeys, item: T): void {
    if (key === 'cart') {
      const data = localStorage.getItem('cart') as string;
      if (data) {
        const items: CardShopProps[] = JSON.parse(data);
        const idx = items.findIndex((it) => it.id === item);
        idx > -1 && items.splice(idx, 1);
        localStorage.setItem('cart', JSON.stringify(items));
      }
    }
  }

  public clear(key: StorageKeys): void {
    localStorage.removeItem(key);
  }
}

export const storage = new LocalStorage();
