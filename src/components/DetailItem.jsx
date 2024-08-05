import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Head } from './atom/HeadInfo';
import Metrics from '../components/atom/Metrics';

const DetailItem = () => {
  const detail = useSelector((state) => state.pokemon.detail);

  const isDarkActive = useSelector((state) => state.darkMode.isDarkActive);
  const { default_name = '', height = '', weight = '', img = {}, types = [], id = '' } = detail;

  console.log(img);
  const maintype = types.length ? types[0].type.name : '';

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
        <Metrics info={weight} label="weight" />
      </Box>
    </Container>
  );
};

export default DetailItem;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 68%;
  height: 100vh;
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
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 50px auto auto;
  box-shadow: rgba(0, 0, 0, 0.15) 10px 10px 10px 10px;
  border-radius: 10px;
  padding: 35px;

  font-family: 'yg-jalnan';
  justify-items: center;

  @media (max-width: 768px) {
    width: 50%;
    font-size: var(--font-size-normal);
  }
}
`;
