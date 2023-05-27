import type { IProdMap, IProductModel } from '@interfaces';

export const productMapper = (product: IProductModel): IProdMap => {
  const { id, productName, image, description, price } = product;

  return {
    id,
    productName,
    image,
    description,
    price,
  };
};
