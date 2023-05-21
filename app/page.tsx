'use client';
import { ButtonCustom } from '@/components/ButtonCustom/ButtonCustom.styled';
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
        <ButtonCustom variant="text">Text</ButtonCustom>
        <ButtonCustom variant="contained">Contained</ButtonCustom>
        <ButtonCustom variant="outlined">Outlined</ButtonCustom>
        <Link href="/dashboard">Go to dashboard</Link>
      </Stack>
    </Grid>
  );
}
