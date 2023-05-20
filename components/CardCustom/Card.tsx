import { Card as CardBase, CardProps, Link } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';


export interface CardPropsCustom extends CardProps {
  id: string;
  img: string;
  alt: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardPropsCustom> = ({
  children,
  id,
  img,
  alt,
  title,
  description,
  ...props
}) => {
  return (
    <CardBase sx={{ maxWidth: 345 }} {...props}>
      <Image src={img} alt={alt} width={150} height={150} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Link
          underline="hover"
          href={`/project/${id}`}
        >
          Learn more
        </Link>
      </CardActions>
    </CardBase>
  );
};
