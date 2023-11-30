import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Grid, Paper } from "@mui/material";

import Card from "@mui/material/Card";
import { CardActions, Container } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";
import dancer from "../Image/dancer.png";
import Test from "../Image/test1.png";
import Connect from "../Image/1.png";
import Dancers from "../Image/2.png";
import Phone from "../Image/3.png";
import Email from "../Image/Email.png";

import { motion } from "framer-motion";
import InView, { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";

function Contain1() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const { t, i18n } = useTranslation();
  const history = useNavigate();

  useEffect(() => {
    console.log("use effect hook,inView=", inView);
    if (inView) {
      animation.start({
        x: 0,
        transform: {
          type: "spring",
          duration: 5,
          bounce: 3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView]);

  return (
    <Container ref={ref} style={{ paddingTop: 50 }}>
      <Grid container>
        <Grid item md={6}>
          <Typography variant="h1" component="h4" style={{ paddingRight: 40 }}>
            {t("greeting")}
          </Typography>
          <Typography variant="h4" component="h2">
            {t("second-tag")}
          </Typography>
          <Typography color="text.secondary" variant="h6" component="h2">
            {t("description")}
          </Typography>
          <InputGroup className="mt-5" size="lg">
            <Link to="/home">
              <Button variant="dark">{t("sign-up")}</Button>
            </Link>
          </InputGroup>
          <Typography color="text.secondary" variant="h6">
            {t("email-details")}
          </Typography>
        </Grid>

        <Grid item md={6}>
          <motion.div animate={animation}>
            <img src={dancer} style={{ width: 600 }} />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contain1;
