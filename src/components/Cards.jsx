import Card from './Card';
import { styled } from 'styled-components';

const Cards = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Cards;

const Container = styled.section`
  margin: 1%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
