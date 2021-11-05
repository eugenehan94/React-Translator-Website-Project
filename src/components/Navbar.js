import React from "react";
import NavbarSmaller from "./NavbarSmaller";
import { useGlobalContext } from "./context";
/*Material UI imports */
import { AppBar, Box, Toolbar, Typography } from "@mui/material/";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuIcon from "@mui/icons-material/Menu";
/*React router import */
import { Link } from "react-router-dom";
/*Image/Svg imports*/
import navbarSvg from "../images/svg/navbarIcon.svg";
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
            <Box sx={{ display: "flex", alignItems: "center", marginRight: 4 }}>
              <Typography
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "1.8rem",
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                <Link to="/">
                  {" "}
                  <Box sx={{ marginRight: 4, "& img": { width: "100%" } }}>
                    <img src={navbarSvg} alt="navbar icon" />
                  </Box>
                  <Box
                    sx={{
                      borderBottom: "2px solid #fff",
                      letterSpacing: "0.4rem",
                      ":hover": {
                        borderBottom: "2px solid #006494",
                      },
                    }}
                  >
                    Home
                  </Box>
                </Link>
              </Typography>
            </Box>
            <Box
              sx={{
                marginRight: 4,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "1.8rem",
                  },
                }}
              >
                <Link to="/api">
                  <Box
                    sx={{
                      borderBottom: "2px solid #fff",
                      letterSpacing: "0.4rem",
                      ":hover": {
                        borderBottom: "2px solid #006494",
                      },
                    }}
                  >
                    API
                  </Box>
                </Link>
              </Typography>
            </Box>
            {/* <Typography sx={{ "& a": { textDecoration: "none", color: "#000" }}}>
            <Link to="/price">Price</Link>
          </Typography> */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#000",
                    fontSize: "1.8rem",
                  },
                }}
              >
                <Link to="/translate">
                  <Box
                    sx={{
                      borderBottom: "2px solid #fff",
                      letterSpacing: "0.4rem",
                      ":hover": {
                        borderBottom: "2px solid #006494",
                      },
                    }}
                  >
                    Translate
                  </Box>
                </Link>
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
            <MenuIcon
              sx={{ color: "#000", ":hover": { cursor: "pointer" } }}
              onClick={handleClickOpen}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
