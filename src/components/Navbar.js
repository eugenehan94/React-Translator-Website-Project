import React from "react";

/*Material UI imports */
import { AppBar, Box, Toolbar, Typography } from "@mui/material/";

/*React router import */
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography>
            <Link to="/">Home</Link>
          </Typography>
          <Typography>
            <Link to="/api">API</Link>
          </Typography>
          <Typography>
            <Link to="/price">Price</Link>
          </Typography>
          <Typography>
            <Link to="/translate">Translate</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
