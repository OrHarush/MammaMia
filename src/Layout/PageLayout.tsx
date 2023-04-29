import { Box, useTheme } from '@mui/material';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: '100%',
        background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
      overflow="auto"
    >
      {children}
    </Box>
  );
};

export default PageLayout;
