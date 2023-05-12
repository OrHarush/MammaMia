import { Card, CardHeader, CardMedia, CardContent, Typography, useTheme } from '@mui/material';
import { CardProps } from '@mui/material/Card';
import { useEffect } from 'react';
import useToggle from '../../hooks/useToggle';

interface HomeCardProps extends CardProps {
  title: string;
  imageUrl: string;
  gifUrl?: string;
}

const HomeCard = ({ title, imageUrl, gifUrl, ...props }: HomeCardProps) => {
  const theme = useTheme();
  const [isHovering, toggleIsHovering] = useToggle(false);

  useEffect(() => {
    console.log(isHovering);
    console.log(imageUrl);
    console.log(gifUrl);
  }, [isHovering]);

  return (
    <Card
      style={{
        textAlign: 'center',
      }}
      sx={{
        width: '350px',
        height: '370px',
        backgroundColor: theme.palette.primary.light,
        borderRadius: '30px',
        border: `3px solid ${theme.palette.secondary.main}`,
        '&:hover': {
          width: '450px',
          cursor: 'pointer',
        },
        transition: 'width 1s',
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
