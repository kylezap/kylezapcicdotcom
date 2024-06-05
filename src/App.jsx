import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import Navbar from './Components/Navbar';
import { Link } from '@mui/material';

export default function App() {
  return (
    <>
    <Navbar />
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Fullstack Software Engineer with background in Client Success.
        </Typography>
        <ProTip />
        
      </Box>
    </Container>
    <Container maxWidth='xl'>
        <Box sx={{ my: 4, py: 4 }}>
            <Typography variant='h2' component='div' > Get in touch <Link>kzapcic@gmail.com</Link> </Typography>

        </Box>
    </Container>
    <Copyright />
    </>
  );
}
