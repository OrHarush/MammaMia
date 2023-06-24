import { Stack, StackProps } from '@mui/material';

interface ColumnProps extends StackProps {
  children: JSX.Element | JSX.Element[];
}

const Column = ({ children, ...props }: ColumnProps) => {
  return (
    <Stack {...props} direction="column">
      {children}
    </Stack>
  );
};

export default Column;
