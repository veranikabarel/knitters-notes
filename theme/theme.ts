'use client';

import { colors, text } from '@/theme/colors';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { typeScale } from './typography';

export const inter = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['Montserrat', 'sans-serif'],
});

export const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: typeScale.header1,
    },
    h2: {
      fontSize: typeScale.header2,
    },
    h3: {
      fontSize: typeScale.header3,
    },
    body1: {
      fontSize: typeScale.paragraph,
    },
    body2: {
      fontSize: typeScale.helperText,
    },
    caption: {
      fontSize: typeScale.copyrightText,
    },
  },
  palette: {
    primary: {
      main: colors.green,
    },
    secondary: {
      main: colors.yellow,
    },
    text: {
      primary: text.primary,
      secondary: text.inverted,
    },
    error: {
      main: colors.red,
    },
  },
});
