import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      cornflowerBlue: '#7C5DFA';
      cornflowerBlueLight: '#9277FF';
      sienna: '#EC5757';
      siennaLight: '#ff9797';
      selago: '#DFE3FA';
      baliHai: '#888EB0';
      shipCove: '#7E88C3';
      whisper: '#F8F8FB';
      vulcan: '#0C0E16';
      mirage: '#1E2139';
      mirageLight: '#252945';
      mirageDark: '#141625';
      slateGray: '#373b53';
    };
    borderRadius: {
      4: '4px';
      20: '20px';
    };
    fontSize: {
      sm: FlattenSimpleInterpolation;
      base: FlattenSimpleInterpolation;
      lg: FlattenSimpleInterpolation;
      xl: FlattenSimpleInterpolation;
      '2xl': FlattenSimpleInterpolation;
    };
    fontWeight: {
      bold: 700;
      medium: 500;
    };
    screens: {
      sm: '425px';
      md: '768px';
      lg: '976px';
      xl: '1440px';
    };
  }
}
