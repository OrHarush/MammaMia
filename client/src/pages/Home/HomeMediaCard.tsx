import { Card, CardHeader, CardMedia, CardContent, Typography, useTheme, Fade, Stack } from '@mui/material';
import useToggle from '../../hooks/useToggle';
import MediaCard from '../../types/MediaCard';

interface HomeCardProps extends MediaCard {
  description: string;
  gifUrl?: string;
}

const HomeMediaCard = ({ title, description, imageUrl, gifUrl, ...props }: HomeCardProps) => {
  const theme = useTheme();
  const [isHovering, toggleIsHovering] = useToggle(false);

  return (
    <Fade in timeout={1500}>
      <Stack>
        <Card
          style={{
            textAlign: 'center',
          }}
          sx={{
            width: '350px',
            height: '370px',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '30px',
            transition: 'all .2s ease-in-out',
            '&:hover': {
              boxShadow: `2px 2px 20px 1px ${theme.palette.secondary.light}`,
              transform: 'scale(1.1)',
            },
          }}
          onMouseEnter={toggleIsHovering}
          onMouseLeave={toggleIsHovering}
          {...props}
        >
          {isHovering && gifUrl ? (
            <CardMedia sx={{ height: 200 }} image={gifUrl} />
          ) : (
            <CardMedia sx={{ height: 200 }} image={imageUrl} />
          )}
          <CardHeader title={title} />
          <CardContent sx={{ paddingTop: 0 }}>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Fade>
  );
};

export default HomeMediaCard;
