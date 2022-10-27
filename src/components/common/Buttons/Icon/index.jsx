import React from 'react';
import PropTypes from 'prop-types';

// Icons
import { ReactComponent as Plus } from 'assets/icons/plus.svg';

// Styles
import { Button } from './styled';

const Icon = ({ disabled }) => (
  <Button disabled={disabled}>
    <Plus />
  </Button>
);

Icon.propTypes = {
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  disabled: false,
};

export default Icon;
