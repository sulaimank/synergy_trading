import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActions, Container } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../App.css";
import { useNavigate } from "react-router-dom";
import friends from "../Image/friends.png";
import Test from "../Image/test1.png";
import Connect from "../Image/1.png";
import Dancers from "../Image/2.png";
import Phone from "../Image/3.png";
import { motion } from "framer-motion";
import { inView, useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useEffect } from "react";
function More() {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  const animation = useAnimation();

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
  const { t, i18n } = useTranslation();
  return (
    <div>
      <Container ref={ref} style={{ paddingTop: 50 }}>
        <Grid container>
          <Grid item md={6}>
            <img src={friends} style={{ width: 500 }} />
          </Grid>

          <Grid item md={6}>
            <motion.div animate={animation}>
              <Typography
                sx={{ fontSize: 25 }}
                color="text.secondary"
                gutterBottom
              >
                {t("network")}
              </Typography>
              <Typography variant="h2" component="h2">
                {t("network-title")}
              </Typography>
              <Typography color="text.secondary" variant="h6" component="h2">
                {t("network-text")}
              </Typography>
            </motion.div>
            <Button size="lg" href="/home" variant="warning">
              {t("button")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default More;
