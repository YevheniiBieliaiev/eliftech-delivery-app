import { CardOrder } from 'components/primitives';
import { useAppSelector } from 'hooks';
import { cart } from 'store/selectors/cart';
import classes from './styles.module.css';

export const ChoseProducts = () => {
  const products = useAppSelector(cart);

  return (
    <div className={classes.cart__products}>
      <div className={classes.cart__group}>
        {products.length ? (
          products.map(
            ({
              id,
              image,
              productName,
              description,
              shopName,
              shopId,
              price,
            }) => (
              <CardOrder
                key={id}
                id={id}
                image={image}
                productName={productName}
                description={description}
                price={price}
                shopId={shopId}
                shopName={shopName}
              />
            ),
          )
        ) : (
          <span>
            There are no products in the cart. Make a choice and enjoy!
          </span>
        )}
      </div>
    </div>
  );
};
