import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import Home from '../pages/Home';
import GamesLibrary from '../pages/GamesLibrary';
import TicTacToe from '../pages/Games/TicTacToe';
import Hangman from '../pages/Games/Hangman';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/games" element={<GamesLibrary />} />
      <Route path="/games/tictactoe" element={<TicTacToe />} />
      <Route path="/games/hangman" element={<Hangman />} />
    </Routes>
  );
};

export default Routing;
