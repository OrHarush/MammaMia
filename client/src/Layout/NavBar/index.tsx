import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button, styled, Switch, useTheme } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useThemeMode } from '../../appProviders/ThemeProvider';
import Row from '../Row';
import NavBarButton from './NavBarButton';
import { AnimeUrl, ExperimentsUIUrl, GameLibraryUrl, HomeUrl, MyGamesUrl } from '../../consts/urls';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: 5,
    },
    '&:first-of-type': {
      borderRadius: 5,
    },
  },
}));

const NavBar = () => {
  const theme = useTheme();
  const { colorMode } = useThemeMode();
  const [alignment, setAlignment] = useState<string | null>('home');

  const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    setAlignment(newAlignment);
  };

  return (
    <AppBar position="sticky" sx={{ height: '60px' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Row>
          <Button
            disableRipple
            sx={{
              cursor: 'auto',
              transition: '1s',
              '&:hover': { transform: 'scale(1.1,1.1)' },
            }}
          >
            <img src="../../../assets/marioIcon.png" alt="home icon" width="45px" />
          </Button>
          <StyledToggleButtonGroup exclusive onChange={handleAlignment} value={alignment}>
            <NavBarButton value="home" buttonText="Home" navigationUrl={HomeUrl} />
            <NavBarButton value="library" buttonText="Games Library" navigationUrl={GameLibraryUrl} />
            <NavBarButton value="myGames" buttonText="My Games" navigationUrl={MyGamesUrl} />
            <NavBarButton value="anime" buttonText="Anime" navigationUrl={AnimeUrl} />
            <NavBarButton value="experimentUi" buttonText="Experiment UI" navigationUrl={ExperimentsUIUrl} />
          </StyledToggleButtonGroup>
        </Row>
        <Switch
          onChange={colorMode.toggleColorMode}
          style={{ color: theme.palette.primary.contrastText, top: '-5%' }}
          icon={<Brightness7Icon />}
          checkedIcon={<Brightness4Icon />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
