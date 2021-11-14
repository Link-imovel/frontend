import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@theme/global';
import getTheme from '@theme/theme';

import { store } from '@store/index';
import { Provider } from 'react-redux';

import { BreadCrumbProvider } from '@hooks/breadcrumb';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme()}>
        <GlobalStyle theme={getTheme()} />
        <BreadCrumbProvider>
          <Component {...pageProps} />
        </BreadCrumbProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
