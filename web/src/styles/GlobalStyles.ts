import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #ebf2f5;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 600 18px Nunito, serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
