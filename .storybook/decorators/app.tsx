import React from 'react';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ContentDrawerProvider } from '../../src/contexts/ContentDrawerContext';
import { ModalProvider } from '../../src/contexts/ModalContext';
import { GlobalStyles } from '../../src/styles/globals';
import { Theme } from '../../src/styles/theme';

const queryClient = new QueryClient();

// Contains all context providers that haven't been mocked
const AppDecorator = (Story) => (
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
);

export default AppDecorator;
