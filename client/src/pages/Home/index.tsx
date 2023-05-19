import { Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Column from '../../Layout/Column';
import PageLayout from '../../Layout/PageLayout';
import HomeMediaCard from './HomeMediaCard';
import Row from '../../Layout/Row';
import { AnimeUrl, GameLibraryUrl } from '../../consts/urls';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Column width="100%" spacing={5} justifyContent="center" alignItems="center">
        <Typography variant="h1">Mamma Mia</Typography>
        <Row gap={4} flexWrap="wrap" justifyContent="center">
          <HomeMediaCard
            title="Game Library"
            imageUrl="assets/blackops3Wallpaper.jpg"
            gifUrl="assets/blackops3.gif"
            onClick={() => navigate(GameLibraryUrl)}
          />
          <HomeMediaCard
            title="Anime"
            imageUrl="assets/zenitsuWallpaper.jpg"
            gifUrl="assets/zenitsuGif.gif"
            onClick={() => navigate(AnimeUrl)}
          />
        </Row>
      </Column>
    </PageLayout>
  );
};

export default Home;
