import { useAppSelector } from 'hooks';
import { userId } from 'store/selectors/auth';
import { cartCounter } from 'store/selectors/cart';
import { ClientRoutes } from 'common/enums';
import { InternalLink, Container } from 'components/primitives';
import classes from './styles.module.css';

export const Header = () => {
  const id = useAppSelector(userId);
  const cartCount = useAppSelector(cartCounter);

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__content}>
          <InternalLink label="Shop" path={ClientRoutes.HOME} />
          <div className={classes.cart__link}>
            <InternalLink label="Shopping Cart" path={ClientRoutes.CART} />
            <span className={classes.cart__counter}>{cartCount}</span>
          </div>

          {!id && (
            <InternalLink
              label="Sign"
              path={`${ClientRoutes.SIGN}/${ClientRoutes.SIGNIN} `}
            />
          )}
        </div>
      </Container>
    </header>
  );
};
