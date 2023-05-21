'use client';
import { CardCustom } from '@/components/CardCustom/CardCustom.styled';
import projects from '@/mock/projects.json';
import { Grid, Stack } from '@mui/material';

export default function Dashboard() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <h1>Dashboard</h1>
      <Stack
        direction="row"
        columnGap={3}
        bgcolor={'secondary.main'}
        p={2}
        borderRadius={1}
      >
        {projects.projects.map(project => (
          <CardCustom key={project.title} {...project}></CardCustom>
        ))}
      </Stack>
    </Grid>
  );
}
