import ReactDOM from 'react-dom';
import { styled, keyframes } from 'styled-components';
import ball from '../../assets/pokeball.png';

const LoadingModal = () => {
  return ReactDOM.createPortal(
    <Modal>
      <ModalContent>
        <Pokeballs>
          <Pokeball src={ball} />
          <Pokeball src={ball} />
          <Pokeball src={ball} />
        </Pokeballs>
        <p>로딩중입니다!</p>
      </ModalContent>
    </Modal>,
    document.getElementById('root')
  );
};

export default LoadingModal;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

const Modal = styled.dialog`
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000000bd;
  border: #000000bd;
  z-index: 10000;
  font-family: 'yg-jalnan';
  color: white;
  box-sizing: none;
`;

const ModalContent = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

const Pokeballs = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: 1.5rem;
`;

const Pokeball = styled.img`
  width: 50px;
  animation: ${bounce} 1.5s infinite;
  &:nth-child(2) {
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;
