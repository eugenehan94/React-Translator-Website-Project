import React from "react";

import { Box, Container, Typography, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFE5B4",
        paddingTop: { xs: 5, sm: 10 },
        paddingBottom: { xs: 5, sm: 10 },
        paddingLeft: 1,
        paddingRight: 1,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          align="center"
          component="h1"
          sx={{ fontSize: { md: "4rem", xs: "1.8rem" }, marginBottom: 2 }}
        >
          Translate with Translator Api
        </Typography>
        <Typography align="center" varient="body1" sx={{ marginBottom: 2 }}>
          Integrate the world’s best machine translation technology directly
          into your own products and platforms.
        </Typography>
        <Box>
          <Button
            sx={{
              backgroundColor: "#0f2b46",
              color: "#fff",
              padding: "0.75rem 1.5rem",
              marginRight: "1.5rem",
              "&:hover": { backgroundColor: "#2f87db" },
            }}
          >
            Sign up for free
          </Button>
          <Button
            variant="outlined"
            sx={{
              padding: "0.75rem 1.5rem",
              display: { md: "inline", xs: "none" },
            }}
          >
            Read the docs
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
