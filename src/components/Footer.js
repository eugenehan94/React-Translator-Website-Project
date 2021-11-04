import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#fff", paddingTop: 5, paddingBottom: 5 }}>
      <Container>
        <Grid container>
          <Grid item lg={4} md={6} xs={12}>
            <List>
              <ListItem>
                <Typography sx={{ fontWeight: "bold" }}>Resources</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Help Center" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Blog" />
              </ListItem>
              <ListItem>
                <ListItemText primary="API documentation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Data security" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Privacy policy" />
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <List>
              <ListItem>
                <Typography sx={{ fontWeight: "bold" }}>Product</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Free translator" />
              </ListItem>
              <ListItem>
                <ListItemText primary="DeepL Pro" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Translation API" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Desktop app" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mobile app" />
              </ListItem>
            </List>
          </Grid>
          <Grid item lg={4} md={6} xs={12}>
            <List>
              <ListItem>
                <Typography sx={{ fontWeight: "bold" }}>Company</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact Sales" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Press" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Careers" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Publisher" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
      <hr />
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Typography
            align="center"
            sx={{ "& a": { textDecoration: "none", color: "#000" } }}
          >
            Developed by{" "}
            <a
              href="https://eugenehan.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Eugene Han
            </a>
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FacebookRoundedIcon sx={{ fontSize: "2rem" }} />
            <PaidRoundedIcon sx={{ fontSize: "2rem" }} />
            <PlayCircleFilledRoundedIcon sx={{ fontSize: "2rem" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
