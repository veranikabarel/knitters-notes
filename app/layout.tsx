'use client';
import Navbar from '@/app/components/modules/Navbar/Navbar';
import Head from '@/app/head';
import { theme } from '@/theme/theme';
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AppProps } from 'next/app';

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

export interface MyAppProps extends AppProps {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
}

export default function RootLayout(props: MyAppProps) {
  const { children, emotionCache = clientSideEmotionCache } = props;
  return (
    <html lang="en">
      <Head />
      <QueryClientProvider client={queryClient}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <body suppressHydrationWarning={true}>
              <Navbar data-testId="navbar" />
              {children}
              <ReactQueryDevtools />
            </body>
          </ThemeProvider>
        </CacheProvider>
      </QueryClientProvider>
    </html>
  );
}
