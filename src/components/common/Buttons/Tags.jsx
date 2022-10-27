import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Icons
import { ReactComponent as Close } from 'assets/images/svg/close.svg';

// Styles
const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: ${({ theme: { colors: { primary } } }) => primary};
  color: ${({ theme: { colors: { white } } }) => white};
  font-size: 14px;
  border-radius: 65px;
  cursor: pointer;

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

  & svg {
    font-weight: 700;
    width: 10px;
    height: 10px;
    margin-left: 13px;
  }

`;

const Tags = ({ text, disabled }) => (
  <Button disabled={disabled}>
    {text}
    <Close />
  </Button>
);

Tags.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Tags;
