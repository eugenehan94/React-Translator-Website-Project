import React from "react";

/*Material UI Imports*/
import { Container, Grid, Box, Typography } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        paddingTop: 3,
        paddingBottom: { md: 5, xs: 0 },
      }}
    >
      <Container
        sx={{ backgroundColor: "#fff", paddingTop: 2, paddingBottom: 2 }}
      >
        <Grid container spacing={1}>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <VerifiedUserOutlinedIcon sx={{ fontSize: "2rem" }} />
              <Typography
                align="center"
                component="h2"
                sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}
              >
                Protect your data
              </Typography>
              <Typography align="center" variant="body1">
                Enjoy peace of mind knowing your data is secured
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <GTranslateOutlinedIcon sx={{ fontSize: "2rem" }} />
              <Typography
                align="center"
                component="h2"
                sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}
              >
                Unlimited text translation
              </Typography>
              <Typography align="center">
                Remove the limits on our free translator and translate as much
                as you like
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <DescriptionOutlinedIcon sx={{ fontSize: "2rem" }} />
              <Typography
                component="h2"
                sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}
              >
                Protect your data
              </Typography>
              <Typography align="center">
                Enjoy peace of mind knowing your data is secured
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TuneOutlinedIcon sx={{ fontSize: "2rem" }} />
              <Typography
                component="h2"
                sx={{ fontSize: { md: "2rem", xs: "1.5rem" } }}
              >
                Protect your data
              </Typography>
              <Typography align="center">
                Enjoy peace of mind knowing your data is secured
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
