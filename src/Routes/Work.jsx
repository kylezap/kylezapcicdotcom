import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Project from "../Components/Project";
import { Grid } from "@mui/material";
import Project1 from "../assets/images/Project1.png";
import Project2 from "../assets/images/Project2.png";
import Project3 from "../assets/images/Project3.png";
import Divider from '@mui/material/Divider';




export default function Work() {
  return (
    <>
    <Container maxWidth="xl">
      <Box sx={{ my: 4, py: 4 }}>
        <Typography variant="h2" component="div">
          {"Projects "}
        </Typography>
        <Typography variant="body" component="div">
          {"Here are some of the projects I've worked on. Click on the images to view the live sites."}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Project
          name="Rightsize Meals"
          image={Project1}
          link="https://rightsize-meals-1.onrender.com/"
          description="Nutrition and fitness app where users track their calories"
          tech="Express, Sessions, PostgreSQL, Sequelize, Handlebars"
        />
        <Divider variant="middle" component='div'/>
        <Project
          name="Ctrl-Alt-Win"
          image={Project2}
          link="https://ctrl-alt-win.onrender.com/"
          description="Social media network for gamers. Users can create profiles, post, and comment, search a database of games through an API, and save games to their profiles."
          tech="MERN, GraphQL, JSON Web Token"
        />
        <Project
          name="Portfolio"
          image={Project3}
          link="/"
          description="My personal portfolio. You're looking at it!"
          tech="React, Material UI, MUI, React Router"
        />
      </Grid>
    </Container>
    </>
    
  );
}
