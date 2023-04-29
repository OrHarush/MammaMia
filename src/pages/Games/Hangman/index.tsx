import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import PageLayout from '../../../Layout/PageLayout';
import LetterCard from './LetterCard';
import Column from '../../../Layout/Column';
import { gameWords, letters } from './gameConsts';
import Row from '../../../Layout/Row';

const Hangman = () => {
  const theme = useTheme();
  const [initialWord, setInitialWord] = useState('');
  const [guessLetters, setGuessedLetters] = useState([]);

  useEffect(() => {
    let randomWordIndex = Math.random() * gameWords.length;
    randomWordIndex = Math.floor(randomWordIndex);

    setInitialWord(gameWords[randomWordIndex]);
  }, []);

  useEffect(() => {
    console.log(guessLetters);
  }, [guessLetters]);

  const checkLetterIsInWord = (letterIndex: number) => {
    console.log(initialWord);
    console.log(letters[letterIndex]);
    console.log(initialWord.includes(letters[letterIndex]));

    if (initialWord.includes(letters[letterIndex].toLowerCase())) {
      const newGuessedLetters = [...guessLetters];
      newGuessedLetters.push(letters[letterIndex]);
      setGuessedLetters(newGuessedLetters);
      console.log('yes');
    }
    console.log(letters[letterIndex]);
  };

  return (
    <PageLayout>
      <Column alignItems="center" spacing={2}>
        <Typography variant="h1">Hangman</Typography>

        <Typography variant="h1">{initialWord}</Typography>
        <Row spacing={1}>
          {initialWord.split('').map((letter, index) =>
            guessLetters.includes(letter) ? (
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
            ),
          )}
        </Row>

        <Grid container spacing={1} width="900px">
          {letters.map((letter, index) => (
            <Grid key={letter} item xs={1}>
              <LetterCard
                key={letter}
                letter={letter}
                onClick={() => checkLetterIsInWord(index)}
                disabled={guessLetters.includes(letter)}
              />
            </Grid>
          ))}
        </Grid>
      </Column>
    </PageLayout>
  );
};

export default Hangman;
