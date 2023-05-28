import { useAppSelector } from 'hooks';
import { userId } from 'store/selectors/auth';
import { ClientRoutes } from 'common/enums';
import { InternalLink, Container } from 'components/primitives';
import classes from './styles.module.css';

export const Header = () => {
  const id = useAppSelector(userId);

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__content}>
          <InternalLink label="Shop" path={ClientRoutes.HOME} />
          <InternalLink label="Shopping Cart" path={ClientRoutes.CART} />
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
