import { Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { json, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Column from '../../Layout/Column';
import PageLayout from '../../Layout/PageLayout';
import HomeMediaCard from './HomeMediaCard';
import Row from '../../Layout/Row';
import { AnimeUrl, GameLibraryUrl, MarioUrl } from '../../consts/urls';

const Home = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch('http://localhost:5000/api')
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <PageLayout>
      <Column width="100%" spacing={5} justifyContent="center" alignItems="center">
        <Typography variant="h1">Mamma Mia</Typography>
        <Row gap={4} flexWrap="wrap" justifyContent="center">
          <HomeMediaCard
            title="Game Library"
            description={
              ' Explore a world of free games in our Game Library. ' +
              'From thrilling action to mind-bending puzzles, our curated collection offers endless gaming adventures without spending a dime.'
            }
            imageUrl="assets/homePage/blackops3Wallpaper.jpg"
            gifUrl="assets/homePage/blackops3.gif"
            onClick={() => navigate(GameLibraryUrl)}
          />
          <HomeMediaCard
            title="Anime"
            description={
              'Dive into captivating anime series and movies. ' +
              'Experience vibrant characters, mesmerizing animation, and unforgettable storytelling in a realm where imagination knows no bounds.'
            }
            imageUrl="assets/homePage/zenitsuWallpaper.jpg"
            gifUrl="assets/homePage/zenitsuGif.gif"
            onClick={() => navigate(AnimeUrl)}
          />
          <HomeMediaCard
            title="Mario"
            description="My poor attempt to create Mario game"
            imageUrl="assets/homePage/marioWallpaper.jpg"
            gifUrl="assets/homePage/marioGif.gif"
            onClick={() => navigate(MarioUrl)}
          />
        </Row>
      </Column>
    </PageLayout>
  );
};

export default Home;
