import { Button } from 'components/primitives';
import { Image, ProductName, Description, Price, ShopName } from './primitives';
import type { CardShopProps } from './types';
import classes from './styles.module.css';

export const CardShop = ({
  id,
  image,
  productName,
  description,
  price,
  shopId,
  shopName,
}: CardShopProps) => {
  const onAddToCartHandler = () => {
    console.log(id);
    console.log(shopId);
  };

  return (
    <div className={classes.card__shop}>
      <div className={classes.card__content}>
        <div className={classes.visual}>
          <Image image={image} />
          <ShopName shopName={shopName} />
        </div>

        <ProductName productName={productName} />
        <Description description={description} />
        <div className={classes.action}>
          <Price price={price} />
          <Button onClick={onAddToCartHandler} cssExtension="cart">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};
