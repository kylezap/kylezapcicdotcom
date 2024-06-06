import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "./Components/Navbar";
import { Link } from "@mui/material";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Hero from "./Components/Hero";
// import Projects from "./Components/Projects";
// import Contact from "./Components/Contact";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Footer />
     
    </>
  );
}
