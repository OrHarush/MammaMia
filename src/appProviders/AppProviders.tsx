import * as React from 'react';
import { ThemeProvider as MuiThemeProvider , createTheme } from '@mui/material/styles';

// Define your custom theme here
const theme = createTheme({
  palette: {
    primary: {
      main: '#37417b',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

type AppProvidersProps = {
  children: React.ReactNode;
};

// Wrap your app in this provider to provide the theme
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  );
};

export default AppProviders;