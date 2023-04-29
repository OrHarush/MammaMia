import { Box, useTheme } from '@mui/material';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ height: '100%', backgroundColor: theme.palette.primary.main }} overflow="hidden">
      {children}
    </Box>
  );
};

export default PageLayout;
