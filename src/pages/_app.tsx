import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

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
          <Head>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=UA-54516992-1`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-54516992-1');
                `,
              }}
            />
          </Head>
          <Component {...pageProps} />
        </BreadCrumbProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
