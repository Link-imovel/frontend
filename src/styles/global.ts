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
    font-family: var(--font-family);
  }
`;
