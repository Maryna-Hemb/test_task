import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">
            InCode <br>Finance</br>
          </Link>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
export default SharedLayout;
