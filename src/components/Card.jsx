import { styled } from 'styled-components';

const Card = () => {
  return (
    <Container>
      <div>
        <div>No.1</div>
        <h1>이상해씨</h1>
        <Bottom>
          <PokemonImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" />
          <Types>
            <Type>
              <img></img>
              <span>grass</span>
            </Type>
            <Type>
              <img></img>
              <span>poison</span>
            </Type>
          </Types>
        </Bottom>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.section`
  color: black;
  text-decoration: none;
  border-radius: 15px;
  padding: 25px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.15) 4px 10px 10px 0px;
`;

const Bottom = styled.div`
  border: none;
`;

const PokemonImg = styled.img`
  max-width: 100px;
  float: right;
  margin-bottom: 10px;
`;
const Types = styled.div`
  width: 70%;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;
const Type = styled.label`
  color: white;
  text-align: center;
  background: black;
  border-radius: 10px;
`;
