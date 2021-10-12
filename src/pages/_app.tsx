import type { AppProps } from 'next/app';

import '@theme/font.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
