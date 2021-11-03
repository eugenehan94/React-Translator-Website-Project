import React from "react";

import { Box, Typography, Container } from "@mui/material";

import cartoon from "../../images/svg/cartoon.svg";

const Article = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", paddingTop: 8, paddingBottom: 8 }}>
      <Container>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              "& img": {
                display: { md: "flex", xs: "none" },
                width: "100%",
                height: "100%",
              },
            }}
          >
            <img src={cartoon} alt="cartoon" />
          </Box>
          <Box sx={{ marginLeft: { md: 3, xs: 0 } }}>
            <Typography sx={{ fontSize: "2.5rem", marginBottom: 3 }}>
              The World's Best Machine Translation
            </Typography>
            <Typography variant="body1">
              Translator neural networks are able to capture even the slightest
              nuances and reproduce them in translation unlike any other
              service. In blind tests pitting Translator against the
              competition, translators prefer Translator results by a factor of
              3:1. Translator also achieves record-breaking performance
              according to scientific benchmarks.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Article;
