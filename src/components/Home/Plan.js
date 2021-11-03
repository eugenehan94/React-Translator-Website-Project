import React from "react";
/*React component imports*/
import { useGlobalContext } from "../context";
import PlanIndividual from "./PlanIndividual";
import PlanDeveloper from "./PlanDeveloper";
/*Material UI imports */
import { Typography, Box, Button } from "@mui/material";

const Plan = () => {
  const { select, setSelect } = useGlobalContext();
  return (
    <Box sx={{ paddingTop: 5 }}>
      <Typography align="center" sx={{ fontSize: "2.5rem", marginBottom: 3 }}>
        Find your perfect plan
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Button
          onClick={() => setSelect("individual")}
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #fff",
            padding: "1.5rem 5rem",
            marginRight: { md: 2, xs: 0 },
            letterSpacing: "2px",
            marginBottom: `${select === "developer" ? "1rem" : "0"}`,
            ":hover": {
              border: `${
                select === "developer" ? "1px solid black" : "1px solid #fff"
              }`,
              backgroundColor: "#fff",
            },
          }}
        >
          For individuals
        </Button>
        <Button
          onClick={() => setSelect("developer")}
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #fff",
            padding: "1.5rem 5rem",
            letterSpacing: "2px",
            marginBottom: `${select === "individual" ? "1rem" : "0"}`,
            ":hover": {
              border: `${
                select === "individual" ? "1px solid black" : "1px solid #fff"
              }`,
              backgroundColor: "#fff",
            },
          }}
        >
          For developers
        </Button>
      </Box>
      <Box sx={{ backgroundColor: "#fff", paddingTop: 10 }}>
        {select === "individual" ? <PlanIndividual /> : <PlanDeveloper />}
      </Box>
      <Box sx={{ backgroundColor: "#fff", padding: "3rem 0" }}>
        <Typography align="center">* A fair usage policy applies</Typography>
        <Typography align="center">
          Have questions? Check out our Help Center.
        </Typography>
        <Typography align="center">
          Contact our Sales Team for special options
        </Typography>
        <Typography align="center">Get in touch now</Typography>
      </Box>
    </Box>
  );
};

export default Plan;
