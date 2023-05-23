'use client';

import { colors, neutral } from '@/theme/colors';
import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';
import { typeScale } from './typography';

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
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
    h4: {
      fontSize: typeScale.header4,
    },
    h5: {
      fontSize: typeScale.header5,
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
      main: colors['400'],
    },
    secondary: {
      main: colors['200'],
    },
    text: {
      primary: neutral['100'],
      secondary: neutral['600'],
    },
  },
});
