import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  background-color: ${({ theme: { colors: { primary } } }) => primary};
  border-radius: 8px;
  border: none;
  margin: auto;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colors: { blueKoi } } }) => blueKoi};
  }

  &:active {
    background-color: ${({ theme: { colors: { colbat } } }) => colbat};
  }

  &:disabled {
    background-color: ${({ theme: { colors: { gray5 } } }) => gray5};
    cursor: inherit;
  }

  & svg {
    font-weight: 700;
    width: 14px;
    height: 14px;
    & fill {
      color: ${({ theme: { colors: { white } } }) => white};
    }
  }
`;
