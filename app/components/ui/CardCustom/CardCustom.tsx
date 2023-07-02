'use client';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { useRouter } from 'next/navigation';

export interface CardProps {
  id: number;
  title: string;
}

export default function CardCustom({ title }: CardProps) {
  const router = useRouter();

  return (
    <Card
      sx={{
        minWidth: 400,
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CardActions>
        <Button onClick={() => router.push(`/${title}`)}>{title}</Button>
      </CardActions>
    </Card>
  );
}
