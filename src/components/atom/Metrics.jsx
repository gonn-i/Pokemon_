import { CiRuler } from 'react-icons/ci';
import { styled } from 'styled-components';
import { IoScaleOutline } from 'react-icons/io5';
import { GiStrong } from 'react-icons/gi';

const Metrics = ({ info, label }) => {
  let unit = '';
  if (label == 'weight') unit = ' kg';
  else if (label == 'height') unit = ' m';
  return (
    <Info>
      <span>
        {label == 'height' && <CiRuler style={{ 'font-size': 'large' }} />}
        {label == 'weight' && <IoScaleOutline style={{ 'font-size': 'large' }} />}
        {label == 'ability' && <GiStrong style={{ 'font-size': 'large' }} />}
      </span>
      <span>
        {info} {unit}
      </span>
    </Info>
  );
};

export default Metrics;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
