import { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { generic } from './theme/';

type themeNames = 'default';

const providers: Record<themeNames, DefaultTheme> = {
  default: generic,
};

const getTheme = (selectedTheme: themeNames = 'default'): DefaultTheme => {
  return providers[selectedTheme];
};

export default getTheme;
