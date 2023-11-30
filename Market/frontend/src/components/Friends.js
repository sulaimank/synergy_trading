import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import Card from "@mui/material/Card";
import { CardActions, Container } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import girl from "../Image/girl.png";
import { makeStyles } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "../App.css";
import { useTranslation } from "react-i18next";
import friends from "../Image/friends.png";
import { motion } from "framer-motion";
import InView, { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
function Friends() {
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
          bounce: 2,
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
      <Box
        component="section"
        sx={{
          display: "flex",
          marginTop: 10,
          backgroundColor: "#F8EDD3",
          overflow: "hidden",
        }}
      >
        <Container style={{ paddingTop: 50 }}>
          <Grid container>
            <Grid ref={ref} item md={6}>
              <motion.div animate={animation}>
                <Typography
                  sx={{ fontSize: 25 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {t("tools")}
                </Typography>
                <Typography variant="h2" component="h2">
                  {t("tools-name")}
                </Typography>
                <Typography color="text.secondary" variant="h6" component="h2">
                  {t("tools-description")}
                </Typography>
              </motion.div>
            </Grid>
            <Grid item md={6}>
              <img src={girl} style={{ width: 500 }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Friends;
