import { Button, ButtonProps, Typography } from '@mui/material';
import { useState } from 'react';
import { TicTacToePlayer } from './index';

interface SquareProps extends ButtonProps {
  value: TicTacToePlayer;
}

const Square = ({ value, ...props }: SquareProps) => {
  return (
    <Button variant="contained" color="secondary" sx={{ width: '200px', height: '200px' }} {...props}>
      <Typography variant="h1">{value}</Typography>
    </Button>
  );
};

export default Square;
