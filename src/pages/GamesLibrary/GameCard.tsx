import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Game } from '../../types/Game';

interface GameCardProps extends CardProps {
  game: Game;
}

const GameCard = ({ game, ...props }: GameCardProps) => {
  return (
    <Card
      {...props}
      sx={{
        height: '400px',
        width: '300px',
        '&:hover': {
          transform: 'scale3d(1.05, 1.05, 122)',
          cursor: 'pointer',
        },
        transition: '"transform 0.15s ease-in-out"',
      }}
    >
      <CardHeader title={game.name} subheader="September 14, 2016" />
      <CardMedia component="img" image={game?.imageUrl} sx={{ backgroundSize: 'cover' }} height="200px" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {game.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default GameCard;
