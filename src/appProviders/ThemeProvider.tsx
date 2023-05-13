import { createTheme, ThemeOptions, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';

interface IThemeContext {
  colorMode: { toggleColorMode: () => void };
}

const ThemeModeContext = createContext<IThemeContext>({
  colorMode: {
    toggleColorMode() {
      console.log('error');
    },
  },
});

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  return {
    typography: {
      fontFamily: 'Rubik',
      button: {
        color: mode === 'light' ? '#000000' : '#ffffff',
      },
      allVariants: {
        color: mode === 'light' ? '#000000' : '#ffffff',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: mode === 'light' ? '#121212' : '#ffffff',
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
              main: '#ffffff',
              dark: '#a2a2a2',
              light: '#e5e5e5',
            },
            secondary: {
              main: '#2297a6',
              light: '#2297a6',
            },
          }
        : {
            primary: {
              main: '#121212',
              dark: '#2a2a2a',
              light: '#726c6c',
            },
            secondary: {
              main: '#046673',
              light: '#a660ef',
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
