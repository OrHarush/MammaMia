import { Box, StackProps, Typography, useTheme } from '@mui/material';
import Row from '../../../Layout/Row';
import Column from '../../../Layout/Column';

interface WordDisplayProps {
  initialWord: string;
  guessedLetters: string[];
}

const WordDisplay = ({ initialWord, guessedLetters }: WordDisplayProps) => {
  const theme = useTheme();
  console.log(guessedLetters);

  return (
    <Row spacing={1}>
      {initialWord
        .toLowerCase()
        .split('')
        .map((letter, index) =>
          guessedLetters.includes(letter.toLowerCase()) ? (
            <Column key={`${letter}+${index}`}>
              <Typography variant="h2" key={`${letter}+${index * 26}`}>
                {letter}
              </Typography>
              <Box
                key={`${letter}+${index}`}
                width="50px"
                height="5px"
                sx={{ backgroundColor: theme.palette.secondary.main }}
              />
            </Column>
          ) : (
            <Box key={letter} width="50px" height="5px" sx={{ backgroundColor: theme.palette.secondary.main }} />
            // <Box key={letter} width="50px" height="5px" sx={{ backgroundColor: 'red' }} />
          ),
        )}
    </Row>
  );
};

export default WordDisplay;
