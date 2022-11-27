import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';

import { ContentDrawerProvider } from '@src/contexts/ContentDrawerContext';
import { GlobalStyles } from '@styles/globals';
import { Theme } from '@styles/theme';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <ContentDrawerProvider>
          <Component {...pageProps} />
        </ContentDrawerProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
