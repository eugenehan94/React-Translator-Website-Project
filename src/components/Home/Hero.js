import React from "react";

/*Material UI imports */
import { Typography, Box, Button } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        paddingTop: { xs: 5, sm: 10 },
        paddingBottom: { xs: 5, sm: 10 },
        paddingLeft: 1,
        paddingRight: 1,
      }}
    >
      <Typography
        variant="h1"
        align="center"
        sx={{ fontSize: { sm: "4rem", xs: "1.8rem" } }}
      >
        Translator App --
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ fontSize: { sm: "4rem", xs: "1.5rem" } }}
      >
        fast, accurate, and secure translations
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: "row", xs: "column" },
          marginTop: { md: 4, xs: 2 },
          "& Button": {
            fontSize: { md: "1.2rem", sm: "1rem" },
            margin: { md: "0 1rem", xs: "0.5rem 0" },
          },
        }}
      >
        <Button
          sx={{
            backgroundColor: "#f46f52",
            color: "#fff",
            padding: "0.75rem 2rem",
            ":hover": {
              backgroundColor: "#0f2b46",
            },
          }}
        >
          Try for Free
        </Button>
        <Button variant="outlined" sx={{ padding: "0.75rem 2rem" }}>
          Talk to sales
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
