import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Grid, Paper } from "@mui/material";
import CountUp from "react-countup";
import Card from "@mui/material/Card";
import { CardActions, Container } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../App.css";
import dancer from "../Image/dancer.png";
import Test from "../Image/test1.png";
import Connect from "../Image/1.png";
import Dancers from "../Image/2.png";
import Phone from "../Image/3.png";
import Email from "../Image/Email.png";
import { useNavigate } from "react-router-dom";

function Subscribing() {
  const history = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    history("/");
  }
  return (
    <div>
      <Container style={{ alignItems: "center", paddingTop: 50 }}>
        <Grid container>
          <Grid item md={6}>
            <Typography
              variant="h4"
              style={{ paddingRight: 40, paddingTop: 140 }}
            >
              Thank you for subscribing
            </Typography>

            <Typography color="text.secondary" variant="h6" component="h2">
              Your email has been added to our mailing list and you will be
              update when any new announcements are made.
            </Typography>
            <Button
              onClick={handleSubmit}
              variant="dark"
              style={{ marginTop: 20 }}
            >
              Back to Home
            </Button>
          </Grid>

          <Grid item md={6}>
            <img src={Email} style={{ width: 600 }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Subscribing;
