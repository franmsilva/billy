import * as NextImage from 'next/image';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/styles/globals';
import { Theme } from '../src/styles/theme';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const customViewports = {
  mobileSmall: {
    name: 'Mobile Small',
    styles: {
      width: '320px',
      height: '848px',
    },
  },
  mobileMedium: {
    name: 'Mobile Medium',
    styles: {
      width: '375px',
      height: '848px',
    },
  },
  mobileLarge: {
    name: 'Mobile Large',
    styles: {
      width: '425px',
      height: '848px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '848px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1024',
      height: '848px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    defaultViewport: 'mobileMedium',
    viewports: customViewports,
  },
  layout: 'fullscreen',
  backgrounds: {
    default: 'Black',
    values: [{ name: 'Black', value: '#000000' }],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
