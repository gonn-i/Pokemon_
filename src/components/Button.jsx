import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const ThemeBtn = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container isToggled={isToggled} onClick={toggle}>
      <Circle isToggled={isToggled} />
      {!isToggled && <span>☀️</span>}
      {isToggled && <span>🌝</span>}
    </Container>
  );
};

export default ThemeBtn;
const bgTransition = keyframes`
  0% {
    background-color: #fcd659;
  }
  100% {
    background-color: #333;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  height: 20px;
  border-radius: 15px;
  background-color: ${({ isToggled }) => (isToggled ? '#333' : '#fcd659')};
  justify-content: ${({ isToggled }) => (isToggled ? '' : 'space-around')};
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  ${({ isToggled }) =>
    isToggled &&
    css`
      animation: ${bgTransition} 0.3s forwards;
    `}
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.5s ease;
  transform: ${({ isToggled }) => (isToggled ? 'translateX(50px)' : 'translateX(0)')};
`;
