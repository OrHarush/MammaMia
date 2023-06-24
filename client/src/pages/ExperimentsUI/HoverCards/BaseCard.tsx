import { CardProps } from '@mui/material/Card';
import { Card, CardHeader, CardMedia, SxProps } from '@mui/material';

interface BaseCardProps extends CardProps {
  imageUrl: string;
  sx?: SxProps;
}

const BaseCard = ({ imageUrl, sx, ...props }: BaseCardProps) => {
  console.log(imageUrl);
  return (
    <Card sx={{ aspectRatio: '5/7', position: 'absolute', objectFit: 'cover', ...sx }} {...props}>
      <CardMedia sx={{ height: '100%' }} image={imageUrl} title="green iguana" />
    </Card>
  );
};

export default BaseCard;
