import { generateShopsDB } from './shops';
import { generateProductsDB } from './products';

/**
 * generateProductsDB is related with generateShopsDB, so we need to add generateShopsDB first in generators list
 */
const generators = [generateShopsDB, generateProductsDB];

type GeneratorFn = () => void;

const generateDB = (arg: GeneratorFn[]): void => {
  arg.forEach((fn) => fn());
};

generateDB(generators);
