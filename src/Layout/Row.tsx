import { Stack, StackProps } from '@mui/material';

type RowProps = StackProps;

const Row = ({ children, ...props }: RowProps) => {
  return (
    <Stack {...props} direction="row">
      {children}
    </Stack>
  );
};

export default Row;
