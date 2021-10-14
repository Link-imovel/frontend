import 'styled-components';

import { generic } from './theme/';

export type Theme = typeof generic;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
