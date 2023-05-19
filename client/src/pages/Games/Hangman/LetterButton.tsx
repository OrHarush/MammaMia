import * as React from 'react';
import { CardProps } from '@mui/material/Card';
import { Button, ButtonProps, Typography, useTheme } from '@mui/material';

interface LetterCardProps extends ButtonProps {
  letter: string;
}

const LetterButton = ({ letter, ...props }: LetterCardProps) => {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      sx={{
        height: '60px',
        width: '60px',
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0px 0px 8px #888',
        borderRadius: '0.5rem',
        '&:hover': {
          transform: 'scale3d(1.05, 1.05, 122)',
          cursor: 'pointer',
        },
        transition: '"transform 0.15s ease-in-out"',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...props}
    >
      <Typography variant="h2" fontWeight="bold">
        {letter}
      </Typography>
    </Button>
  );
};

export default LetterButton;
