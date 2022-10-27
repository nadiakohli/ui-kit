import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { ReactComponent as ThreeDots } from 'assets/icons/dots.svg';

// Styles
import { Button } from './styled';

const Dots = ({ disabled }) => (
  <Button disabled={disabled}><ThreeDots /></Button>
);

Dots.propTypes = {
  disabled: PropTypes.bool,
};

Dots.defaultProps = {
  disabled: false,
};

export default Dots;
