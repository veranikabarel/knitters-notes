"use client";
import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom.styled";
import { Grid, Stack } from "@mui/material";
export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1>Welcome to Knitters Notes</h1>
      <Stack direction="row" columnGap={1}>
        <ButtonCustom variant="text">Contained</ButtonCustom>
        <ButtonCustom variant="contained">Contained</ButtonCustom>
        <ButtonCustom variant="outlined">Contained</ButtonCustom>
      </Stack>
    </Grid>
  );
}