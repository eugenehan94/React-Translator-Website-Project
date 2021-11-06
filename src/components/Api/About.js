import React from "react";

/*Material ui import*/
import { Box, Container, Grid, Typography } from "@mui/material";

import CodeIcon from "@mui/icons-material/Code";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import WineBarIcon from "@mui/icons-material/WineBar";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const About = () => {
  return (
    <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>
      <Container>
        <Typography align="center" variant="h4" sx={{ marginBottom: 5 }}>
          Everything you need for translation in one place
        </Typography>

        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CodeIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  Handling XML
                </Typography>
              </Box>
              <Typography>
                Simply translate text that contains XML markup. For more
                information, check out our API documentation.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FindInPageIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  API documentation
                </Typography>
              </Box>
              <Typography>
                Access our API documentation at any time to learn more about how
                the API works.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MenuBookIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />

                <Typography sx={{ fontWeight: "bold" }}>
                  Glossary{" "}
                  <span
                    style={{
                      backgroundColor: "#037171",
                      color: "#fff",
                      padding: "0.4rem",
                      borderRadius: "10px",
                    }}
                  >
                    Pro
                  </span>
                </Typography>
              </Box>
              <Typography>
                Specify how words and phrases are translated by creating your
                own Glossary.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BusinessCenterIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>Formality</Typography>
              </Box>
              <Typography>
                Choose the tone of your translations for languages with
                formal/informal pronouns.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ChatBubbleIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  Language detection
                </Typography>
              </Box>
              <Typography>
                Benefit from DeepL API’s language detection, which automatically
                detects unknown source languages.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <VideogameAssetIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  Monthly cost control{" "}
                  <span
                    style={{
                      backgroundColor: "#037171",
                      color: "#fff",
                      padding: "0.4rem",
                      borderRadius: "10px",
                    }}
                  >
                    Pro
                  </span>
                </Typography>
              </Box>
              <Typography>
                Easily limit your maximum monthly usage-based costs with monthly
                cost control.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <WineBarIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  Best-in-class quality
                </Typography>
              </Box>
              <Typography>
                Build your products and applications with DeepL’s unbeatable
                translation accuracy and quality.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <DescriptionIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  Document translation
                </Typography>
              </Box>
              <Typography>
                Translate entire Word (.docx), PowerPoint (.pptx), text (.txt),
                and HTML (.html) files.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EnhancedEncryptionIcon
                  sx={{ fontSize: "3rem", marginRight: 1, color: "#037171" }}
                />
                <Typography sx={{ fontWeight: "bold" }}>
                  Advanced data security{" "}
                  <span
                    style={{
                      backgroundColor: "#037171",
                      color: "#fff",
                      padding: "0.4rem",
                      borderRadius: "10px",
                    }}
                  >
                    Pro
                  </span>
                </Typography>
              </Box>
              <Typography>
                Enjoy world-leading data protection standards and deletion of
                your texts immediately after translation.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
