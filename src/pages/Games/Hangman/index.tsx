import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import PageLayout from '../../../Layout/PageLayout';
import LetterButton from './LetterButton';
import Column from '../../../Layout/Column';
import { gameWords, letters } from './gameConsts';
import Row from '../../../Layout/Row';
import Letters from './Letters';
import GameHeader from '../GameHeader';
import WordDisplay from './WordDisplay';

const Hangman = () => {
  const theme = useTheme();
  const [initialWord, setInitialWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [numberOfGuesses, setNumberOfGueeses] = useState(7);

  const randomizeWord = () => {
    let randomWordIndex = Math.random() * gameWords.length;
    randomWordIndex = Math.floor(randomWordIndex);

    return gameWords[randomWordIndex];
  };

  useEffect(() => {
    setInitialWord(randomizeWord());
  }, []);

  useEffect(() => {
    console.log('guessed letter');
    console.log(guessedLetters);
  }, [guessedLetters]);

  const checkIsLetterInWord = (letterIndex: number) => {
    console.log('-----');
    console.log(initialWord);
    console.log(letters[letterIndex]);
    console.log(initialWord.includes(letters[letterIndex]));
    console.log(initialWord.includes(letters[letterIndex].toLowerCase()));

    if (initialWord.toLowerCase().includes(letters[letterIndex].toLowerCase())) {
      const newGuessedLetters = [...guessedLetters];
      newGuessedLetters.push(letters[letterIndex].toLowerCase());
      setGuessedLetters(newGuessedLetters);
      console.log('yes');
    } else {
      setNumberOfGueeses((prevNumber) => prevNumber - 1);
    }
    console.log(letters[letterIndex]);
  };

  const resetGame = () => {
    setNumberOfGueeses(7);
    setInitialWord(randomizeWord());
    setGuessedLetters([]);
  };

  return (
    <PageLayout>
      <Column alignItems="center">
        <GameHeader gameTitle="Hangman" />
        <Column alignItems="center" marginTop="200px" spacing={2}>
          <WordDisplay initialWord={initialWord} guessedLetters={guessedLetters} />
          <Typography>You have {numberOfGuesses} guesses left!</Typography>
          <Letters guessedLetters={guessedLetters} onLetterClick={checkIsLetterInWord} />
        </Column>
        <Row>
          <Button variant="contained" color="secondary" onClick={resetGame}>
            New Game
          </Button>
        </Row>
      </Column>
    </PageLayout>
  );
};

export default Hangman;
