import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Logo, LogoSpan, LinkTo, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <LinkTo to="/home">
            <Logo>InCode</Logo> <br /> <LogoSpan>Finance</LogoSpan>
          </LinkTo>
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
