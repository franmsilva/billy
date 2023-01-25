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
    font-size: ${BASE_FONT_SIZE}px;
    font-family: 'League Spartan', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    height: 100vh;
    overflow: auto;
  }

  input,
  button,
  textarea,
  select {
    outline: none;
    appearance: none;
    font-family: 'League Spartan', sans-serif;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  a, a:hover, a:focus, a:active  {
    text-decoration: none;
  }
`;
