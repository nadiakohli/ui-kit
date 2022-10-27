import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { ButtonStyle } from './styled';

const Button = ({
  disabled,
  children,
  type,
  size,
  width,
  variant,
  icon,
}) => (
  <ButtonStyle
    disabled={disabled}
    type={type}
    width={width}
    size={size}
    variant={variant}
    icon={icon}
  >
    {children}
  </ButtonStyle>
);

Button.propTypes = {
  icon: PropTypes.bool,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  width: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Button.defaultProps = {
  disabled: false,
  width: false,
  icon: false,
};

export default Button;
