import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {
  Container,
  ContentWrap,
  TitleSpan,
  CodeSpan,
} from './styled';

const ColorSquare = ({
  title,
  code,
  backgroundColor,
  opacity,
  textTransform,
  marginBottom,
  width,
  height,
  paddingLeft,
  alignItems,
  contentHeight,
  codeColor,
  titleColor,
}) => (
  <Container
    height={height}
    width={width}
    backgroundColor={backgroundColor}
  >
    <ContentWrap
      paddingLeft={paddingLeft}
      alignItems={alignItems}
      contentHeight={contentHeight}
    >
      <TitleSpan
        titleColor={titleColor}
        marginBottom={marginBottom}
      >
        {title}
      </TitleSpan>
      <CodeSpan
        codeColor={codeColor}
        opacity={opacity}
        textTransform={textTransform}
      >
        {code}
      </CodeSpan>
    </ContentWrap>
  </Container>
);

ColorSquare.propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  codeColor: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  opacity: PropTypes.string.isRequired,
  textTransform: PropTypes.string.isRequired,
  marginBottom: PropTypes.string.isRequired,
  paddingLeft: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  contentHeight: PropTypes.string.isRequired,
};

export default ColorSquare;
