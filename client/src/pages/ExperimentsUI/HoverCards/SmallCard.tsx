import { CardProps } from '@mui/material/Card';
import { SxProps } from '@mui/material';
import BaseCard from './BaseCard';

interface SmallCardProps extends CardProps {
  imageUrl: string;
  sx?: SxProps;
}

const SmallCard = ({ imageUrl, sx, ...props }: SmallCardProps) => {
  return <BaseCard imageUrl={imageUrl} sx={{ ...sx, width: '125px', backgroundColor: 'blue' }} />;
};

export default SmallCard;
