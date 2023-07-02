'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export interface ImgCardProps {
  id?: number;
  src: string;
  title?: string;
  alt: string;
}

export default function ImgCardCustom({ title, src, alt }: ImgCardProps) {
  const router = useRouter();

  return (
    <Card
      sx={{
        width: 80,
        height: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box>
        <Image src={src} alt={alt} />
      </Box>
      <CardActions>
        <Button onClick={() => router.push(`/${title}`)}>{title}</Button>
      </CardActions>
    </Card>
  );
}
