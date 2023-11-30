import * as React from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import FeaturedPost from "../components/FeaturedPost";
import Test from "../Image/test1.png";
import Icons from "../components/Iocns";
import "../App.css";
import Context from "../context/Context";

function RealHome() {
  return (
    <div className="App">
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${Test})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={Test} />}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Streamlining Performance Booking
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                All your needs in one place
              </Typography>
              <Link variant="subtitle1" href="#"></Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <FeaturedPost />

      <Icons />
    </div>
  );
}

export default RealHome;
