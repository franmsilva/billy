import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      cornflowerBlue: '#7C5DFA';
      cornflowerBlueLight: '#9277FF';
      sienna: '#EC5757';
      siennaLight: '#FF9797';
      selago: '#DFE3FA';
      selagoLight: '#F9FAFE';
      baliHai: '#888EB0';
      shipCove: '#7E88C3';
      whisper: '#F8F8FB';
      vulcan: '#0C0E16';
      mirage: '#1E2139';
      mirageLight: '#252945';
      mirageDark: '#141625';
      slateGray: '#373B53';
      eucalyptus: '#33D69F';
      darkOrange: '#FF8F00';
    };
    borderRadius: {
      4: '4px';
      6: '6px';
      8: '8px';
      20: '20px';
      24: '24px';
    };
    fontSize: {
      sm: FlattenSimpleInterpolation;
      base: FlattenSimpleInterpolation;
      lg: FlattenSimpleInterpolation;
      xl: FlattenSimpleInterpolation;
      '2xl': FlattenSimpleInterpolation;
    };
    zIndex: {
      overlay: 20;
      dialog: 30;
      navbar: 40;
      modal: 50;
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
