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
          margin: { md: "0 3rem", xs: "0 0.5rem" },
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
                    <Typography
                      align="center"
                      gutterBottom
                      sx={{ fontSize: "1.2rem" }}
                    >
                      Starter
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "2rem" }}>
                      CA$8.99
                    </Typography>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                      per user per month billed annually
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 3,
                      }}
                    >
                      <Button variant="outlined" sx={{ padding: 1.5 }}>
                        Try for free
                      </Button>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    borderRight: "1px solid rgba(224, 224, 224, 1)",
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        transform: "translateX(-50%)",
                        left: "50%",
                        top: "-20px",
                        backgroundColor: "#006494",
                        color: "#fff",
                        padding: "0 20px",
                        zIndex: "999",
                      }}
                    >
                      RECOMMENDED
                    </Box>
                    <Typography
                      align="center"
                      gutterBottom
                      sx={{ fontSize: "1.2rem" }}
                    >
                      Advanced
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "2rem" }}>
                      CA$29.99
                    </Typography>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                      per user per month billed annually
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 3,
                      }}
                    >
                      <Button
                        sx={{
                          backgroundColor: "#f46f52",
                          color: "#fff",
                          padding: 1.5,
                          ":hover": {
                            backgroundColor: "#0f2b46",
                          },
                        }}
                      >
                        Try for free
                      </Button>
                    </Box>
                  </Box>
                </TableCell>

                <TableCell>
                  <Box>
                    <Typography
                      align="center"
                      gutterBottom
                      sx={{ fontSize: "1.2rem" }}
                    >
                      Ultimate
                    </Typography>
                    <Typography align="center" sx={{ fontSize: "2rem" }}>
                      CA$29.99
                    </Typography>
                    <Typography align="center" variant="subtitle2" gutterBottom>
                      per user per month billed annually
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 3,
                      }}
                    >
                      <Button variant="outlined" sx={{ padding: 1.5 }}>
                        Try for free
                      </Button>
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
