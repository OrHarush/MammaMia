import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GameCard from './GameCard';
import { Game } from '../../types/Game';
import PageLayout from '../../Layout/PageLayout';

const games: Game[] = [
  {
    name: 'Tic Tac Toe',
    description: 'First game added to the library',
    imageUrl: '../../../assets/tictactoeGameCover.jpg',
    navigationUrl: 'tictactoe',
  },
  {
    name: 'Hangman',
    description: '2nd game I make',
    imageUrl: '../../../assets/hangmanGameCover.jpg',
    navigationUrl: 'hangman',
  },
  {
    name: 'Mario Kart 64',
    description: 'Lisa favorite game',
    imageUrl: '../../../assets/marioKartGameCover.jpg',
  },
  {
    name: 'Mortal Kombat',
    description: 'Brutal game',
    imageUrl: '../../../assets/MortalKombatGameCover.jpg',
  },
  {
    name: 'genshin impact',
    description: 'fifth game',
    imageUrl: '../../../assets/genshinImpactGameCover.jpg',
  },
];

const GamesLibrary = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Grid container padding={3} spacing={3} justifyContent="center">
        {games.map((game) => (
          <Grid key={game.name} item>
            <GameCard game={game} onClick={() => navigate(game.navigationUrl)} />
          </Grid>
        ))}
      </Grid>
    </PageLayout>
  );
};

export default GamesLibrary;
