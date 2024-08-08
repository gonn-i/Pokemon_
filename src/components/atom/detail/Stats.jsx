import StatBar from './Stat';
import { styled } from 'styled-components';

const StatBox = ({ isDarkActive, stats, maintype }) => {
  return (
    <Box isDarkActive={isDarkActive}>
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
    </Box>
  );
};

export default StatBox;

const Box = styled.section`
  width: 80%;
  color: ${({ isDarkActive }) => (isDarkActive ? 'var(--text-color-main)' : 'var(--text-color-black)')};
  display: flex;
  justify-content: center;

  margin: 0px auto 30px;
  font-family: 'DungGeunMo';
  font-size: var(--font-size-stat);

  @media (max-width: 768px) {
    width: 70%;
    font-size: var(--font-size-normal);
  }
`;
