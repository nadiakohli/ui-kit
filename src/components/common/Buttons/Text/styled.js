import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ theme: { colors: { primary } } }) => primary};
  height: 32px;
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colors: { casper } } }) => casper};
  }

  &:active {
    background-color: ${({ theme: { colors: { geyser } } }) => geyser};
  }

  &:disabled {
    color: ${({ theme: { colors: { gray5 } } }) => gray5};
    background-color: transparent;
    cursor: initial;
  }
`;
