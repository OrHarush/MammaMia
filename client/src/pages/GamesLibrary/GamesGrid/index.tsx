import { Button, Grid, MenuItem, Popper, Select, SelectChangeEvent, Typography } from '@mui/material';
import { useState } from 'react';
import GameCard from './GameCard';
import { Game } from '../Game';
import Column from '../../../Layout/Column';
import Row from '../../../Layout/Row';
import useToggle from '../../../hooks/useToggle';

interface GamesGridProps {
  games: Game[];
}

const categories = [
  'All',
  'MMORPG',
  'Shooter',
  'Strategy',
  'Moba',
  'Racing',
  'Sports',
  'Social',
  'Sandbox',
  'Open-World',
  'Survival',
  'PvP',
  'PvE',
  'Pixel',
  'Voxel',
  'Zombie',
  'Turn-Based',
  'First-Person',
  'Third-Person',
  'Top-Down',
  'Tank',
  'Space',
  'Sailing',
  'Side-Scroller',
  'Superhero',
  'Permadeath',
  'Card',
  'Battle-Royale',
  'MMO',
  'MMMOFPS',
  'MMOTPS',
  '3d',
  '2d',
  'Anime',
  'Fantasy',
  'Sci-Fi',
  'Fighting',
  'Action-RPG',
  'Action',
  'Military',
  'Martial-Arts',
  'Flight',
  'Low-spec',
  'Tower-Defense',
  'Horror',
  'Mmorts',
];
const GamesGrid = ({ games }: GamesGridProps) => {
  const [category, setCategory] = useState('All');

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Column marginTop="30px">
      <Row alignItems="center" marginLeft="70px">
        <Typography>Categories</Typography>
        <Select
          sx={{ width: '100px', height: '40px' }}
          labelId="categories"
          id="categories"
          value={category}
          label="categories"
          onChange={handleChange}
        >
          {categories.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Row>

      <Grid container marginTop="20px" spacing={3} justifyContent="center">
        {games.map((game, index) => (
          <Grid key={game.title + index} item>
            <GameCard game={game} zoomDelay={200 + index * 100} />
          </Grid>
        ))}
      </Grid>
    </Column>
  );
};

export default GamesGrid;
