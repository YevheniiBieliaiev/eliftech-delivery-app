import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { IShopModel } from '@interfaces';

const shopList = [
  'Mc Donny',
  'CFK',
  'Railway',
  'Potato Queen',
  'Whatasauce',
  'Cat in the Black Box',
];

export const generateShopsDB = (): void => {
  const serverPath = path.dirname(process.argv[1]);
  const pathToDbFile = path.join(serverPath, '../../data-base', 'shops.json');

  const shops = <IShopModel[]>(
    JSON.parse(fs.readFileSync(pathToDbFile, 'utf-8'))
  );

  shopList.forEach((shop) => {
    const isExists = shops.some(({ shopName }) => shopName === shop);
    if (!isExists) {
      const date = new Date();

      const shopDto: IShopModel = {
        id: uuidv4(),
        shopName: shop,
        createdAt: date,
        updatedAt: date,
      };

      shops.push(shopDto);
    }
  });

  fs.writeFileSync(pathToDbFile, JSON.stringify(shops), 'utf-8');
};

generateShopsDB();
