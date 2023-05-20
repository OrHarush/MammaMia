import GameCard from '../GamesLibrary/GamesGrid/GameCard';
import PageLayout from '../../Layout/PageLayout';
import Row from '../../Layout/Row';
import { HangmanUrl, TicTacToeUrl } from '../../consts/urls';

const myGames = [
  {
    id: '',
    title: 'Hangman',
    short_description: 'Not completed',
    genre: '',
    thumbnail: '../../assets/hangmanGameCover.jpg',
    game_url: HangmanUrl,
  },
  {
    id: '',
    title: 'Tic Tac Toe',
    short_description: 'First game Ive made here',
    genre: '',
    thumbnail: '../../assets/tictactoeGameCover.jpg',
    game_url: TicTacToeUrl,
  },
];

const MyGames = () => {
  return (
    <PageLayout>
      <Row spacing={2} marginTop="30px" justifyContent="center">
        <GameCard game={myGames[0]} zoomDelay={0.2} />
        <GameCard game={myGames[1]} zoomDelay={0.2} />
      </Row>
    </PageLayout>
  );
};

export default MyGames;
