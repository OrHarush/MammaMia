import { Skeleton } from '@mui/material';
import Column from '../../../Layout/Column';
import Row from '../../../Layout/Row';

const GamesGridSkeleton = () => (
  <Column width="100%" spacing={3} marginTop="30px" alignSelf="center">
    <Row spacing={3} justifyContent="space-evenly">
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
    </Row>
    <Row spacing={3} justifyContent="space-evenly">
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
      <Skeleton variant="rectangular" height={350} width={250} />
    </Row>
  </Column>
);

export default GamesGridSkeleton;
