import React from "react";
/*React component imports*/
import Navbar from "../components/Navbar";
import Hero from "../components/Api/Hero";
import About from "../components/Api/About";
import Plan from "../components/Api/Plan";
import Footer from "../components/Footer";
const Api = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Plan />
      <Footer />
    </div>
  );
};

export default Api;
