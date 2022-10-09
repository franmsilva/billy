import { createGlobalStyle } from 'styled-components';

import { BASE_FONT_SIZE } from './theme';

export const GlobalStyles = createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.vulcan};
    background-color: ${({ theme }) => theme.colors.whisper};;
    font-size: ${BASE_FONT_SIZE};
    font-family: 'League Spartan', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    height: 100vh;
    overflow: auto;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  a, a:hover, a:focus, a:active  {
    text-decoration: none;
    color: inherit;
  }
`;
