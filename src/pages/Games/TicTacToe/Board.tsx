import { useEffect, useState } from 'react';
import Square from './Square';
import Column from '../../../Layout/Column';
import Row from '../../../Layout/Row';
import { TicTacToePlayer } from './index';

interface BoardProps {
  currentPlayer: TicTacToePlayer;
  changePlayer: () => void;
  hasWinner: boolean;
  setHasWinner: React.Dispatch<React.SetStateAction<boolean>>;
  setTie: React.Dispatch<React.SetStateAction<boolean>>;
  reset: boolean;
  toggleReset: () => void;
}

const Board = ({ currentPlayer, changePlayer, hasWinner, setHasWinner, setTie, reset, toggleReset }: BoardProps) => {
  const [board, setBoard] = useState<TicTacToePlayer[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  useEffect(() => {
    if (reset) {
      const resetBoard: TicTacToePlayer[][] = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      setBoard(resetBoard);
      setHasWinner(false);
      toggleReset();
    }
  }, [reset]);

  const playTurn = (row: number, column: number) => {
    if (board[row][column]) {
      console.log('already has value');
    } else {
      const updatedBoard = [...board];
      updatedBoard[row][column] = currentPlayer;
      setBoard(updatedBoard);
      changePlayer();
    }
  };

  const checkRows = () => {
    let gotWinner = false;
    for (let i = 0; i < 3; i += 1) {
      if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
        gotWinner = true;
      }
    }
    return gotWinner;
  };

  const checkColumns = () => {
    let gotWinner = false;
    for (let i = 0; i < 3; i += 1) {
      if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
        gotWinner = true;
      }
    }
    return gotWinner;
  };

  // Checks for the win condition in diagonals
  const checkDiagonals = () => {
    return (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')
    );
  };

  const checkWinner = () => checkRows() || checkColumns() || checkDiagonals();

  useEffect(() => {
    if (checkWinner()) {
      console.log('has winner');
      setHasWinner(true);
    }
    if (board.every((row) => row.every((cell) => cell === 'X' || cell === 'O'))) {
      setTie(true);
    }
  }, [board]);

  return (
    <Column width="100%" height="85vh" spacing={2} alignItems="center" justifyContent="center">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Row key={i} spacing={2}>
            {Array(3)
              .fill(0)
              // eslint-disable-next-line no-shadow
              .map((_, j) => (
                <Square
                  // eslint-disable-next-line react/no-array-index-key
                  key={i + j}
                  value={board[i][j]}
                  onClick={() => playTurn(i, j)}
                  disabled={hasWinner}
                />
              ))}
          </Row>
        ))}
    </Column>
  );
};

export default Board;
