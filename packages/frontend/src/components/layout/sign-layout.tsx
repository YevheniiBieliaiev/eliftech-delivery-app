import { Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { InternalLink, Container, PageTitle } from 'components/primitives';
import { ClientRoutes } from 'common/enums';
import { defineLocation } from './utils';
import classes from './styles.module.css';

export const SignLayout = () => {
  const location = defineLocation(useLocation());

  return (
    <PageTitle title="SIGN">
      <Container type="centered">
        <div className={classes.sign}>
          <div className={classes.link__group}>
            <div
              className={classes.tab}
              data-location={location.signup && 'inactive'}
            >
              <div className={classes.tab__inner}>
                <InternalLink
                  path={ClientRoutes.SIGNIN}
                  label="Sign In"
                  isInactive={location.signup}
                />
              </div>
            </div>

            <div
              className={classes.tab}
              data-location={location.signin && 'inactive'}
            >
              <div className={classes.tab__inner}>
                <InternalLink
                  path={ClientRoutes.SIGNUP}
                  label="Sign Up"
                  isInactive={location.signin}
                />
              </div>
            </div>
          </div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </Container>
    </PageTitle>
  );
};
