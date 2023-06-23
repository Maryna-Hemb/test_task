import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Logo, LogoSpan, Link, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/home">
            <Logo>InCode</Logo> <br /> <LogoSpan>Finance</LogoSpan>
          </Link>
        </nav>
      </header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};
export default SharedLayout;
