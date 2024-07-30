import { Outlet } from 'react-router-dom';
import MainHeader from '../components/Header';

const Layout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
