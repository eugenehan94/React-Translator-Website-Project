import React from "react";

/*Material UI imports */
import { AppBar, Box, Toolbar, Typography } from "@mui/material/";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";
/*React router import */
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ display: { md: "flex", xs: "none" } }}>
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
              <TranslateIcon sx={{ color: "#000", fontSize: "2rem" }} />
              <Typography
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "2rem",
                  },
                }}
              >
                <Link to="/">Home</Link>
              </Typography>
            </Box>
            <Box sx={{ marginRight: 2 }}>
              <Typography
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "2rem",
                  },
                }}
              >
                <Link to="/api">API</Link>
              </Typography>
            </Box>
            {/* <Typography sx={{ "& a": { textDecoration: "none", color: "#000" }}}>
            <Link to="/price">Price</Link>
          </Typography> */}
            <Box>
              <Typography
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "2rem",
                  },
                }}
              >
                <Link to="/translate">Translate</Link>
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: { md: "none", xs: "flex" } }}>
            <MenuIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
