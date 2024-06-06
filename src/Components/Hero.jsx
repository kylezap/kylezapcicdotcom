import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";


export default function Hero() {

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Box sx={{ my: 4, py: 4 }}>
        <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
          Fullstack Software Engineer with background in Client Engagement.
        </Typography>
        <Typography variant='h2'  sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
      
      {'Hi, I\'m Kyle Zapcic, a fullstack software engineer bridging the gap between development and user experience. I\'m passionate about building modern, responsive, and impactful web apps.' }
    </Typography>
      </Box>
        </Grid>
        <Grid item xs={4}>
            <img src="src/assets/images/surfing.jpg" alt="surfing" className='hero' />
        </Grid>
      </Grid>
      
    </Container>
  );
}
