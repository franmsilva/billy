import { css, DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  fontFamily: {
    header: "'Raleway', 'Open Sans', sans-serif",
    body: "'Roboto', 'Open Sans', sans-serif",
  },
  colors: {
    black: '#000000',
    white: '#ffffff',
    'gray-darkest': '#2b2b2b',
    'gray-dark': '#6b6b6b',
    gray: '#b8b8b8',
    'gray-light': '#f0f0f0',
    'gray-lightest': '#f3f4f5',
    purple: '#9e9eff',
    yellow: '#e1ff57',
  },
  borderRadius: {
    5: '5px',
  },
  fontSize: {
    xs: css`
      font-size: 0.75rem;
      line-height: 1rem;
    `,
    sm: css`
      font-size: 0.875rem;
      line-height: 1.25rem;
    `,
    base: css`
      font-size: 1rem;
      line-height: 1.5rem;
    `,
    lg: css`
      font-size: 1.125rem;
      line-height: 1.75rem;
    `,
    xl: css`
      font-size: 1.25rem;
      line-height: 1.75rem;
    `,
    '2xl': css`
      font-size: 1.5rem;
      line-height: 2rem;
    `,
    '3xl': css`
      font-size: 1.875rem;
      line-height: 2.25rem;
    `,
    '4xl': css`
      font-size: 2.25rem;
      line-height: 2.5rem;
    `,
  },
  fontWeight: {
    bold: 700,
    semibold: 500,
    regular: 400,
    light: 300,
    thin: 100,
  },
  screens: {
    sm: '425px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
};
