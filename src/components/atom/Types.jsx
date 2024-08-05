import { styled } from 'styled-components';
import types from '../../styles/type';

const TypesContainer = ({ types, page }) => {
  return (
    <Types page={page}>
      {types.map((each, i) => (
        <Type key={i} type={each.type.name} page={page}>
          <span>{each.type.name}</span>
        </Type>
      ))}
    </Types>
  );
};

export default TypesContainer;

const Types = styled.div`
  width: ${({ page }) => (page == 'detail' ? '20%' : '39%')};
  margin-top: 10px;
  display: grid;
  gap: ${({ page }) => (page == 'detail' ? '5%' : '14%')};
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: ${({ page }) => (page == 'detail' ? '1fr' : '1fr 1fr')};
    gap: ${({ page }) => page == 'detail' && '14%'};
  }
`;
const Type = styled.label`
  padding: 10%;
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-types)
  color: var(--text-color-main);
  text-align: center;
  background-color: ${({ type }) => types.typeColor[type]};
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: ${({ page }) => page == 'detail' && '6%'};
  }
`;
