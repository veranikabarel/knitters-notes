'use client';
import { CardCustom } from '@/components/CardCustom/CardCustom.styled';
import { Grid, Stack } from '@mui/material';

const projects = [
  {
    img: '/images/wool.png',
    alt: 'alt1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    action: 'Learn more',
  },
  {
    img: '/images/wool.png',
    alt: 'alt2',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    action: 'Learn more',
  },
  {
    img: '/images/wool.png',
    alt: 'alt3',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    action: 'Learn more',
  },
];

export default function Home() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <h1>Dashboard</h1>
      <Stack direction="row" columnGap={1}>
        {projects.map((project) => (
          <CardCustom key={project.title} img={project.img} alt={project.alt} title={project.title} description={project.description} action={project.action} />
        ))}
      </Stack>
    </Grid>
  );
}