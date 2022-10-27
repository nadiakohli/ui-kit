import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button`
  height: 52px;
  width: 155px;
  background-color: ${({ theme: { colors: { primary } } }) => primary};
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: ${({ theme: { colors: { white } } }) => white};
  font-weight: 600;

  && {
    ${({ type }) => {
    switch (type) {
      case 'secondary':
        return css`background-color: ${({ theme: { colors: { secondary4 } } }) => secondary4};`;
      case 'primary':
      default:
        return css`background-color: ${({ theme: { colors: { primary } } }) => primary};`;
    }
  }}
  }

  && {
    ${({ size }) => {
    switch (size) {
      case 'small':
        return css`
          width: 136px;
          height: 48px;
          font-size: 14px;
        `;
      case 'smaller':
        return css`
          width: 100px;
          height: 52px;
          font-size: 16px;
        `;
      case 'medium':
        return css`
          width: 179px;
          height: 58px;
          font-size: 18px;
          font-weight: 700;
        `;
      case 'normal':
      default:
        return css`
          width: ${({ width }) => width ? '134px' : '155px'};
          height: 52px;
          font-size: 16px;
        `;
    }
  }}
  }

  && {
    ${({ variant }) => {
    switch (variant) {
      case 'outline':
        return css`
          color: ${({ theme: { colors: { primary } } }) => primary};
          background-color: ${({ theme: { colors: { white } } }) => white};
          border: 2px solid ${({ theme: { colors: { primary } } }) => primary};

          &:hover {
            background-color: ${({ theme: { colors: { casper } } }) => casper};
            border: 2px solid ${({ theme: { colors: { blueKoi } } }) => blueKoi};
          }
          &:active {
            background-color: ${({ theme: { colors: { geyser } } }) => geyser};
            border: 2px solid ${({ theme: { colors: { primary } } }) => primary};
          }
          &:disabled {
            color: ${({ theme: { colors: { gray5 } } }) => gray5};
            border: 2px solid ${({ theme: { colors: { gray5 } } }) => gray5};
            background-color: ${({ theme: { colors: { white } } }) => white};
            cursor: initial;
          }
        `;
      case 'normal':
      default:
        return css`
          &:hover {
            background-color: ${({ theme: { colors: { blueKoi } } }) => blueKoi};
          }

          &:active {
            background-color: ${({ theme: { colors: { colbat } } }) => colbat};
          }

          &:disabled {
            background-color: ${({ theme: { colors: { gray5 } } }) => gray5};
            cursor: initial;
          }
        `;
    }
  }}
  }

  && {
    ${({ icon }) => {
    switch (icon) {
      case true:
        return css`
            & svg {
            width: 16px;
            height: 16px;
            margin-right: 10px;
          }
        `;
      default:
        return css``;
    }
  }}
  }
`;
