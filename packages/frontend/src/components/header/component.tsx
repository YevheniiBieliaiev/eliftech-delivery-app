import { useLocation } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { userId } from 'store/selectors/auth';
import { cartCounter } from 'store/selectors/cart';
import { ClientRoutes } from 'common/enums';
import { InternalLink, Container } from 'components/primitives';
import { isPath } from 'helpers';
import classes from './styles.module.css';

export const Header = () => {
  const id = useAppSelector(userId);
  const cartCount = useAppSelector(cartCounter);
  const { pathname } = useLocation();

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__content}>
          <InternalLink
            label="Shop"
            path={ClientRoutes.HOME}
            isPath={isPath(pathname, ClientRoutes.HOME)}
          />

          <div className={classes.cart__link}>
            <InternalLink
              label="Shopping Cart"
              path={ClientRoutes.CART}
              isPath={isPath(pathname, ClientRoutes.CART)}
            />
            <span className={classes.cart__counter}>{cartCount}</span>
          </div>

          <InternalLink
            label="History"
            path={ClientRoutes.HISTORY}
            isPath={isPath(pathname, ClientRoutes.HISTORY)}
          />

          {!id && <InternalLink label="Sign" path={ClientRoutes.SIGNIN} />}
        </div>
      </Container>
    </header>
  );
};
