import React from 'react';
import AppProviders from './appProviders/AppProviders';
import Box from '@mui/material/Box';
import NavBar from './Layout/NavBar';


const App = () => {
  return (
    <AppProviders>
      <Box>
        <NavBar></NavBar>
        <h1>hello </h1>
      </Box>
    </AppProviders>

  );
};

export default App;
