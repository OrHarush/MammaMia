import { Box, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { TicTacToePlayer } from './index';
import Row from '../../../Layout/Row';

interface ScoreBoardProps {
  currentPlayer: TicTacToePlayer;
  xScore: number;
  oScore: number;
}

const ScoreBoard = ({ currentPlayer, xScore, oScore }: ScoreBoardProps) => {
  const theme = useTheme();

  return (
    <Row
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: '0.5rem',
        boxShadow: '0px 0px 8px #888',
        fontSize: '30px',
      }}
    >
      <Stack
        width="100px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        sx={{
          color: '#ff4625',
          borderBottom: currentPlayer === 'X' ? '2px solid #ff4625' : 0,
          borderBottomRightRadius: '0',
          borderBottomLeftRadius: '0.5rem',
        }}
      >
        <Typography color="#ff4625">{`X - ${xScore}`}</Typography>
      </Stack>
      <Stack
        width="100px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        sx={{
          borderBottom: currentPlayer === 'O' ? '2px solid #2c87ff' : 0,
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0.5rem',
        }}
      >
        <Typography color="#2c87ff"> {`O - ${oScore}`}</Typography>
      </Stack>
    </Row>
  );
};

export default ScoreBoard;
