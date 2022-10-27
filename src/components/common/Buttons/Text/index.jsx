import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Button } from './styled';

const Text = ({ children, disabled }) => <Button disabled={disabled}>{children}</Button>;

Text.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Text.defaultProps = {
  disabled: false,
};

export default Text;
