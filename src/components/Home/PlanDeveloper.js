import React from "react";

/*Material UI Imports*/
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const PlanDeveloper = () => {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid rgba(224, 224, 224, 1)",
          margin: " 0 3rem",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Box>
                    <Typography>Plans and pricing</Typography>
                    <Typography>Billing period</Typography>
                    <Typography>monthly</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Box>
                    <Typography align="center">Translator API free</Typography>
                    <Typography align="center">
                      For max. 500,000 characters/month
                    </Typography>
                    <Typography align="center"> free</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button>Sign up for free</Button>
                    </Box>
                    <Typography align="center">Upgrade anytime</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box>
                    <Typography align="center">Translator API Pro</Typography>
                    <Typography align="center">
                      For more than 500,000 characters/month
                    </Typography>
                    <Typography align="center">CA$7.49</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button>Buy now</Button>
                    </Box>
                    <Typography align="center">Cancel anytime</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: "#FFE5B4" }}>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Typography>Access to DeepL REST API</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CheckIcon />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CheckIcon />
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Typography>Glossary (limited languages)</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Typography align="center">1000 glossaries</Typography>
                  <Typography align="center">
                    Up to 10 MB per glossary
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">1000 glossaries</Typography>
                  <Typography align="center">
                    Up to 10 MB per glossary
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: "#FFE5B4" }}>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Typography>No volume restrictions</Typography>
                </TableCell>
                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                ></TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CheckIcon />
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default PlanDeveloper;
