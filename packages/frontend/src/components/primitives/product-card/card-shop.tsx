import { Button } from 'components/primitives';
import { storage } from 'helpers';
import { useAppDispatch } from 'hooks';
import { getLocalCart } from 'store/cart';
import type { CardShopProps } from 'common/interfaces';
import { Image, ProductName, Description, Price, ShopName } from './primitives';
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
  const dispatch = useAppDispatch();

  const onAddToCartHandler = () => {
    const productDto: CardShopProps = {
      id,
      image,
      productName,
      description,
      price,
      shopId,
      shopName,
      count: 1,
    };

    storage.set('cart', productDto);
    dispatch(getLocalCart());
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
