import React from "react";

/*React components import*/
import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";

/*Material UI imports*/
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#FFE5B4" }}>
      <Navbar />

      <Hero />
    </Box>
  );
};

export default Home;
