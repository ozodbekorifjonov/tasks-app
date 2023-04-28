import { createGlobalStyle } from 'styled-components';

import light from './fonts/Inter-Light.ttf';
import regular from './fonts/Inter-Regular.ttf';
import medium from './fonts/Inter-Medium.ttf';
import bold from './fonts/Inter-Bold.ttf';
import black from './fonts/Inter-Black.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    src: url(${regular}) format('truetype');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    src: url(${light}) format('truetype');
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
