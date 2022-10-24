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
  type,
  title,
  grayColor,
  backgroundColor,
}) => (
  <Wrap
    type={type}
    backgroundColor={backgroundColor}
  >
    <ContentWrap
      type={type}
      grayColor={grayColor}
    >
      <TitleSpan
        grayColor={grayColor}
      >
        {title}
      </TitleSpan>
      <CodeSpan
        grayColor={grayColor}
      >
        {backgroundColor}
      </CodeSpan>
    </ContentWrap>
  </Wrap>
);

ColorSquare.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  grayColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export default ColorSquare;
