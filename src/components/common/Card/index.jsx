import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  width: 167px;
  height: 118px;
  border: 3px solid ${({ theme: { colors: { gray6 } } }) => gray6};
  border-radius: 10px;

  & span {
    color: ${({ theme: { colors: { gray4 } } }) => gray4};
    font-weight: 400;
    font-size: 13px;
  }
`;

const Card = ({ children, fontWeight }) => (
  <Wrap fontWeight={fontWeight}>{children}</Wrap>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  fontWeight: PropTypes.string.isRequired,
};

export default Card;
