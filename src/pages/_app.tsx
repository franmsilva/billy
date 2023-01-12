import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import Protectedroute from '@components/atoms/Protectedroute';
import { GlobalStyles } from '@styles/globals';
import { Theme } from '@styles/theme';

import { AuthContextProvider } from '../contexts/AuthContext';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const noAuthRequired = ['/login', '/signup'];
  const router = useRouter();

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          {noAuthRequired.includes(router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <Protectedroute>
              <Component {...pageProps} />
            </Protectedroute>
          )}
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
