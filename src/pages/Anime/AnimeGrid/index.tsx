import { Grid } from '@mui/material';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AnimeCard from './AnimeCard';
import AnimeSummary from '../types/AnimeSummary';
import { AnimeUrl } from '../../../consts/urls';

interface AnimeDisplayProps {
  animes: AnimeSummary[];
}

const AnimeGrid = ({ animes }: AnimeDisplayProps) => {
  const navigate = useNavigate();

  return (
    <Grid container gap={10} justifyContent="center" marginTop="80px" columns={6} flexWrap="wrap">
      {animes.map((anime, index) => (
        <Grid item key={index} alignSelf="end">
          <AnimeCard
            key={index}
            title={anime.title}
            description={anime.description}
            imageUrl={anime.coverImage}
            onClick={() => navigate(`${AnimeUrl}/${animes[index].title}/${animes[index].id}`)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default AnimeGrid;
