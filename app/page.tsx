'use client';
import CardCustom from '@/components/CardCustom/CardCustom';
import { Box, Grid } from '@mui/material';

const cardInfo = [
  {
    id: 1,
    title: 'projects',
  },
  {
    id: 2,
    title: 'notes',
  },
  {
    id: 3,
    title: 'patterns',
  },
  {
    id: 3,
    title: 'overview',
  }
]

export default function Home() {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box sx={{ maxWidth: '850px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
        {cardInfo.map((card) => (
          <CardCustom key={card.id} {...card} />
        ))}
      </Box>
    </Grid>
  );
}
