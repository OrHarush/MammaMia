import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import Home from '../pages/Home';
import GamesLibrary from '../pages/GamesLibrary';
import TicTacToe from '../pages/Games/TicTacToe';
import Hangman from '../pages/Games/Hangman';
import Anime from '../pages/Anime';
import { AnimeUrl, GameLibraryUrl, HangmanUrl, HomeUrl, TicTacToeUrl } from '../consts/urls';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path={HomeUrl} element={<Home />} />
      <Route path={GameLibraryUrl} element={<GamesLibrary />} />
      <Route path={AnimeUrl} element={<Anime />} />
      <Route path={TicTacToeUrl} element={<TicTacToe />} />
      <Route path={HangmanUrl} element={<Hangman />} />
    </Routes>
  );
};

export default Routing;
