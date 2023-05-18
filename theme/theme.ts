'use client';

import {typography} from '@/theme/typography';
import {createTheme} from '@mui/material/styles';
import {Roboto} from 'next/font/google';
import {colors} from './colors';

export const inter = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const theme = createTheme({
  typography: {
    h1: typography.h1,
    h2: typography.h2,
    h3: typography.h3,
    subtitle1: typography.subtitle1,
    body1: typography.body1,
  },
  palette: {
    primary: {
      main: colors.violet,
    },
    secondary: {
      main: colors.yellow,
    },
    error: {
      main: colors.red,
    },
    text: {
      primary: colors.black,
      secondary: colors.white,
    },
  },
});
