import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  // max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
const Header = styled.header`
  display: flex;
  //   align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid rgb(166 164 164);

  > nav {
    display: flex;
  }
`;

const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

const Main = styled.main`
  padding: 0px 16 px;
`;

export { Container, Header, Link, Main };
