import { ToggleButton, ToggleButtonProps, useTheme } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavBarButtonProps extends ToggleButtonProps {
  buttonText: string;
  navigationUrl: string;
  isActive?: boolean;
}

const NavBarButton = ({ buttonText, navigationUrl, ...props }: NavBarButtonProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ToggleButton
      onClick={() => navigate(navigationUrl)}
      sx={{ border: '0', textTransform: 'none', color: theme.palette.primary.contrastText }}
      {...props}
    >
      {buttonText}
    </ToggleButton>
  );
};

export default NavBarButton;
