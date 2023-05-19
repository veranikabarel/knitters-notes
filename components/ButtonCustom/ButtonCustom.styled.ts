import {ButtonProps, styled} from '@mui/material';
import {Button} from './Button';

export const ButtonCustom = styled(Button)<ButtonProps>`
  height: 30px;
  max-width: 160px;
  border-radius: 50px;
  size: ${({theme}) => theme.typography.body1};
  text-transform: capitalize;

  &.MuiButton-text {
    color: ${({theme}) => theme.palette.text.primary};
  }

  &.MuiButton-contained {
    color: ${({theme}) => theme.palette.text.secondary};
    background-color: ${({theme}) => theme.palette.secondary.main};
  }

  &.MuiButton-outlined {
    border: ${({theme}) => `1px solid ${theme.palette.secondary.main}`};
    color: ${({theme}) => theme.palette.secondary.main};
  }
`;
