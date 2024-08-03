import Card from './Card';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchList } from '../store/pokemon-actions';

const Cards = () => {
  const pokeDatas = useSelector((state) => state.pokemon.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  console.log(pokeDatas);
  return (
    <Container>
      {pokeDatas.map((data) => (
        <Card key={data.id} num={data.id} img={data.img} name={data.default_name} types={data.types} />
      ))}
    </Container>
  );
};

export default Cards;

const Container = styled.section`
  margin: 1%;
  width: 85%;
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
