import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function About() {
  return (
    <Container maxWidth='xl' >
      <Box sx={{ my: 4, py: 4 }}>
        <Typography variant='h2' component='div'>
          About
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant='body1' component='div'>
              {'I am a passionate and curious lifelong learner with a rich and varied career spanning multiple industries. As a fullstack developer, my deep-seated love for problem-solving drives me to continuously seek new knowledge and innovative solutions in the tech world. Throughout my professional journey, I have honed my skills in relationship building and client engagement, consistently fostering strong connections and delivering exceptional results. My proactive nature and hands-on approach have established me as a doer, always ready to tackle challenges head-on and drive projects to successful completion. This blend of enthusiasm, technical expertise, curiosity, and experience enables me to thrive in dynamic environments and make meaningful contributions wherever I go.'}
            </Typography>
            
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}