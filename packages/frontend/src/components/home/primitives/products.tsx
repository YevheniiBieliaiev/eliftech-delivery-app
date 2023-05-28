import { useMemo } from 'react';
import { CardShop } from 'components/primitives';
import { useAppSelector } from 'hooks';
import { shopProducts, shopName } from 'store/selectors/shop';
import { shopFilter } from './utils';
import classes from './styles.module.css';

export const Products = () => {
  const products = useAppSelector(shopProducts);
  const shop = useAppSelector(shopName);

  const filteredShop = useMemo(
    () => shopFilter({ products, shopName: shop }),
    [products, shop],
  );

  return (
    <div className={classes.products}>
      <div className={classes.products__group}>
        {filteredShop.map((shop) =>
          shop.products.map(
            ({ id, image, productName, description, price }) => (
              <CardShop
                key={id}
                id={id}
                image={image}
                productName={productName}
                description={description}
                price={price}
                shopId={shop.id}
                shopName={shop.shopName}
              />
            ),
          ),
        )}
      </div>
    </div>
  );
};
