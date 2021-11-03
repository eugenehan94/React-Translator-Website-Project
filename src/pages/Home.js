import React from "react";

/*React components import*/
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Plan from "../components/Home/Plan";
import Companies from "../components/Home/Companies";
import Article from "../components/Home/Article";
import Testimonials from "../components/Home/Testimonials";
/*Material UI imports*/
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#FFE5B4" }}>
      <Navbar />
      <Hero />
      <About />
      <Plan />
      <Companies />
      <Article />
      <Testimonials />
    </Box>
  );
};

export default Home;
