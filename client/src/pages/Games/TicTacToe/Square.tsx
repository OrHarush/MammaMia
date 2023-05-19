import { Box, Button, ButtonProps, Icon, Typography } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { useEffect } from 'react';
import { TicTacToePlayer } from './index';
import useToggle from '../../../hooks/useToggle';

interface SquareProps extends ButtonProps {
  value: TicTacToePlayer;
  hoverValue: TicTacToePlayer;
}

const Square = ({ value, hoverValue, ...props }: SquareProps) => {
  const [isHoveringSquare, toggleIsHoveringSquare] = useToggle();

  return isHoveringSquare && !value ? (
    <Button
      variant="contained"
      color="secondary"
      sx={{ width: '150px', height: '150px' }}
      {...props}
      onMouseLeave={toggleIsHoveringSquare}
    >
      <Typography variant="h1" fontWeight="bold" fontSize="10em">
        {hoverValue}
      </Typography>
    </Button>
  ) : (
    <Button
      variant="contained"
      color="secondary"
      sx={{ width: '150px', height: '150px' }}
      {...props}
      onMouseEnter={toggleIsHoveringSquare}
      onMouseLeave={toggleIsHoveringSquare}
    >
      <Typography variant="h1" fontWeight="bold" fontSize="10em" color={value === 'X' ? '#ff4625' : '#2c87ff'}>
        {value}
      </Typography>
    </Button>
  );
};

export default Square;
