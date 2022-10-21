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
  border: 3px solid ${(props) => props.theme.colors.gray6};
  border-radius: 10px;

  & span {
    color: ${(props) => props.theme.colors.gray4};
    font-weight: 400;
    font-size: 13px;
  }
`;

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${({ fontWeight }) => fontWeight || 300};
  font-size: 48px;
`;

const Card = ({ title, text, fontWeight }) => (
  <Wrap>
    <H1 fontWeight={fontWeight}>{title}</H1>
    <span>{text}</span>
  </Wrap>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  fontWeight: PropTypes.string.isRequired,
};

export default Card;
