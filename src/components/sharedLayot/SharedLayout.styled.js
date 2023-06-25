import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  max-height: 100vh;
  padding: 48px 48px 41px;
  background-color: #1d283a;
  color: #ffffff;
`;
const LogoSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #539713;
`;
const Logo = styled.p`
  margin: 0px;
  font-size: 36px;
  font-weight: 700;
  color: white;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const Main = styled.main`
  height: calc(100vh - 167px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Logo, LogoSpan, LinkTo, Main };
