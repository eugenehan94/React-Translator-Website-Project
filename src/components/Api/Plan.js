import React from "react";

import { Container, Box, Button, Grid, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const Plan = () => {
  return (
    <Box sx={{ backgroundColor: "#FFE5B4", paddingTop: 5, paddingBottom: 5 }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12}>
            <Typography>Find the right plan for you</Typography>
            <Typography>
              Can’t find the right plan or have more questions? Contact our
              Sales team or check out our Help Center.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper
              elevation={3}
              sx={{
                height: "100%",
                display: "grid",
                gridTemplateRows: "auto auto auto auto auto ",
              }}
            >
              <Box>
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
              <Box>
                <Typography align="center">
                  Get access to our DeepL REST API for FREE without any risk
                </Typography>
              </Box>
              <Box>
                <Typography
                  align="center"
                  sx={{ fontSize: "2rem", fontWeight: "900" }}
                >
                  free
                </Typography>
              </Box>
              <Box>
                <Button variant="outlined">Sign up for free</Button>
              </Box>
              <Box>
                <Typography>DeepL API Free includes:</Typography>
                <Typography>
                  <CheckIcon />
                  Access to the DeepL REST API
                </Typography>
                <Typography>
                  <CheckIcon />
                  500,000 character limit / month
                </Typography>
                <Typography>
                  <CheckIcon />
                  Access to all features
                </Typography>
                <Typography>
                  <CheckIcon />
                  Upgrade to Pro anytime
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={4} xs={12}>
            <Paper
              elevation={3}
              sx={{
                height: "100%",
                display: "grid",
                gridTemplateRows: "auto auto 1fr 1fr auto ",
              }}
            >
              <Box>
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
              <Box>
                <Typography align="center">
                  Use our API without limits
                </Typography>
              </Box>
              <Box>
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
                }}
              >
                <Button variant="outlined" sx={{ width: "100%" }}>
                  Buy now
                </Button>
                <Typography align="center">Cancellable monthly</Typography>
              </Box>
              <Box>
                <Typography>DeepL API Pro includes:</Typography>
                <Typography>
                  <CheckIcon />
                  Maximum data security
                </Typography>
                <Typography>
                  <CheckIcon />
                  Access to the DeepL REST API
                </Typography>
                <Typography>
                  <CheckIcon />
                  No volume restrictions
                </Typography>
                <Typography>
                  <CheckIcon />
                  Cost control settings
                </Typography>
                <Typography>
                  <CheckIcon />
                  Pay as you go (CA$30.03 per 1,000,000 characters)
                </Typography>
                <Typography>
                  <CheckIcon />
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
