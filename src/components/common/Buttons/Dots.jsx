import React from 'react';
import styled from 'styled-components';

// Icons
import { ReactComponent as ThreeDots } from 'assets/images/svg/dots.svg';

// Styles
const Button = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;

  & svg {
    font-weight: 700;
    width: 4px;
    height: 16px;
    & path {
      fill: ${({ theme: { colors: { primary } } }) => primary};;
    }

    & path:hover {
      fill: ${({ theme: { colors: { blueKoi } } }) => blueKoi};
    }

    & path:active {
      fill: ${({ theme: { colors: { colbat } } }) => colbat};
    } 

    & path:disabled {
      fill: ${({ theme: { colors: { gray5 } } }) => gray5};
    }
  }

`;

const Dots = () => (
  <Button><ThreeDots /></Button>
);

export default Dots;
