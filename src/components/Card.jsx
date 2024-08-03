import { styled } from 'styled-components';
import types from '../styles/type';

const Card = ({ num, img, name, types }) => {
  const maintype = types[0].type.name;
  return (
    <Container maintype={maintype}>
      <div>
        <div>No.{num}</div>
        <Name>{name[0].name}</Name>
        <Bottom>
          <PokemonImg src={img.front_default} />
          <Types>
            {types.map((each, i) => (
              <Type key={i} type={each.type.name}>
                <span>{each.type.name}</span>
              </Type>
            ))}
          </Types>
        </Bottom>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ maintype }) => types.typeBgColor[maintype]};
  color: white;
  text-decoration: none;
  border-radius: 15px;
  padding: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 4px 10px 10px 4px;
`;

const Name = styled.h1`
  margin: 6px 0px 0px 0px;
  font-size: var(--font-size-large);
  font-family: 'yg-jalnan';
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
const Types = styled.div`
  width: 39%;
  margin-top: 10px;
  display: grid;
  gap: 14%;
  grid-template-columns: 1fr 1fr;
`;
const Type = styled.label`
  padding: 10%;
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-types)
  color: white;
  text-align: center;
  background-color: ${({ type }) => types.typeColor[type]};
  border-radius: 10px;
`;
