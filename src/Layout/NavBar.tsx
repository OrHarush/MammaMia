import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Button, IconButton, Switch, useTheme } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useNavigate } from 'react-router-dom';
import { useThemeMode } from '../appProviders/ThemeProvider';
import Row from './Row';

const NavBar = () => {
  const theme = useTheme();
  const { colorMode } = useThemeMode();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={{ height: '60px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Row>
          <Button disableRipple>
            <img src="../../../assets/marioIcon.png" alt="home icon" width="45px" />
          </Button>
          <Button onClick={() => navigate('/home')}>Home</Button>
          <Button onClick={() => navigate('/games')}>Games Library</Button>
          <Button onClick={() => navigate('/anime')}>Anime</Button>
        </Row>
        <Switch
          onChange={colorMode.toggleColorMode}
          style={{ color: theme.palette.primary.contrastText, top: '-5%' }}
          // sx={{ backgroundColor: 'green' }}
          icon={<Brightness7Icon />}
          checkedIcon={<Brightness4Icon />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
