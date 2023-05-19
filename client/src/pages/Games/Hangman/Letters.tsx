import { Grid } from '@mui/material';
import { letters } from './gameConsts';
import LetterButton from './LetterButton';

interface LettersProps {
  guessedLetters: string[];
  onLetterClick: (index: number) => void;
}

const Letters = ({ guessedLetters, onLetterClick }: LettersProps) => {
  return (
    <Grid container spacing={1} width="900px">
      {letters.map((letter, index) => (
        <Grid key={letter} item xs={1}>
          <LetterButton
            key={letter}
            letter={letter}
            onClick={() => onLetterClick(index)}
            disabled={guessedLetters.includes(letter)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Letters;
