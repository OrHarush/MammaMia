import { Stack } from '@mui/material';

interface ColumnProps {
    children: React.ReactNode;
}

const Column = ({children} : ColumnProps) => {
  return (
    <Stack>
      {children}
    </Stack>
  );
};

export default Column;