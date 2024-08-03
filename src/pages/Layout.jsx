import { Outlet } from 'react-router-dom';
import MainHeader from '../components/Header';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
const Layout = () => {
  const isDarkActive = useSelector((state) => state.darkMode.isDarkActive);
  return (
    <Container isDarkActive={isDarkActive}>
      <MainHeader />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: ${({ isDarkActive }) =>
    isDarkActive ? 'var(--background-color-dark)' : 'var(--background-color-light)'};
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
`;
