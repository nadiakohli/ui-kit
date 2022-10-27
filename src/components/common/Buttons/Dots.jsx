import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Icons
import { ReactComponent as ThreeDots } from 'assets/images/svg/dots.svg';

// Styles
const Button = styled.button`
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

const Dots = ({ disabled }) => (
  <Button disabled={disabled}><ThreeDots /></Button>
);

Dots.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

export default Dots;
