import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/global';
import getTheme from '@theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyle theme={getTheme()} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
