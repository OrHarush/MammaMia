import { Grid } from '@mui/material';
import { useNavigate, redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GameCard from './GamesGrid/GameCard';
import { Game } from './Game';
import PageLayout from '../../Layout/PageLayout';
import { getGames } from './fetchGames';
import GridPreview from '../components/GridPreview';
import GamesGrid from './GamesGrid';
import GamesGridSkeleton from './GamesGrid/GamesGridSkeleton';

// const games: Game[] = [
//   {
//     name: 'Tic Tac Toe',
//     description: 'First game added to the library',
//     imageUrl: '../../../assets/tictactoeGameCover.jpg',
//     navigationUrl: 'tictactoe',
//   },
//   {
//     name: 'Hangman',
//     description: '2nd game I make',
//     imageUrl: '../../../assets/hangmanGameCover.jpg',
//     navigationUrl: 'hangman',
//   },
// ];

const GamesLibrary = () => {
  const [games, setGames] = useState<Game[]>([]);
  const navigate = useNavigate();

  const handleData = (data) => {
    setGames(
      data.map((game) => ({
        id: game.id,
        title: game.title,
        short_description: game.short_description,
        genre: game.genre,
        thumbnail: game.thumbnail,
        game_url: game.game_url,
        release_date: game.release_date,
        developer: game.developer,
        publisher: game.publisher,
        freetogame_profile_url: game.freetogame_profile_url,
        platform: game.platform,
      })),
    );
  };

  useEffect(() => {
    getGames(handleData);
  }, []);

  return (
    <PageLayout>
      <GridPreview
        isLoading={games.length === 0}
        loadingSkeleton={<GamesGridSkeleton />}
        content={<GamesGrid games={games} />}
      />
    </PageLayout>
  );
};

export default GamesLibrary;
