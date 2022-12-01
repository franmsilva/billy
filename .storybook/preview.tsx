import * as NextImage from 'next/image';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { ContentDrawerProvider } from '../src/contexts/ContentDrawerContext';
import { ModalProvider } from '../src/contexts/ModalContext';
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
  layout: 'fullscreen',
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
      <ContentDrawerProvider>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </ContentDrawerProvider>
    </ThemeProvider>
  ),
];
