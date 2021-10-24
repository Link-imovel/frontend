import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('fonts/Roboto/Roboto-Regular.ttf') format('ttf');
    src: url('fonts/Roboto/Roboto-Medium.ttf') format('ttf');
  }

  :root {
    --font-family: 'Roboto', sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    direction: ltr;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family);
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::after,
    ::before {
      box-sizing: border-box;
    }
  }
`;
