import { css, DefaultTheme } from 'styled-components';

export const BASE_FONT_SIZE = 12;

export const Theme: DefaultTheme = {
  colors: {
    cornflowerBlue: '#7C5DFA',
    cornflowerBlueLight: '#9277FF',
    sienna: '#EC5757',
    siennaLight: '#ff9797',
    selago: '#DFE3FA',
    baliHai: '#888EB0',
    shipCove: '#7E88C3',
    whisper: '#F8F8FB',
    vulcan: '#0C0E16',
    mirage: '#1E2139',
    mirageLight: '#252945',
    mirageDark: '#141625',
    slateGray: '#373b53',
  },
  borderRadius: {
    5: '5px',
    20: '20px',
  },
  fontSize: {
    sm: css`
      font-size: ${11 / BASE_FONT_SIZE}rem;
      line-height: ${18 / BASE_FONT_SIZE}rem;
    `,
    base: css`
      font-size: 1rem;
      line-height: 1.25rem;
    `,
    lg: css`
      font-size: ${16 / BASE_FONT_SIZE}rem;
      line-height: ${24 / BASE_FONT_SIZE}rem;
    `,
    xl: css`
      font-size: ${20 / BASE_FONT_SIZE}rem;
      line-height: ${22 / BASE_FONT_SIZE}rem;
    `,
    '2xl': css`
      font-size: ${32 / BASE_FONT_SIZE}rem;
      line-height: ${36 / BASE_FONT_SIZE}rem;
    `,
  },
  fontWeight: {
    bold: 700,
    medium: 500,
  },
  screens: {
    sm: '425px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
};
