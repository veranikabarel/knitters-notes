"use client";
import Head from "@/app/head";
import { theme } from "@/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}