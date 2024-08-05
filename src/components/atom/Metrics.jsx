import { CiRuler } from 'react-icons/ci';
import { styled } from 'styled-components';
import { IoScaleOutline } from 'react-icons/io5';

const Metrics = ({ info, label }) => {
  return (
    <Info>
      {label == 'height' && <CiRuler style={{ 'font-size': 'large' }} />}
      {label == 'weight' && <IoScaleOutline style={{ 'font-size': 'large' }} />}
      {info}kg
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
