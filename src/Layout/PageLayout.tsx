import { Box, useTheme } from '@mui/material';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useTheme();

  return (
    <Box
      textAlign="center"
      sx={{
        height: '100%',
        background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light} 50%)`,
        // background: `linear-gradient(to right bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
      }}
      overflow="auto"
    >
      {children}
    </Box>
  );
};

export default PageLayout;
