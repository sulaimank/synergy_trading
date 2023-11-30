import React from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Grid, Paper, Chip } from "@mui/material";
import { Container } from "@mui/material";
import Person_Coursel from "../components/Person_Coursel";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import dancer from "../Image/dancer.mp4";
import { Route, useHistory, Link } from "react-router-dom";
import Pricing from "../components/Pricing";
function Product1() {
  return (
    <Container style={{ paddingTop: 20 }}>
      <Grid container>
        <Grid item md={6}>
          <Typography variant="h2">James</Typography>

          <Chip
            color="primary"
            style={{ marginRight: 10, marginBottom: 20 }}
            label="Routine"
          />

          <Chip
            color="primary"
            style={{ marginRight: 10, marginBottom: 20 }}
            label="United States"
          />
          <Chip
            color="primary"
            style={{ marginRight: 10, marginBottom: 20 }}
            label="2022-02-19"
          />

          <video width="500" controls>
            <source src={dancer} type="video/mp4" />
          </video>
        </Grid>

        <Grid item md={6}>
          {" "}
          <Pricing />
          <Link to={"/"}>
            <Button variant="dark" style={{ marginTop: 20 }}>
              Back
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Product1;
