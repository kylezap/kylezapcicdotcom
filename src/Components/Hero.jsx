import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import surf from "../assets/images/surfing.jpg";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Container maxWidth="xl" className="hero-container">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <Box sx={{ my: 4, py: 4 }}>
            <Slide direction="right" in={checked} timeout={500}>
              <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Fullstack Software Developer, UX Enthusiast, and Problem Solver.
              </Typography>
            </Slide>
            <Slide direction="up" in={checked} timeout={700}>
              <Typography variant="h2" sx={{ mt: 4, mr: 4, color: "text.secondary" }}>
                
                  Hi, I'm Kyle, a fullstack software developer bridging the gap between development and user experience. I'm passionate about building modern, responsive, and impactful web apps. Get in touch here, view my <a href='/work'>work</a>, learn about <a href="/about">me</a>, or check out my <a href="https://github.com/kylezap">github</a> . Thanks for stopping by!
                
              </Typography>
              
            </Slide>
          </Box>
        </Grid>
        <Grid item xs={4} style={{ position: "relative" }}>
          <Slide direction="left" in={checked} timeout={900}>
            <img
              src={profile}
              alt="surfing"
              className="hero-img"
            />
          </Slide>
        </Grid>
      </Grid>
    </Container>
  );
}
