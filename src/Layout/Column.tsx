import { Stack, StackProps } from '@mui/material';

type ColumnProps = StackProps;

const Column = ({ children, ...props }: ColumnProps) => {
  return (
    <Stack {...props} direction="column">
      {children}
    </Stack>
  );
};

export default Column;
