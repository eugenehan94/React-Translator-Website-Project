import React from "react";

/*React components import*/
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
/*Material UI imports*/
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#FFE5B4" }}>
      <Navbar />
      <Hero />
      <About />
    </Box>
  );
};

export default Home;
