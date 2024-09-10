import * as React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import theme from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

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
