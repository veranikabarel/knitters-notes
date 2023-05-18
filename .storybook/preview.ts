import {CssBaseline, ThemeProvider} from '@mui/material';
import {withThemeFromJSXProvider} from '@storybook/addon-styling';
import type {Preview} from '@storybook/react';
import {theme} from '../theme/theme';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      theme,
    },
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export default preview;
