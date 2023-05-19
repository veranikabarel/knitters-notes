import { Card, CardPropsCustom } from '@/components/CardCustom/Card';
import { styled } from '@mui/material';

export const CardCustom = styled(Card)<CardPropsCustom>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  text-align: center;
`;
