import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  Wrap,
  ContentWrap,
  TitleSpan,
  CodeSpan,
} from './styled';

const ColorSquare = ({
  titleColor,
  codeColor,
  type,
  title,
  backgroundColor,
}) => (
  <Wrap type={type} backgroundColor={backgroundColor}>
    <ContentWrap type={type}>
      <TitleSpan titleColor={titleColor}>{title}</TitleSpan>
      <CodeSpan codeColor={codeColor}>{backgroundColor}</CodeSpan>
    </ContentWrap>
  </Wrap>
);

ColorSquare.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  codeColor: PropTypes.string.isRequired,
};

export default ColorSquare;
