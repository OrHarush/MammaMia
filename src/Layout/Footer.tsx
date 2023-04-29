import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', height: '200px', backgroundColor: theme.palette.secondary.main, overflow: 'hidden' }} />
  );
};

export default Footer;
