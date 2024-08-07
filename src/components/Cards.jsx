import Card from './atom/Card';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchList } from '../store/pokemon-actions';
import SearchBar from './atom/SearchBar';

const Cards = () => {
  const pokeDatas = useSelector((state) => state.pokemon.pokemons) || [];
  const dispatch = useDispatch();

  console.log(pokeDatas);
  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return (
    <Container>
      <SearchBar />
      <CardBox>
        {pokeDatas.map((data) => (
          <Card id={data.id} img={data.img} name={data.default_name} types={data.types} />
        ))}
      </CardBox>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 85%;
`;

const CardBox = styled.ul`
  margin: 1%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
