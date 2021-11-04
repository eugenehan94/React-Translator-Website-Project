import React from "react";

import speechBubbleYellow from "../../images/svg/speechBubbleYellow.svg";
import speechBubbleGreen from "../../images/svg/speechBubbleGreen.svg";
import speechBubbleBlue from "../../images/svg/speechBubbleBlue.svg";
import speechBubbleOrange from "../../images/svg/speechBubbleOrange.svg";
import { Typography, Grid, Box, Container } from "@mui/material";

const Testimonials = () => {
  return (
    <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>
      <Typography align="center" sx={{ fontSize: "2.5rem", marginBottom: 5 }}>
        What customers love about Translator Pro
      </Typography>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Box>
              <img src={speechBubbleYellow} alt="Yellow speech bubble" />
            </Box>
            <Typography>
              “Translation quality is excellent. It is fantastic that DeepL
              translates well even if the sentence in source language is not
              well constructed. DeepL works like Magic.”
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <img src={speechBubbleGreen} alt="Green speech bubble" />
            </Box>
            <Typography>
              “I find that DeepL not only translates exactly what I want to say,
              but even the tone of voice can be accurate.”
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <img src={speechBubbleBlue} alt="Green speech bubble" />
            </Box>
            <Typography>
              “It's the best translation program I've ever come across, and
              being in a bilingual (Spanish/English) environment - the island of
              Puerto Rico - such a tool is a must. Beats Google Translate hands
              down.”
            </Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box>
              <img src={speechBubbleOrange} alt="Green speech bubble" />
            </Box>
            <Typography>
              “The results are exceptionally good and the feature for
              alternative translations with one click is priceless.”
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
