'use client';
import CardCustom from '@/app/components/ui/CardCustom/CardCustom';
import { Grid } from '@mui/material';

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
    id: 4,
    title: 'overview',
  },
];

export default function Home() {
  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          flexBasis: '50%',
          justifyContent: 'center',
          gap: '20px',
          // margin: '60px',
        }}
      >
        {cardInfo.map(card => (
          <CardCustom data-testId="card" key={card.id} {...card} />
        ))}
      </Grid>
    </Grid>
  );
}
