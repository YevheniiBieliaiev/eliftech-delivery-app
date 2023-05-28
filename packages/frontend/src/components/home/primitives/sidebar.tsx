import { shopProducts, shopName } from 'store/selectors/shop';
import { shopNameFilter } from 'store/shop';
import { Button } from 'components/primitives';
import { useAppSelector, useAppDispatch } from 'hooks';
import classes from './styles.module.css';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const shops = useAppSelector(shopProducts);
  const chosenShop = useAppSelector(shopName);

  const onChooseShopHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const shopName = event.currentTarget.id;
    dispatch(shopNameFilter({ shopName }));
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.button__group}>
        <Button
          id="all"
          onClick={onChooseShopHandler}
          cssExtension="shop"
          isActive={chosenShop === 'all'}
        >
          All Shops
        </Button>
        {shops.map(({ shopName, id }) => (
          <Button
            id={shopName}
            key={id}
            onClick={onChooseShopHandler}
            cssExtension="shop"
            isActive={chosenShop === shopName}
          >
            {shopName}
          </Button>
        ))}
      </div>
    </div>
  );
};
