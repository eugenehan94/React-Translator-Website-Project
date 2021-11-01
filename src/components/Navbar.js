import React from "react";
import NavbarSmaller from "./NavbarSmaller";
import { useGlobalContext } from "./context";
/*Material UI imports */
import { AppBar, Box, Toolbar, Typography } from "@mui/material/";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";
/*React router import */
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleClickOpen } = useGlobalContext();
  return (
    <div>
      <NavbarSmaller />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ display: { sm: "flex", xs: "none" } }}>
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
              <Typography
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "2rem",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <Link to="/">
                  {" "}
                  <TranslateIcon sx={{ color: "#000", fontSize: "2rem" }} />
                  Home
                </Link>
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
          <Box
            sx={{
              width: "100%",
              display: { sm: "none", xs: "flex" },
              justifyContent: { xs: "space-between" },
            }}
          >
            <Link to="/">
              <TranslateIcon sx={{ color: "#000" }} />
            </Link>
            <MenuIcon sx={{ color: "#000" }} onClick={handleClickOpen} />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
