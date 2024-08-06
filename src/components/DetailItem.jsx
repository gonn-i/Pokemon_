import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Head } from './atom/HeadInfo';
import Metrics from '../components/atom/Metrics';
import StatBox from './atom/Stats';
import types from '../styles/type';

const DetailItem = () => {
  const detail = useSelector((state) => state.pokemon.detail);
  const isDarkActive = useSelector((state) => state.darkMode.isDarkActive);
  const {
    default_name = '',
    height = '',
    weight = '',
    img = {},
    types = [],
    stats = [],
    id = '',
    abilities = [],
  } = detail;

  const maintype = types.length ? types[0].type.name : '';
  let ability = '';

  for (let i = 0; i < abilities.length; i++) {
    ability += ` ${abilities[i].ability.name} `;
    if (i == 0) ability += ` / `;
  }

  return (
    <Container>
      <Head isDarkActive={isDarkActive} name={default_name} maintype={maintype} types={types} id={id} />
      {img.front_default && (
        <PokemonImg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={default_name}
        />
      )}

      <Box isDarkActive={isDarkActive}>
        <Metrics info={weight} label="weight" />
        <Metrics info={height} label="height" />
        <Metrics info={ability} label="ability" />
      </Box>

      <StatBox isDarkActive={isDarkActive} stats={stats} maintype={maintype} />
    </Container>
  );
};

export default DetailItem;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 68%;
  height: 100vh;
  margin-bottom: 20px;
  border-radius: 15px;
  color: var(--text-color-main);
  box-shadow: var(--box-shadow-normal);
`;

const PokemonImg = styled.img`
  max-width: 200px;
  top: 21%;
  right: 31%;
  position: absolute;

  @media (max-width: 768px) {
    max-width: 130px;
    top: 25%;
    right: 20%;
  }
`;

const Box = styled.div`
color: ${({ isDarkActive }) => (isDarkActive ? 'var(--text-color-main)' : 'var(--text-color-black)')};
  width: 76%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 50px auto auto;
  box-shadow: rgba(0, 0, 0, 0.15) 10px 10px 10px 10px;
  border-radius: 10px;
  padding: 35px;

  font-family: 'yg-jalnan';
  justify-items: center;

  @media (max-width: 768px) {
    width: 70%;
    font-size: var(--font-size-small);
  }
}
`;
