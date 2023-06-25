import { OrderInfo } from 'components/primitives';
import { useAppSelector } from 'hooks';
import { orders } from 'store/selectors/order';
import { orderAmount } from './utils';
import classes from './styles.module.css';

export const UserOrders = () => {
  const userOrders = useAppSelector(orders);

  return (
    <>
      {userOrders.length ? (
        <div className={classes.orders}>
          <div className={classes.orers__content}>
            {userOrders.map(({ products, id }) => (
              <div key={id} className={classes.order__container}>
                <div className={classes.order__products}>
                  <div className={classes.products}>
                    {products.map(
                      ({ id, image, productName, count, price }) => (
                        <OrderInfo
                          key={id}
                          image={image}
                          productName={productName}
                          count={count as number}
                          price={price}
                        />
                      ),
                    )}
                  </div>
                  <div className={classes.order__amount}>
                    <span>Total price: {orderAmount(products)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        'Orders will be displayed here'
      )}
    </>
  );
};
