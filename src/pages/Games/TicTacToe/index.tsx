import { useState } from 'react';
import Board from './Board';
import Column from '../../../Layout/Column';
import PageLayout from '../../../Layout/PageLayout';
import ScoreBoard from './ScoreBoard';
import GameHeader from '../../components/GameHeader';

export type TicTacToePlayer = 'X' | 'O' | '';

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState<TicTacToePlayer>('X');
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [resetScores, setResetScores] = useState(false);
  const [tie, setTie] = useState(false);

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const resetPlayersScores = () => {
    setXScore(0);
    setOScore(0);
  };

  return (
    <PageLayout>
      <Column alignItems="center" justifyContent="center" padding={1} spacing={3} marginTop="10px">
        <GameHeader gameTitle="Tic-Tac-Toe" />
        <ScoreBoard currentPlayer={currentPlayer} xScore={xScore} oScore={oScore} />
        <Board
          currentPlayer={currentPlayer}
          changePlayer={changePlayer}
          resetScores={resetPlayersScores}
          setTie={setTie}
          addToXScore={() => setXScore((prevScore) => prevScore + 1)}
          addToOScore={() => setOScore((prevScore) => prevScore + 1)}
        />
      </Column>
    </PageLayout>
  );
};

export default TicTacToe;
