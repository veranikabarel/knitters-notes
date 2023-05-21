'use client';
import {
  Grid,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export default function Project() {
  return (
    <Grid
      container
      height="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <h1>Project</h1>
      <Stack
        direction="row"
        columnGap={3}
        bgcolor={'secondary.main'}
        p={2}
        borderRadius={1}
        mb={2}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ fontWeight: 'bold' }}>
            <TableRow>
              <TableCell>Project</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Lorem ipsum</TableCell>
              <TableCell>Lorem ipsum</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Stack>
      <Link underline="hover" href={'/dashboard'}>
        Back to dashboard
      </Link>
    </Grid>
  );
}
