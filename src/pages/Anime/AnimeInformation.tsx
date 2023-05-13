import { Skeleton, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAnime } from './fetchAnime';
import PageLayout from '../../Layout/PageLayout';
import Row from '../../Layout/Row';
import AnimeSummary from './types/AnimeSummary';
import Column from '../../Layout/Column';
import AnimeDetails from './types/AnimeDetails';

const AnimeInformation = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState<AnimeDetails>(null);

  const handleData = (data) => {
    const animeInfo = data.data.Media;
    console.log(animeInfo);
    setAnime({
      id: animeInfo.id,
      title: animeInfo.title.english ? animeInfo.title.english : animeInfo.title.romaji,
      description: animeInfo.description,
      coverImage: animeInfo.coverImage.large,
      bannerImage: animeInfo.bannerImage,
      status: animeInfo.status,
      genres: animeInfo.genres.join(', '),
    });
  };

  useEffect(() => {
    getAnime(id, handleData);
  }, []);

  return (
    <PageLayout>
      {!anime ? (
        <Skeleton variant="rectangular" height={200} width={400} />
      ) : (
        <Column padding={5} spacing={2}>
          <Row spacing={2}>
            <img src={anime.coverImage} height={500} alt="Anime Cover" />
            <Column textAlign="left" justifyContent="space-between">
              <Column>
                <Row alignItems="end" spacing={1}>
                  <Typography variant="h3" fontWeight="bold">
                    {anime.title}
                  </Typography>
                  <Typography variant="body2">({anime.status})</Typography>
                </Row>
                <Typography variant="body1">{anime.description}</Typography>
              </Column>

              <Typography variant="body1">{anime.genres}</Typography>
            </Column>
          </Row>
          <img src={anime.bannerImage} height={500} width="100%" alt="Anime Cover" />
        </Column>
      )}
    </PageLayout>
  );
};

export default AnimeInformation;
