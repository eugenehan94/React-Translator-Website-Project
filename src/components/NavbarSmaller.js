import React from "react";
import { useGlobalContext } from "./context";

/*Material UI imports */
import { Dialog, Slide, AppBar, Toolbar, Box, Typography } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
/*React router dom */
import { Link } from "react-router-dom";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const NavbarSmaller = () => {
  const { open, handleClose } = useGlobalContext();

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{ display: { md: "none", xs: "auto" } }}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "#FFE5B4",
            boxShadow: "none",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/" onClick={handleClose}>
              <TranslateIcon sx={{ color: "#000" }} />
            </Link>
            <CloseIcon onClick={handleClose} sx={{ color: "#000" }} />
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem 1rem",

            "& a": {
              color: "#000",
              textDecoration: "none",

              marginBottom: 2,
            },
          }}
        >
          <Link to="/" onClick={handleClose}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="h2" sx={{ fontSize: "1.3rem" }}>
                Home
              </Typography>
              <ArrowRightAltOutlinedIcon sx={{ color: "black" }} />
            </Box>
          </Link>

          <Link to="/api" onClick={handleClose}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="h2" sx={{ fontSize: "1.3rem" }}>
                API
              </Typography>
              <ArrowRightAltOutlinedIcon sx={{ color: "black" }} />
            </Box>
          </Link>

          <Link to="/translate" onClick={handleClose}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography component="h2" sx={{ fontSize: "1.3rem" }}>
                Translate
              </Typography>
              <ArrowRightAltOutlinedIcon sx={{ color: "black" }} />
            </Box>
          </Link>
        </Box>
      </Dialog>
    </div>
  );
};

export default NavbarSmaller;
