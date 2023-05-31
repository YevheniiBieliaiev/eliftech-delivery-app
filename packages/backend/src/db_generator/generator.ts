import { generateShopsDB } from './shops';
import { generateProductsDB } from './products';

console.log(process.argv);
/**
 * generateProductsDB is related with generateShopsDB, so we need to add generateShopsDB first in generators list
 */
const generators = [generateShopsDB, generateProductsDB];

type GeneratorFn = () => void;

const generateDB = (arg: GeneratorFn[]): void => {
  console.log('Database generation started.');
  arg.forEach((fn) => fn());
  console.log('Database generation completed successfull.');
};

generateDB(generators);
