import * as React from 'react';
import { useEffect, useState } from 'react';
import PageLayout from '../../Layout/PageLayout';
import { getAllAnime } from './fetchAnime';
import AnimeSummary from './types/AnimeSummary';
import AnimeLoadingSkeleton from './AnimeLoadingSkeleton';
import AnimeGrid from './AnimeGrid';
import GridPreview from '../components/GridPreview';

const Anime = () => {
  const [animes, setAnimes] = useState<AnimeSummary[]>([]);

  const handleResponse = (response) => {
    return response.json().then((json) => {
      return response.ok ? json : Promise.reject(json);
    });
  };

  const handleData = (data) => {
    setAnimes(
      data.data.Page.media.map((res) => ({
        id: res.id,
        title: res.title.english ? res.title.english : res.title.romaji,
        description: res.description,
        coverImage: res.coverImage.large,
      })),
    );
  };

  useEffect(() => {
    getAllAnime(handleData);
  }, []);

  return (
    <PageLayout>
      <GridPreview
        isLoading={animes.length === 0}
        loadingSkeleton={<AnimeLoadingSkeleton />}
        content={<AnimeGrid animes={animes} />}
      />
    </PageLayout>
  );
};

export default Anime;
