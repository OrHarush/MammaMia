import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, IconButton, useTheme } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../appProviders/ThemeProvider';

const NavBar = () => {
  const theme = useTheme();
  const { colorMode } = useThemeMode();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ height: '60px', display: 'block', backgroundColor: theme.palette.secondary.main }}>
      <Toolbar>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Button onClick={() => navigate('/home')}>Home</Button>
        <Button onClick={() => navigate('/games')}>Games Library</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
