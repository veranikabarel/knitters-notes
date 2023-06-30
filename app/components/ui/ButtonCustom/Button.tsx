import { Button as ButtonBase, ButtonProps } from '@mui/material';
import React from 'react';

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
};
