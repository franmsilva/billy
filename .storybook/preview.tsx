import * as NextImage from 'next/image';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ContentDrawerProvider } from '../src/contexts/ContentDrawerContext';
import { ModalProvider } from '../src/contexts/ModalContext';
import { GlobalStyles } from '../src/styles/globals';
import { breakpoints } from '../src/styles/mediaQueries';
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
      width: breakpoints.mobileS,
      height: '568px',
    },
  },
  mobileMedium: {
    name: 'Mobile Medium',
    styles: {
      width: breakpoints.mobileM,
      height: '667px',
    },
  },
  mobileLarge: {
    name: 'Mobile Large',
    styles: {
      width: breakpoints.mobileL,
      height: '926px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: breakpoints.tablet,
      height: '1024px',
    },
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: breakpoints.laptop,
      height: '1366px',
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
  viewport: {
    viewports: customViewports,
    defaultViewport: 'mobileLarge'
  }
};

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ContentDrawerProvider>
          <ModalProvider>
            <Story />
          </ModalProvider>
        </ContentDrawerProvider>
      </ThemeProvider>
    </QueryClientProvider>
  ),
];
