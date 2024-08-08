import { styled } from 'styled-components';
import back from '../../../assets/background.png';
import TypesContainer from '../Types';
import types from '../../../styles/type';

const Title = ({ name, label }) => {
  return (
    <>
      <Name label={label}>{name}</Name>
    </>
  );
};
const Num = ({ id }) => {
  return (
    <>
      <p>No.{id}</p>
    </>
  );
};

const Head = ({ maintype, isDarkActive, id, name, types }) => {
  return (
    <Back maintype={maintype} isDarkActive={isDarkActive}>
      <HeadContainer>
        <Num id={id} />
        <Title name={name} label="detail" />
        <TypesContainer types={types} page="detail" />
      </HeadContainer>
    </Back>
  );
};

export { Title, Num, Head };

const Name = styled.h1`
  text-shadow: var(--text-shadow-normal);
  margin: 6px 0px 0px 0px;
  font-size: ${({ label }) => (label == 'detail' ? 'var(--font-size-extralarge)' : 'var(--font-size-large)')};
  font-family: 'yg-jalnan';
`;

const Back = styled.div`
  height: 30%;
  border-radius: 15px 15px 0 0;
  align-content: center;
  background-color: ${({ maintype, isDarkActive }) =>
    isDarkActive ? types.typeBgColor['darkMode'] : types.typeBgColor[maintype]};
  background-image: url(${back});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

const HeadContainer = styled.div`
  padding-left: 20%;
`;
