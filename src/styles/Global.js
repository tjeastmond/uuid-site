import { createGlobalStyle } from 'styled-components';
import reset from './Reset';

const Global = createGlobalStyle`
  ${reset}

  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background: #f5f1ee;
    flex-direction: column;
    font-family: Helvetica, arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default Global;
