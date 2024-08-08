import { styled } from 'styled-components';
import types from '../../../styles/type';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TypesContainer from '../Types';
import { Title, Num } from '../detail/HeadInfo';

const Card = ({ id, img, name, types }) => {
  const isDarkActive = useSelector((state) => state.darkMode.isDarkActive);
  const maintype = types[0].type.name;

  return (
    <Link to={`/${id}`}>
      <Container maintype={maintype} isDarkActive={isDarkActive}>
        <Num id={id} />
        <Title name={name} />
        <Bottom>
          <PokemonImg src={img.front_default} />
          <TypesContainer types={types} />
        </Bottom>
      </Container>
    </Link>
  );
};

export default Card;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ maintype, isDarkActive }) =>
    isDarkActive ? types.typeBgColor['darkMode'] : types.typeBgColor[maintype]};
  color: var(--text-color-main);
  text-decoration: none;
  border-radius: 15px;
  padding: 25px;
  box-shadow: var(--box-shadow-normal);
`;

const Bottom = styled.div`
  border: none;
`;

const PokemonImg = styled.img`
  min-width: 200px;
  bottom: -30px;
  right: 0px;
  position: absolute;

  @media (max-width: 1300px) {
    min-width: 180px;
  }

  @media (max-width: 768px) {
    min-width: 200px;
  }
`;
