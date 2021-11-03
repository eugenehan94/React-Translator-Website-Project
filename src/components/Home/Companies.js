import React from "react";

import beiersdorf from "../../images/svg/beiersdorf.svg";
import elsevier from "../../images/svg/elsevier.svg";
import db from "../../images/svg/db.svg";
import fujitsu from "../../images/svg/fujitsu.svg";
import { Box, Grid, Container, Typography } from "@mui/material";
const Companies = () => {
  return (
    <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>
      <Container>
        <Typography align="center" sx={{ fontSize: "2.5rem", marginBottom: 3 }}>
          Join 400,000+ professionals translating
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={beiersdorf} alt="beiersdorf" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={elsevier} alt="elsevier" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={db} alt="db" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={fujitsu} alt="fujitsu" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Companies;
