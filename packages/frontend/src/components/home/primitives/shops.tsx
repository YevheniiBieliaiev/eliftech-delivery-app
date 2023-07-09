import { shopProducts, shopName } from 'store/selectors/shop';
import { shopNameFilter } from 'store/shop';
import { Button } from 'components/primitives';
import { useAppSelector, useAppDispatch } from 'hooks';
import classes from './styles.module.css';

export const Shops = () => {
  const dispatch = useAppDispatch();
  const shops = useAppSelector(shopProducts);
  const chosenShop = useAppSelector(shopName);

  const onChooseShopHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const shopName = event.currentTarget.id;
    dispatch(shopNameFilter({ shopName }));
  };

  return (
    <div className={classes.shops}>
      <div className={classes.button__group}>
        <div>
          <Button
            id="all"
            onClick={onChooseShopHandler}
            cssExtension="shop"
            isActive={chosenShop === 'all'}
          >
            All Shops
          </Button>
        </div>
        {shops.map(({ shopName, id }) => (
          <div key={id}>
            <Button
              id={shopName}
              onClick={onChooseShopHandler}
              cssExtension="shop"
              isActive={chosenShop === shopName}
            >
              {shopName}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
