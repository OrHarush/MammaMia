import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';

interface IThemeContext {
  colorMode: { toggleColorMode: () => void };
}

const ThemeModeContext = createContext<IThemeContext>({});

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    typography: {
      fontFamily: ['"Helvetica Neue"', 'Arial'].join(','),
      button: {
        color: mode === 'light' ? '#000000' : '#ffffff',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: mode === 'light' ? '#000000' : '#ffffff',
            textDecoration: 'none',
            textTransform: 'none',
          },
        },
      },
    },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#beefff',
            },
            secondary: {
              main: '#2dcafa',
            },
          }
        : {
            primary: {
              main: '#010107',
            },
            secondary: {
              main: '#1f83e5',
            },
          }),
    },
  };
};

const ThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeModeContext.Provider value={{ colorMode }}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProvider;
export const useThemeMode = () => useContext(ThemeModeContext);
