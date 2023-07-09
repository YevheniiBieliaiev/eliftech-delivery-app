import { Outlet } from 'react-router-dom';
import { MainLayout, SignLayout } from 'components';
import { Container } from 'components/primitives';

const Sign = () => (
  <Container type="centered">
    <SignLayout>
      <Outlet />
    </SignLayout>
  </Container>
);

export const SignPage = () => (
  <MainLayout title="SIGN">
    <Sign />
  </MainLayout>
);
