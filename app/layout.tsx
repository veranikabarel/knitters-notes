'use client';
import Head from '@/app/head';
import Navbar from '@/components/modules/Navbar/Navbar';
import { theme } from '@/theme/theme';
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

export default function RootLayout(props: MyAppProps) {
  const { children, emotionCache = clientSideEmotionCache } = props;
  return (
    <html lang="en">
      <CacheProvider value={emotionCache}>
        <Head />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            <Navbar />
            {children}
          </body>
        </ThemeProvider>
      </CacheProvider>
    </html>
  );
}
