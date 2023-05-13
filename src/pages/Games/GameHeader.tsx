import { Typography } from '@mui/material';

interface GameHeaderProps {
  gameTitle: string;
}

const GameHeader = ({ gameTitle }: GameHeaderProps) => {
  return (
    <Typography variant="h1" fontWeight="bold" fontFamily="monospace">
      {gameTitle}
    </Typography>
  );
};

export default GameHeader;
