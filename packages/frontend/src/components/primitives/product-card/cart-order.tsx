import { useState } from 'react';
import { Button } from 'components/primitives';
import type { CardShopProps } from 'common/interfaces';
import { storage } from 'helpers';
import { useAppDispatch } from 'hooks';
import { getLocalCart } from 'store/cart';
import {
  Image,
  ProductName,
  Description,
  Price,
  ShopName,
  InputCounter,
} from './primitives';
import classes from './styles.module.css';

export const CardOrder = ({
  id,
  image,
  productName,
  description,
  price,
  shopId,
  shopName,
}: CardShopProps) => {
  const [counter, setCount] = useState(1);
  const [cost, setCost] = useState(price);

  const dispatch = useAppDispatch();

  const onDeleteCardHandler = () => {
    storage.delete('cart', id);

    dispatch(getLocalCart());
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(+e.currentTarget.value);
    setCost(price * +e.currentTarget.value);

    const orderDto: CardShopProps = {
      id,
      image,
      productName,
      description,
      price,
      shopId,
      count: +e.currentTarget.value,
      shopName,
    };

    storage.set('cart', orderDto);
    dispatch(getLocalCart());
  };

  return (
    <div className={classes.card__shop}>
      <div className={classes.card__content}>
        <div className={classes.visual}>
          <Image image={image} />
          <div>
            <ShopName shopName={shopName} />
            <div className={classes.remove__btn}>
              <Button onClick={onDeleteCardHandler} cssExtension="delete">
                Delete
              </Button>
            </div>
          </div>
        </div>

        <ProductName productName={productName} />
        <Description description={description} />
        <div className={classes.action}>
          <Price price={cost} />
          <InputCounter value={counter} onChange={onChangeHandler} />
        </div>
      </div>
    </div>
  );
};
