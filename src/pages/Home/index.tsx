import { Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
