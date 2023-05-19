import { ButtonCustom } from '@/components/ButtonCustom/ButtonCustom.styled';
import { Card as CardBase, CardProps } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export interface CardPropsCustom extends CardProps {
  img: string;
  alt: string;
  title: string;
  description: string;
  action: string;
}

export const Card: React.FC<CardPropsCustom> = ({
  children,
  img,
  alt,
  title,
  description,
  action,
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
        <ButtonCustom size="small" variant="contained">
          {action}
        </ButtonCustom>
      </CardActions>
    </CardBase>
  );
};
