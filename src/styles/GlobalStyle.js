import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    background-color: #F2F2F2;
    color: #93918F;
  }

  h1,
  h2,
  h3, 
  h4, 
  h5, 
  h6 {
    font-family: 'Bitter', 'Montserrat', sans-serif;
    color: #000000;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
