import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styles
const Button = styled.button`
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

const Text = ({ text, disabled }) => <Button disabled={disabled}>{text}</Button>;

Text.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Text;
