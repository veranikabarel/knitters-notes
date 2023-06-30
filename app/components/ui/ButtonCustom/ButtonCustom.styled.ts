import { theme } from '@/theme/theme';
import styled from '@emotion/styled';
import { ButtonProps } from '@mui/material';
import { Button } from './Button';

export const ButtonCustom = styled(Button)<ButtonProps>`
  padding: 12px 16px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  border-radius: 50px;
`;

export const ButtonCustomPrimary = styled(ButtonCustom)<ButtonProps>`
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.text.secondary};
  border: none;
  &:hover {
    background-color: ${theme.palette.secondary.main};
  }
`;

export const ButtonCustomSecondary = styled(ButtonCustom)<ButtonProps>`
  background: none;
  border: 2px solid ${theme.palette.primary.main};
  color: ${theme.palette.primary.main};
  &:hover {
    border: 2px solid ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.main};
  }
`;

export const ButtonCustomText = styled(Button)<ButtonProps>`
  background: none;
  border: none;
  color: ${theme.palette.primary.main};
  &:hover {
    color: ${theme.palette.secondary.main};
  }
`;
