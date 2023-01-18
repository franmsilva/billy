import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';

import ProtectedRoute from '@components/atoms/ProtectedRoute';
import { NO_AUTH_REQUIRED_ROUTES } from '@constants/app';
import { GlobalStyles } from '@styles/globals';
import { Theme } from '@styles/theme';

import { AuthContextProvider } from '../contexts/AuthContext';

import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {NO_AUTH_REQUIRED_ROUTES.includes(router.pathname) ? (
              <Component {...pageProps} />
            ) : (
              <ProtectedRoute>
                <Component {...pageProps} />
              </ProtectedRoute>
            )}
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}
