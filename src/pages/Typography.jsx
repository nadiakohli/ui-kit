import React from 'react';
import styled from 'styled-components';

// Styles
const Paragraph = styled.p`
  font-family: ${(props) => props.theme.fonts.ubuntu};
  font-weight: lighter;
  font-size: 25px;
`;

const Typography = () => (
  <Paragraph>Typography!</Paragraph>
);

export default Typography;
