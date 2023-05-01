import { createGlobalStyle } from 'styled-components';

import montserratLight from '../assets/fonts/Montserrat-Light.ttf';
import regular from '../assets/fonts/Inter-Regular.ttf';
import regular_montserrat from '../assets/fonts/Montserrat-Regular.ttf';
import medium from '../assets/fonts/Inter-Medium.ttf';
import bold from '../assets/fonts/Inter-Bold.ttf';
import black from '../assets/fonts/Inter-Black.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${regular_montserrat}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: url(${montserratLight}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url(${regular}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    src: url(${medium}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    src: url(${bold}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    src: url(${black}) format('truetype');
  }

  html {
    font-family: Inter, Open-Sans, Sans-Serif, serif;
    font-weight: 400;
    font-size: 100%;
  }

  body {
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  img {
    height: auto;
    user-select: none;
  }

`;

export default GlobalStyle;
