import { styled } from 'styled-components';
import Logo from '../assets/pokemon_logo.png';

const MainHeader = () => {
  return (
    <Header>
      <Navbar>
        <div>
          <LogoImg src={Logo} />
        </div>
        <NavBtns>
          <li>
            <button href="#darkmode">다크모드</button>
          </li>
          <li>
            <button href="#language">한국어/영어</button>
          </li>
        </NavBtns>
      </Navbar>
    </Header>
  );
};

export default MainHeader;

const Header = styled.header`
  color: white;
  padding: 10px 0;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;

const NavBtns = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  text-decoration: none;

  @media (max-width: 768px) {
    top: 50px;
    left: 0;
  }
`;

const LogoImg = styled.img`
  max-width: 240px;
  @media (max-width: 768px) {
    max-width: 140px;
  }
`;
