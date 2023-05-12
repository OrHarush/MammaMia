import { Typography, useTheme } from '@mui/material';
import * as React from 'react';
import PageLayout from '../../Layout/PageLayout';

const Anime = () => {
  const theme = useTheme();

  return (
    <PageLayout>
      <Typography>Anime</Typography>
    </PageLayout>
  );
};

export default Anime;
