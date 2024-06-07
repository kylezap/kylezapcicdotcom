import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function NotFound() {
  return (
    <>
    <Navbar />
    <Container maxWidth="xl">
      <Box sx={{ my: 4, py: 4 }}>
        <img src="src/assets/images/gandalf.webp" alt="" />
        <Typography variant="h2" component="div" alignContent='center'>          
          404 Not Found
        </Typography>
      </Box>
    </Container>
    <Footer />
    </>
    
  );
}