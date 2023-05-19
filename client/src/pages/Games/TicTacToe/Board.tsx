import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Square from './Square';
import Column from '../../../Layout/Column';
import Row from '../../../Layout/Row';
import { TicTacToePlayer } from './index';
import useToggle from '../../../hooks/useToggle';

interface BoardProps {
  currentPlayer: TicTacToePlayer;
  changePlayer: () => void;
  resetScores: () => void;
  setTie: React.Dispatch<React.SetStateAction<boolean>>;
  addToXScore: () => void;
  addToOScore: () => void;
}

const Board = ({ currentPlayer, changePlayer, resetScores, setTie, addToXScore, addToOScore }: BoardProps) => {
  const [board, setBoard] = useState<TicTacToePlayer[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [hasWinner, setWinner] = useState(false);
  const [resetBoard, toggleResetBoard] = useToggle();

  useEffect(() => {
    if (resetBoard) {
      const newBoard: TicTacToePlayer[][] = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
      setBoard(newBoard);
      setWinner(false);
      toggleResetBoard();
      if (currentPlayer === 'O') {
        changePlayer();
      }
    }
  }, [resetBoard]);

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

  const checkDiagonals = () => {
    return (
      (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
      (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')
    );
  };

  const checkWinner = () => checkRows() || checkColumns() || checkDiagonals();

  useEffect(() => {
    if (checkWinner()) {
      setWinner(true);
      if (currentPlayer === 'O') {
        console.log('x wins');
        addToXScore();
      } else {
        console.log('o wins');
        addToOScore();
      }
    }
    if (board.every((row) => row.every((cell) => cell === 'X' || cell === 'O'))) {
      setTie(true);
    }
  }, [board]);

  return (
    <Column width="100%" height="85%" spacing={2} alignItems="center" justifyContent="center">
      <Column spacing={1}>
        {Array(3)
          .fill(0)
          .map((val1, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Row key={i} spacing={1}>
              {Array(3)
                .fill(0)
                .map((val2, j) => (
                  <Square
                    // eslint-disable-next-line react/no-array-index-key
                    key={i + j}
                    value={board[i][j]}
                    hoverValue={currentPlayer}
                    onClick={() => playTurn(i, j)}
                    disabled={hasWinner}
                  />
                ))}
            </Row>
          ))}
      </Column>

      <Row spacing={1}>
        <Button variant="contained" color="secondary" onClick={resetScores}>
          Reset score
        </Button>
        <Button variant="contained" onClick={toggleResetBoard}>
          Reset game
        </Button>
      </Row>
    </Column>
  );
};

export default Board;
