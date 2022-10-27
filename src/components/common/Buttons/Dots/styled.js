import styled from 'styled-components';

export const Button = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;

  & svg {
    font-weight: 700;
    width: 4px;
    height: 16px;
    & path {
      fill: ${({ theme: { colors: { primary } } }) => primary};;
    }

    & path:hover {
      fill: ${({ theme: { colors: { blueKoi } } }) => blueKoi};
    }

    & path:active {
      fill: ${({ theme: { colors: { colbat } } }) => colbat};
    }
  }
`;
