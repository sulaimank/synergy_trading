/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "@mui/material/styles";
import { colors } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const CaseStudy1 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      style={{ backgroundColor: "#45A2D9" }}
      data-aos={"fade-up"}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: "column-reverse", md: "row" }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              xs={12}
              sx={{
                "& .lazy-load-image-background.lazy-load-image-loaded": {
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={
                  "https://images.pexels.com/photos/6120182/pexels-photo-6120182.jpeg?cs=srgb&dl=pexels-nataliya-vaitkevich-6120182.jpg&fm=jpg"
                }
                alt="..."
                effect="blur"
                borderRadius={2}
                maxWidth={1}
                maxHeight={400}
                sx={{
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant={"h6"}
                fontWeight={700}
                gutterBottom
                style={{ color: "white" }}
              >
                Lifetime guarantee
              </Typography>
              <Typography style={{ color: "white" }} component={"p"}>
                If your Goby’s performance is anything less than perfect, we’ll
                replace it free of charge.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant={"h6"}
                style={{ color: "white" }}
                fontWeight={700}
                gutterBottom
              >
                Moder design
              </Typography>
              <Typography style={{ color: "white" }} component={"p"}>
                Righty, lefty, dainty or robust—the soft-touch Goby handle is
                made for every hand.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={{ xs: "flex-start", md: "space-between" }}
            height={1}
          >
            <Box>
              <Typography
                variant={"h4"}
                style={{ color: "white" }}
                fontWeight={700}
                gutterBottom
              >
                Goby
              </Typography>
              <Typography style={{ color: "white" }}>
                The affordable electric toothbrush designed to elevate your
                daily routine. Take the Goby for a spin. Free shipping.
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={
                    "https://assets.maccarianagency.com/svg/logos/paypal-original.svg"
                  }
                  alt="..."
                  maxWidth={80}
                  marginBottom={2}
                  sx={{
                    filter:
                      theme.palette.mode === "dark"
                        ? "brightness(0) invert(0.7)"
                        : "none",
                  }}
                />
                <Typography component={"p"}>
                  First class templates. These guys know what they're doing:
                  great code quality, clear naming conventions and clear code
                  structure. Plain awesome and a pleasure to work with.
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudy1;
