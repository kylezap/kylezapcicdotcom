import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Navbar from "./Components/Navbar";
import { Link } from "@mui/material";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";
import theme from './theme'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';


export default function App() {
  return (
    <>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Navbar />
              <Outlet />
            <Footer />
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
}
