import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import GlobalStyle from '@theme/global';
import getTheme from '@theme/theme';
import { store } from '@store/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={getTheme()}>
      <GlobalStyle theme={getTheme()} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
export default MyApp;
