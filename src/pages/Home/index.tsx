import { Typography } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Column from '../../Layout/Column';
import PageLayout from '../../Layout/PageLayout';

const Home = () => {
  return (
    <PageLayout>
      <Column width="100%" justifyContent="center" alignContent="center" alignItems="center">
        <Typography variant="h1">Mamma Mia</Typography>
        <Card sx={{ width: '80%', minWidth: '500px' }}>
          <CardMedia component="img" image="../../../assets/marioWallpaper.jpg" sx={{ objectFit: 'contain' }} />
        </Card>
      </Column>
    </PageLayout>
  );
};

export default Home;
