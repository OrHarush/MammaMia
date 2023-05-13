import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Stack, useTheme, Zoom } from '@mui/material';
import { Game } from '../Game';
import Column from '../../../Layout/Column';

interface GameCardProps extends CardProps {
  game: Game;
  zoomDelay: number;
}

const openGamePage = (url: string) => {
  window.open(url, '_blank'); // Open the URL in a new tab or window
};

const GameCard = ({ game, zoomDelay, ...props }: GameCardProps) => {
  const theme = useTheme();

  return (
    <Zoom in style={{ transitionDelay: `${zoomDelay.toString()}ms` }}>
      <Stack>
        <Card
          {...props}
          sx={{
            height: '400px',
            width: '300px',
            transition: 'all .2s ease-in-out',
            '&:hover': {
              boxShadow: `2px 2px 20px 1px ${theme.palette.secondary.main}`,
              transform: 'scale(1.02)',
            },
          }}
        >
          <Column height="100%" justifyContent="space-evenly" alignItems="center">
            <CardHeader
              title={game.title}
              sx={{
                '& .MuiCardHeader-content': {
                  display: 'block',
                  overflow: 'hidden',
                },
              }}
              titleTypographyProps={{
                noWrap: true,
                textOverflow: 'ellipsis',
              }}
            />
            <CardMedia component="img" image={game?.thumbnail} sx={{ backgroundSize: 'cover' }} height="200px" />
            <CardContent
              sx={{
                maxHeight: '30px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              <Typography variant="body2" color="text.secondary" textOverflow="ellipsis" overflow="hidden">
                {game.short_description}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: '100px' }}
              onClick={() => openGamePage(game.game_url)}
            >
              Get Game
            </Button>
          </Column>
        </Card>
      </Stack>
    </Zoom>
  );
};

export default GameCard;
