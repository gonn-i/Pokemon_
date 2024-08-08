import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Head } from './atom/detail/HeadInfo';
import Metrics from './atom/detail/Metrics';
import StatBox from './atom/detail/Stats';
import LoadingModal from './atom/Modal';

const DetailItem = () => {
  const detail = useSelector((state) => state.pokemon.detail);
  const isDarkActive = useSelector((state) => state.darkMode.isDarkActive);
  const isLoading = useSelector((state) => state.pokemon.isLoading);

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
      {isLoading && <LoadingModal />}
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
  margin: 25px 0;
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

  margin: 50px auto ;
  box-shadow: rgba(0, 0, 0, 0.15) 10px 10px 10px 10px;
  border-radius: 10px;
  padding: 22px 40px;

  font-family: 'yg-jalnan';
  justify-items: center;

  @media (max-width: 768px) {
    width: 50%;
    font-size: var(--font-size-small);
    gap:10px;
    margin: 50px auto 40px;
  }
}
`;
