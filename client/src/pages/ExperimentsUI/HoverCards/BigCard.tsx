import { CardProps } from '@mui/material/Card';
import { SxProps } from '@mui/material';
import BaseCard from './BaseCard';

interface BigCardProps extends CardProps {
  imageUrl: string;
  sx?: SxProps;
}

const BigCard = ({ imageUrl, sx, ...props }: BigCardProps) => {
  return <BaseCard sx={{ ...sx, width: '250px' }} imageUrl={imageUrl} />;
};

export default BigCard;
