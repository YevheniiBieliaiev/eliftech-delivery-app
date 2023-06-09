import { useTitle } from 'hooks';
import { Header, Footer } from 'components';
import { Container, ToastStack } from 'components/primitives';
import { setTitle } from './utils';
import type { MainLayoutProps } from './types';
import classes from './styles.module.css';

export const MainLayout = ({ children, title = '' }: MainLayoutProps) => {
  useTitle(setTitle(title));

  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <ToastStack />
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
