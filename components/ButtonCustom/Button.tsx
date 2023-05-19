import { Button as ButtonBase, ButtonProps } from "@mui/material";

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
}