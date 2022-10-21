import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styles
const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.gray2};
  font-size: 32px;
  font-weight: 700;
`;

const Article = ({ title, children }) => (
  <>
    <Title>{title}</Title>
    {children}
  </>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Article;
