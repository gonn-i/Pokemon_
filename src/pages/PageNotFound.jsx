import React from 'react';
import { styled } from 'styled-components';
import { useSelector } from 'react-redux';
import types from '../styles/type';
import back from '../assets/background.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const data = useSelector((state) => state.pokemon.pokemons);
  const random = Math.floor(Math.random() * 151);
  const maintype = data[random].types[0].type.name;

  return (
    <Wrapper maintype={maintype}>
      <Container>
        <Error>4</Error>
        <ImgLine>
          <img
            key={data[random].id}
            src={data[random].img.other.showdown.front_default}
            alt={`Pokemon ${data[random].id}`}
          />
        </ImgLine>
        <Error>4</Error>
      </Container>
      <Error label="text">
        잘못된 주소입니다! <br /> 올바른 URL 주소를 입력하거나 <br />홈 버튼을 눌러 메인 페이지로 이동하세요
      </Error>
      <Link to="/">
        <HomeBtn maintype={maintype}>HOME</HomeBtn>
      </Link>
    </Wrapper>
  );
};

export default PageNotFound;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: ${({ maintype }) => `${types.typeBgColor[maintype]}75`};
  color: ${({ maintype }) => types.typeColor[maintype]};
  background-image: url(${back});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  display: flex;
  gap: 40px;
  text-align: center;
  padding: 50px;
  border-radius: 8px;
  align-items: center;
`;

const ImgLine = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Error = styled.h1`
  text-align: center;
  font-size: ${({ label }) => (label === 'text' ? '20px' : '100px')};
  font-family: 'DungGeunMo';
`;

const HomeBtn = styled.button`
  margin-top: 30px;
  font-family: 'DungGeunMo';
  background: ${({ maintype }) => types.typeColor[maintype]};
  padding: 15px 50px;
  color: var(--text-color-main);
  border-radius: 5px;

  &:hover {
    background-color: ${({ maintype }) => types.typeBgColor[maintype]};
    transform: scale(1.05);
  }
`;
