import { Card, CardHeader, CardMedia, CardContent, Typography, useTheme } from '@mui/material';
import { CardProps } from '@mui/material/Card';
import { useEffect } from 'react';
import useToggle from '../../../hooks/useToggle';
import Column from '../../../Layout/Column';

interface HomeCardProps extends CardProps {
  title: string;
  description: string;
  imageUrl: string;
  gifUrl?: string;
}

const AnimeCard = ({ title, description, imageUrl, gifUrl, ...props }: HomeCardProps) => {
  const theme = useTheme();
  const [isHovering, toggleIsHovering] = useToggle(false);

  return (
    <Column spacing={3} alignItems="center" width="200px">
      <Typography variant="body1">{title}</Typography>
      <Card
        style={{
          textAlign: 'center',
        }}
        sx={{
          width: '200px',
          height: '300px',
          backgroundColor: theme.palette.primary.light,
          borderRadius: '10px',
          objectFit: 'cover',
          '&:hover': {
            width: '210px',
            cursor: 'pointer',
          },
          transition: 'all .2s ease-in-out',
        }}
        onMouseEnter={toggleIsHovering}
        onMouseLeave={toggleIsHovering}
        {...props}
      >
        <CardMedia
          component="img"
          sx={{ height: '100%', objectFit: isHovering ? 'cover' : 'cover' }}
          image={imageUrl}
        />
      </Card>
    </Column>
  );
};

export default AnimeCard;
