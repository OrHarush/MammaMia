import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import Board from './Board';
import Column from '../../../Layout/Column';
import PageLayout from '../../../Layout/PageLayout';
import useToggle from '../../../hooks/useToggle';

export type TicTacToePlayer = 'X' | 'O' | '';

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState<TicTacToePlayer>('X');
  const [hasWinner, setWinner] = useState(false);
  const [tie, setTie] = useState(false);
  const [resetBoard, toggleResetBoard] = useToggle();

  // eslint-disable-next-line no-nested-ternary
  const gameMessage = hasWinner
    ? `${currentPlayer === 'O' ? 'X' : 'O'} is the winner!`
    : tie
    ? 'It is a tie!'
    : `Player ${currentPlayer}'s turn`;

  const changePlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <PageLayout>
      <Column alignItems="center" justifyContent="center" padding={1}>
        <Typography variant="h2">{gameMessage}</Typography>
        <Board
          currentPlayer={currentPlayer}
          changePlayer={changePlayer}
          hasWinner={hasWinner}
          setHasWinner={setWinner}
          setTie={setTie}
          reset={resetBoard}
          toggleReset={toggleResetBoard}
        />
        <Button variant="contained" color="primary" onClick={toggleResetBoard}>
          Reset
        </Button>
      </Column>
    </PageLayout>
  );
};

export default TicTacToe;
