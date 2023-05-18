import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { colors } from './colors';

export const inter = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 656,
      md: 1023,
      lg: 1440,
      xl: 1920,
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
      fontSize: "56px",
      lineHeight: "64px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "40px",
      lineHeight: "48px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "40px",
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "24px",
      lineHeight: "32px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    }
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
    }
  },
});