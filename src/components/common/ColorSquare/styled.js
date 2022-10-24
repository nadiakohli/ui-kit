import styled, { css } from 'styled-components';

const bigSize = css`
  height: 200px;
  width: 200px;
  padding-left: 35px;
  padding-bottom: 35px;
`;

const smallSize = css`
  height: 100px;
  width: 100px;
  margin-bottom: 5px;
`;

const positionCenter = css`
  height: 70%;
  align-items: center;
`;

const changeColor = css`
  color: ${({ theme: { colors: { gray2 } } }) => gray2};
`;

const positionLeft = css`
  align-items: left;
`;

export const Wrap = styled.div`
  box-shadow: 0px 30px 100px rgba(0, 0, 0, 0.35);
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
  display: flex;
  align-items: end;
  && {
    ${({ type }) => {
    switch (type) {
      case 'large':
        return bigSize;
      case 'small':
      default:
        return smallSize;
    }
  }}
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  && {
    ${({ type }) => {
    switch (type) {
      case 'large':
        return positionLeft;
      case 'small':
      default:
        return positionCenter;
    }
  }}
  }
  && {
    ${({ grayColor }) => {
    switch (grayColor) {
      case 'title':
        return changeColor;
      case 'code':
        return changeColor;
      case 'both':
        return changeColor;
      default:
        return css`
          color: ${({ theme: { colors: { white } } }) => white};
        `;
    }
  }}
  }
`;

export const TitleSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  font-weight: 700;
  color: ${({ grayColor }) => grayColor === 'both' ? '#374151' : 'white'};
`;

export const CodeSpan = styled.span`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.8;
  text-transform: uppercase;
  font-family: ${({ theme: { fonts: { ubuntu } } }) => ubuntu};
  color: ${({ grayColor }) => grayColor === 'both' || grayColor === 'code' ? '#374151' : 'white'};
`;
