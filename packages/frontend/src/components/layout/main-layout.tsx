import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';
import { Container, ToastStack } from 'components/primitives';
import classes from './styles.module.css';

export const MainLayout = () => (
  <div className={classes.wrapper}>
    <Header />
    <main className={classes.main}>
      <ToastStack />
      <Container>
        <Suspense fallback={<span>Loading...</span>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
    <Footer />
  </div>
);
