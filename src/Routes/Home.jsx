import * as React from "react";
import { Box } from "@mui/system";

import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


export default function App() {
  return (
    <>
      <Box className='home-container'>
        <Navbar />
        <Hero />
        
      </Box>
    </>
  );
}
