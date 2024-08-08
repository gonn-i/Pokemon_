import types from '../../../styles/type';
import { styled, keyframes } from 'styled-components';

const StatBar = ({ stat, base, maintype, isDarkActive }) => {
  return (
    <Stat>
      <span>{stat}</span>
      <span>{base}</span>
      <GaugeContainer>
        <Gauge width={`${base}%`} maintype={maintype} />
      </GaugeContainer>
    </Stat>
  );
};

export default StatBar;

const Stat = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  justify-items: start;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
  margin-left: 10%;

  @media (max-width: 768px) {
    justify-items: center;
    margin-left: 0;
  }
`;

const GaugeContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

const fillAnimation = (base) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${base}%;
  }
`;

const Gauge = styled.div`
  height: 15px;
  width: 100%;
  background: #e2e2e2;
  border-radius: 15px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: ${({ width }) => width};
    background: ${({ maintype }) => types.typeBgColor[maintype]};
    position: absolute;
    top: 0;
    left: 0;
    animation: ${({ base }) => fillAnimation(base)} 2s ease-out;
  }
  @media (max-width: 768px) {
    height: 10px;
  }
`;
