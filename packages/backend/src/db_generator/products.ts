import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { IShopModel, IProductModel, IProdProto } from '@interfaces';

const products: IProdProto[] = [
  {
    productName: 'Hamburger',
    image:
      'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyJTIwcG5nfGVufDB8fDB8fHww&w=1000&q=80',
    description:
      'A hamburger is an extremely popular sandwich consisting of one or more meat patties placed in a bun or a bread roll. The meat is usually accompanied by various ingredients such as tomato slices, onions, pickles, or lettuce, and numerous condiments such as mayonnaise, ketchup, or salsa.',
    price: randomPrice(200, 400),
  },
  {
    productName: 'French fries',
    image:
      'https://img.freepik.com/premium-photo/isolated-portion-french-fries_219193-9461.jpg?w=2000',
    description:
      'French fries, also called chips, finger chips, fries, or French pommes frites, side dish or snack typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips. Fries are often salted and served with other items, including ketchup, mayonnaise, or vinegar.',
    price: randomPrice(200, 400),
  },
  {
    productName: 'Salad',
    image:
      'https://hips.hearstapps.com/del.h-cdn.co/assets/16/05/1600x850/gallery-1454624378-screen-shot-2016-02-04-at-51941-pm.png?resize=1200:*',
    description:
      'A salad is a dish consisting of mixed, mostly natural ingredients. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.',
    price: randomPrice(200, 400),
  },
  {
    productName: 'Dessert',
    image: 'https://i.obozrevatel.com/news/2023/1/11/pavlova.jpg?size=1944x924',
    description:
      'Dessert is a course that concludes a meal. The course consists of sweet foods, such as candy, and possibly a beverage such as dessert wine and liqueur. In some parts of the world, such as Greece and West Africa, and most parts of China, there is no tradition of a dessert course to conclude a meal.',
    price: randomPrice(200, 400),
  },
  {
    productName: 'Drinks',
    image:
      'https://thumbs.dreamstime.com/b/healthy-detox-raw-drink-water-raspberry-strawberry-cherry-isolated-background-png-high-quality-photo-271554651.jpg',
    description:
      'A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks. Traditionally warm beverages include coffee, tea, and hot chocolate.',
    price: randomPrice(200, 400),
  },
];

function randomPrice(min: number, max: number): number {
  const minLimit = Math.ceil(min);
  const maxLimit = Math.floor(max);

  return Math.floor(Math.random() * (maxLimit - minLimit + 1) + minLimit);
}

export const generateProductsDB = (): void => {
  const prodsLimit = 5;

  const serverPath = path.dirname(process.argv[1]);
  const pathToShopsDbFile = path.join(serverPath, '../data-base', 'shops.json');
  const pathToProductsDbFile = path.join(
    serverPath,
    '../data-base',
    'products.json',
  );

  const shops = <IShopModel[]>(
    JSON.parse(fs.readFileSync(pathToShopsDbFile, 'utf-8'))
  );

  const prods = <IProductModel[]>(
    JSON.parse(fs.readFileSync(pathToProductsDbFile, 'utf-8'))
  );

  shops.forEach((shop) => {
    const { id } = shop;
    for (let i = 0; i < prodsLimit; i++) {
      const product = products[Math.floor(Math.random() * products.length)];

      const productDro: IProductModel = {
        ...product,
        id: uuidv4(),
        createdAt: new Date(),
        updatedAt: new Date(),
        shopId: id,
      };

      prods.push(productDro);
    }
  });

  fs.writeFileSync(pathToProductsDbFile, JSON.stringify(prods), 'utf-8');
};
