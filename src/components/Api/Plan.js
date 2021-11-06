import React from "react";

import { Container, Box, Button, Grid, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const Plan = () => {
  return (
    <Box sx={{ backgroundColor: "#FFE5B4", paddingTop: 8, paddingBottom: 8 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12}>
            <Typography
              gutterBottom
              sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Find the right plan for you
            </Typography>
            <Typography>
              Can’t find the right plan or have more questions? Contact our
              Sales team or check out our Help Center.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper elevation={3} sx={{ height: "100%", paddingBottom: 6 }}>
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#e2cba0",
                  }}
                >
                  API FREE
                </Typography>
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <Typography align="center">
                  Get access for FREE without any risk
                </Typography>
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <Typography
                  align="center"
                  sx={{ fontSize: "2rem", fontWeight: "900" }}
                >
                  free
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: 1,
                  paddingRight: 1,
                  marginBottom: 5,
                  width: "100%",
                }}
              >
                <Button variant="outlined" sx={{ width: "100%" }}>
                  Sign up for free
                </Button>
              </Box>
              <Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
                <Typography>DeepL API Free includes:</Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Access to the DeepL REST API
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  500,000 character limit / month
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Access to all features
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Upgrade to Pro anytime
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper elevation={3} sx={{ paddingBottom: 6 }}>
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    backgroundColor: "#e2cba0",
                  }}
                >
                  DEEPL API PRO
                </Typography>
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <Typography align="center">
                  Use our API without limits
                </Typography>
              </Box>
              <Box sx={{ marginBottom: 3 }}>
                <Typography
                  align="center"
                  sx={{ fontSize: "2rem", fontWeight: "900" }}
                >
                  CA$7.49 /month
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  paddingLeft: 1,
                  paddingRight: 1,
                  marginBottom: 2,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#0f2b46",
                    color: "#fff",
                    "&:hover": { backgroundColor: "#2f87db" },
                  }}
                >
                  Buy now
                </Button>
                <Typography align="center" variant="subtitle2">
                  Cancellable monthly
                </Typography>
              </Box>
              <Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
                <Typography>DeepL API Pro includes:</Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Maximum data security
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Access to the DeepL REST API
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  No volume restrictions
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Cost control settings
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Pay as you go (CA$30.03 per 1,000,000 characters)
                </Typography>
                <Typography>
                  <CheckIcon sx={{ color: "#2f8a8a" }} />
                  Prioritized execution of requests
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Plan;
