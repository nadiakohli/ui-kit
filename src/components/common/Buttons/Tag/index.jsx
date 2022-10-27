import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { ReactComponent as Close } from 'assets/icons/close.svg';

// Styles
import { Button } from './styled';

const Tag = ({ children, disabled }) => (
  <Button disabled={disabled}>
    {children}
    <Close />
  </Button>
);

Tag.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disabled: PropTypes.bool,
};

Tag.defaultProps = {
  disabled: false,
};

export default Tag;
