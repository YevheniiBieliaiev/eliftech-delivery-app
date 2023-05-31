import path from 'path';
import fs from 'fs';
import { promisify } from 'util';
import { generateShopsDB } from './shops';
import { generateProductsDB } from './products';

const createDBdir = async (): Promise<void> => {
  const dbDirName = 'data-base';
  const filesModel = [
    'users.json',
    'shops.json',
    'products.json',
    'orders.json',
  ];
  const serverPath = path.dirname(process.argv[1]);
  const pathToDB = path.join(serverPath, `../../${dbDirName}`);

  const mkDirPromise = promisify(fs.mkdir);
  await mkDirPromise(pathToDB, { recursive: true }).then(() => {
    filesModel.forEach((dbFile) => {
      const filePath = path.join(pathToDB, dbFile);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '[]');
      }
    });
  });
};

/**
 * generateProductsDB is related with generateShopsDB, so we need to add generateShopsDB first in generators list
 */
type GeneratorFn = () => void;

const generators = [generateShopsDB, generateProductsDB];

const dataGeneration = (arg: GeneratorFn[]): void => {
  arg.forEach((fn) => fn());
};

const generateDB = async (): Promise<void> => {
  await createDBdir();
  dataGeneration(generators);
  console.log('Database generation completed successfull.');
};

generateDB();
