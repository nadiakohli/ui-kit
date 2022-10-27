import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

// Fonts
import light from 'assets/fonts/Ubuntu-Light.ttf';
import regular from 'assets/fonts/Ubuntu-Regular.ttf';
import medium from 'assets/fonts/Ubuntu-Medium.ttf';
import bold from 'assets/fonts/Ubuntu-Bold.ttf';

const theme = {
  colors: {
    primary: '#116ACC',
    blueKoi: '#6794D5',
    colbat: '#21498a',
    geyser: '#d2e0f3',
    casper: '#a7c2e7',
    secondary1: '#182233',
    secondary2: '#B3CEE2',
    secondary3: '#D9DDE7',
    secondary4: '#FD4E5D',
    black: '#000',
    gray1: '#1F2937',
    gray2: '#374151',
    gray3: '#4B5563',
    gray4: '#6B7280',
    gray5: '#9CA3AF',
    gray6: '#D1D5DB',
    gray7: '#F3F4F6',
    white: '#fff',
    whiteSmoke: '#f3f4f6',
    info: '#A0C3FF',
    success: '#76CA66',
    warning: '#FBC756',
    error: '#BA0000',
  },
  fonts: {
    ubuntu: 'Ubuntu, sans-serif',
  },
};

// Global style
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu-Light';
    src: url(${light}) format('ttf');
  }

  @font-face {
    font-family: 'Ubuntu-Regular';
    src: url(${regular}) format('ttf');
  }

  @font-face {
    font-family: 'Ubuntu-Medium';
    src: url(${medium}) format('ttf');
  }

  @font-face {
    font-family: 'Ubuntu-Bold';
    src: url(${bold}) format('ttf');
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Theme;
