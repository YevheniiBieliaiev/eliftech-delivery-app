import { Image, ProductName, Price, Count } from './primitives';
import type { OrderInfoProps } from './types';
import classes from './styles.module.css';

export const OrderInfo = ({
  productName,
  image,
  count,
  price,
}: OrderInfoProps) => (
  <div className={classes.card__shop}>
    <div className={classes.card__content}>
      <div className={classes.visual}>
        <div className={classes.img__divider}>
          <Image image={image} />
        </div>

        <div>
          <ProductName productName={productName} />
          <Count count={count} />
          <Price price={price} />
        </div>
      </div>
    </div>
  </div>
);
