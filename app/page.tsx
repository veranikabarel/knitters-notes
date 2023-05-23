'use client';
import {
  ButtonCustomPrimary,
  ButtonCustomSecondary,
  ButtonCustomText,
} from '@/components/ButtonCustom/ButtonCustom.styled';
import { Grid, Stack } from '@mui/material';
import Link from 'next/link';
export default function Home() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <h1>Welcome to Knitters Notes</h1>
      <Stack direction="row" columnGap={1} mb={2}>
        <ButtonCustomPrimary>Primary</ButtonCustomPrimary>
        <ButtonCustomSecondary>Secondary</ButtonCustomSecondary>
        <ButtonCustomText>Text</ButtonCustomText>
        <Link href="/dashboard">Go to dashboard</Link>
      </Stack>
    </Grid>
  );
}
