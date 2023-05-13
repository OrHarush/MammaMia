import { Skeleton, Typography } from '@mui/material';
import * as React from 'react';
import Column from '../../Layout/Column';
import Row from '../../Layout/Row';

const AnimeLoadingSkeleton = () => {
  console.log('hereadasdas');
  return (
    <Column spacing={2} marginTop="80px">
      <Row justifyContent="space-evenly">
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
      </Row>
      <Row justifyContent="space-evenly">
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
        <Skeleton variant="rectangular" height={300} width={200} sx={{ margin: 0, padding: 0 }} />
      </Row>
    </Column>
  );
};

export default AnimeLoadingSkeleton;
