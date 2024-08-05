import styled, { keyframes, css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { themeActions } from '../../store/theme-slice';

const ThemeBtn = () => {
  const isDarkActive = useSelector((state) => state.darkMode.isDarkActive);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(themeActions.toggleDarkMode());
  };

  return (
    <Container isDarkActive={isDarkActive} onClick={onClick}>
      <Circle isDarkActive={isDarkActive} />
      {!isDarkActive && <span>☀️</span>}
      {isDarkActive && <span>🌝</span>}
    </Container>
  );
};

export default ThemeBtn;
const bgTransition = keyframes`
  0% {
    background: var(--toggle-background-light);
  }
  100% {
    background: var(--toggle-background-dark);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 70px;
  height: 20px;
  border-radius: 15px;
  background: ${({ isDarkActive }) =>
    isDarkActive ? 'var(--toggle-background-dark)' : 'var(--toggle-background-light)'};
  justify-content: ${({ isDarkActive }) => (isDarkActive ? '' : 'space-around')};
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  ${({ isDarkActive }) =>
    isDarkActive &&
    css`
      animation: ${bgTransition} 0.3s forwards;
    `}
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: var(--text-color-main);
  border-radius: 50%;
  transition: transform 0.5s ease;
  transform: ${({ isDarkActive }) => (isDarkActive ? 'translateX(50px)' : 'translateX(0)')};
`;
