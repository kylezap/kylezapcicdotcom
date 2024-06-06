import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Projects() {
  
  
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4, py: 4 }}>
        <Typography variant="h2" component="div">
          {" "}
          Projects{" "}
        </Typography>
      </Box>
    </Container>
  );
}
