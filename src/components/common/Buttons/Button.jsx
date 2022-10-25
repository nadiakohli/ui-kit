import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Styles
const Container = styled.button`
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
      case 'small':
        return css`
          width: 136px;
          height: 48px;
          font-size: 14px;
        `;
      case 'normal':
        return css`
          width: 100px;
          height: 52px;
          font-size: 16px;
          font-weight: 600;

          &:hover {
            background-color: ${({ theme: { colors: { blueKoi } } }) => blueKoi};
          }

          &:active {
            background-color: ${({ theme: { colors: { colbat } } }) => colbat};
          }

          &:disabled {
            background-color: ${({ theme: { colors: { gray5 } } }) => gray5};
          }
        `;
      case 'medium':
        return css`
          width: 179px;
          height: 58px;
          font-size: 18px;
          font-weight: 700;
        `;
      case 'iconText':
        return css`
          width: 134px;
          height: 52px;
          font-size: 16px;
          font-weight: 600;

          & svg {
            width: 16px;
            height: 16px;
            margin-right: 10px;
          }

          &:hover {
            background-color: ${({ theme: { colors: { blueKoi } } }) => blueKoi};
          }

          &:active {
            background-color: ${({ theme: { colors: { colbat } } }) => colbat};
          }

          &:disabled {
            background-color: ${({ theme: { colors: { gray5 } } }) => gray5};
          }
        `;
      case 'outline':
        return css`
          width: 100px;
          height: 52px;
          font-size: 16px;
          font-weight: 600;
          background-color: ${({ theme: { colors: { white } } }) => white};
          color: ${({ theme: { colors: { primary } } }) => primary};
          border: 2px solid ${({ theme: { colors: { primary } } }) => primary};

          &:hover {
            border: 2px solid ${({ theme: { colors: { blueKoi } } }) => blueKoi};
            background-color: ${({ theme: { colors: { casper } } }) => casper};
          }

          &:active {
            border: 2px solid ${({ theme: { colors: { primary } } }) => primary};
            background-color: ${({ theme: { colors: { geyser } } }) => geyser};
          }

          &:disabled {
            color: ${({ theme: { colors: { gray5 } } }) => gray5};
            border: 2px solid ${({ theme: { colors: { gray5 } } }) => gray5};
          }
        `;
      case 'primary':
      default:
        return css`background-color: ${({ theme: { colors: { primary } } }) => primary};`;
    }
  }}
  }
`;

const Button = ({ children, type }) => (
  <Container type={type}>
    {children}
  </Container>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Button;
