import React from "react";
/*React component imports*/
import { useGlobalContext } from "../context";
import PlanIndividual from "./PlanIndividual";
import PlanDeveloper from "./PlanDeveloper";
/*Material UI imports */
import { Typography, Box, Container, Button } from "@mui/material";

const Plan = () => {
  const { select, setSelect } = useGlobalContext();
  return (
    <div>
      <Box>
        <Typography align="center">Find your perfect plan</Typography>
        <Box>
          <Button onClick={() => setSelect("individual")}>
            For individuals
          </Button>
          <Button onClick={() => setSelect("developer")}>For developers</Button>
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
    </div>
  );
};

export default Plan;
