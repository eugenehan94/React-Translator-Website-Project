import React from "react";

/*Material UI imports*/
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const PlanIndividual = () => {
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
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Box>
                    <Typography align="center">Starter</Typography>
                    <Typography align="center">Free</Typography>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Box>
                    <Typography align="center">Starter</Typography>
                    <Typography align="center">CA$8.99</Typography>
                    <Typography align="center">
                      per user per month billed annually
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button>Try for free</Button>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Box>
                    <Typography align="center">Advanced</Typography>
                    <Typography align="center">CA$29.99</Typography>
                    <Typography align="center">
                      per user per month billed annually
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button>Try for free</Button>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>
                  <Box>
                    <Typography align="center"> Ultimate </Typography>
                    <Typography align="center">CA$29.99</Typography>
                    <Typography align="center">
                      per user per month billed annually
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Button>Try for free</Button>
                    </Box>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ backgroundColor: "#FFE5B4" }}>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography>Maximum data security</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                ></TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CheckIcon />
                  </Box>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
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
            </TableBody>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography>Translate text</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography align="center">
                    Limited characters & volume
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography align="center">Unlimited *</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography align="center">Unlimited *</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">Unlimited *</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow sx={{ backgroundColor: "#FFE5B4" }}>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography>Translate whole files (per user)</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography align="center">
                    Limited characters & editing
                  </Typography>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography align="center">Unlimited *</Typography>
                </TableCell>
                <TableCell
                  sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}
                >
                  <Typography align="center">Unlimited *</Typography>
                </TableCell>
                <TableCell>
                  <Typography align="center">Unlimited *</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default PlanIndividual;
