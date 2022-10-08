import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontFamily: {
      header: "'Raleway', 'Open Sans', sans-serif";
      body: "'Roboto', 'Open Sans', sans-serif";
    };
    colors: {
      black: '#000000';
      white: '#ffffff';
      'gray-darkest': '#2b2b2b';
      'gray-dark': '#6b6b6b';
      gray: '#b8b8b8';
      'gray-light': '#f0f0f0';
      'gray-lightest': '#f3f4f5';
      purple: '#9e9eff';
      yellow: '#e1ff57';
    };
    borderRadius: {
      5: '5px';
    };
    fontSize: {
      xs: FlattenSimpleInterpolation;
      sm: FlattenSimpleInterpolation;
      base: FlattenSimpleInterpolation;
      lg: FlattenSimpleInterpolation;
      xl: FlattenSimpleInterpolation;
      '2xl': FlattenSimpleInterpolation;
      '3xl': FlattenSimpleInterpolation;
      '4xl': FlattenSimpleInterpolation;
    };
    fontWeight: {
      bold: 700;
      semibold: 500;
      regular: 400;
      light: 300;
      thin: 100;
    };
    screens: {
      sm: '425px';
      md: '768px';
      lg: '976px';
      xl: '1440px';
    };
  }
}
