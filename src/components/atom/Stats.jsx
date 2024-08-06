import StatBar from './Stat';
import { styled } from 'styled-components';

const StatBox = ({ isDarkActive, stats, maintype }) => {
  return (
    <Box2 isDarkActive={isDarkActive}>
      <ul>
        {stats.map((stat, i) => (
          <StatBar
            stat={stat.stat.name}
            base={stat.base_stat}
            key={i}
            maintype={maintype}
            isDarkActive={isDarkActive}
          />
        ))}
      </ul>
    </Box2>
  );
};

export default StatBox;

const Box2 = styled.section`
  width: 70%;
  color: ${({ isDarkActive }) => (isDarkActive ? 'var(--text-color-main)' : 'var(--text-color-black)')};
  display: flex;
  justify-content: center;

  margin: 0px auto auto;
  font-family: 'DungGeunMo';
  font-size: var(--font-size-stat);
  font-weight: 900;
`;
