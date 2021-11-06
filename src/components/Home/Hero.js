import React from "react";

/*Material UI imports */
import { Typography, Box, Button } from "@mui/material";

/*Image imports*/
import languageSpeechBubble from "../../images/svg/languageSpeechBubble.svg";
import hexagonFilled from "../../images/svg/hexagonFilled.svg";
import hexagonOutline from "../../images/svg/hexagonOutline.svg";
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
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            background: "transparent",
            top: "100px",
            left: "50px",
            display: { lg: "flex", xs: "none" },
          }}
        >
          <img
            src={languageSpeechBubble}
            alt="speech bubble in different language"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            background: "transparent",
            top: "-80px",
            right: "150px",
            display: { lg: "flex", xs: "none" },
          }}
        >
          <img src={hexagonFilled} alt="speech bubble in different language" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            background: "transparent",
            bottom: "1px",
            right: "250px",
            display: { lg: "flex", xs: "none" },
          }}
        >
          <img src={hexagonOutline} alt="speech bubble in different language" />
        </Box>
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
    </Box>
  );
};

export default Hero;
