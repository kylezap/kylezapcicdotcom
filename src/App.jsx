import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Fullstack Software Engineer with background in Client Success.
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
