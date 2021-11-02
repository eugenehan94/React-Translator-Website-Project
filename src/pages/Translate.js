import React from "react";
/*React component imports */
import Navbar from "../components/Navbar";
import { useGlobalContext } from "../components/context";
/*Material UI import */
import {
  TextField,
  NativeSelect,
  Button,
  Container,
  Typography,
  Box,
} from "@mui/material";

const Translate = () => {
  const {
    languagesList,
    loading,
    setInputText,
    languageKey,
    translateText,
    resultText,
  } = useGlobalContext();

  return (
    <Box
      sx={{
        backgroundColor: "#FFE5B4",
        paddingBottom: 3,
      }}
    >
      <Navbar />
      <Container>
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: { sm: "8rem", xs: "3rem" }, marginTop: 2 }}
        >
          Translate
        </Typography>
        <Box>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            onChange={(e) => setInputText(e.target.value)}
            fullWidth
            sx={{
              marginTop: 2,
              marginBottom: 4,
              fontSize: 10,
            }}
            placeholder="Please enter your text to translate here"
          />
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}
        >
          {loading === true ? (
            "loading"
          ) : (
            <NativeSelect
              onChange={languageKey}
              sx={{ fontSize: { md: "1.5rem", sm: "1rem" } }}
            >
              {languagesList.map((language, id) => {
                return <option key={id}>{language.name}</option>;
              })}
            </NativeSelect>
          )}
        </Box>
        <Box>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            value={resultText}
            fullWidth
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Button
            type="submit"
            onClick={translateText}
            variant="contained"
            size="large"
          >
            Translate
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Translate;
