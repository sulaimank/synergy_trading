import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Product from "./Product";
import { Form, FormControl } from "react-bootstrap";
import { Route, useHistory, Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import { CardActions, Button, Paper, Box, Divider, Chip } from "@mui/material";
import Test2 from "../Image/test2.png";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import InstagramIcon from "@mui/icons-material/Instagram";
import ModalComp from "../components/ModalComp";
import PersonModal from "../components/PersonModal";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  ref,
} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Filters } from "./Filters";
import { useTranslation } from "react-i18next";
function Home() {
  const { t, i18n } = useTranslation();
  const [cards, setCards] = useState([]);
  const cardsRef = collection(db, "cardcollection");
  const history = useNavigate();
  //searching component
  const [search, setSearch] = useState("");

  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log(cart);
  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(cardsRef);
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCards();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${Test2})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={Test2} />}
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
                {t("Browse")}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {t("See")}
              </Typography>

              <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                  type="search"
                  variant="Secondary"
                  placeholder={t("Search")}
                  className="me-2"
                  aria-label="Search"
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
              </Form>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4} style={{ paddingLeft: 40, paddingRight: 40 }}>
        {cards
          .filter((card) => {
            if (search == "") {
              return card;
            } else if (card.name.toLowerCase().includes(search.toLowerCase())) {
              return card;
            }
          })
          .map((card) => {
            return (
              <Grid item xs={12} sm={4} md={4}>
                <div>
                  {/*
                   <Link to={"/product/" + card.id + "/" + card.name}>
                    {card.name}
                  </Link>
                  */}
                </div>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Box sx={{ my: 3, mx: 2 }}>
                      <Grid container alignItems="center">
                        <Grid item xs>
                          <Typography gutterBottom variant="h4" component="div">
                            {card.name}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography gutterBottom variant="h6" component="div">
                            <span>
                              Starting At : ${card.price.split(".")[0]}
                            </span>
                          </Typography>
                        </Grid>
                        <Chip label={card.date} />
                        <Chip
                          style={{ marginLeft: 10 }}
                          label={card.location}
                        />
                        <Chip style={{ marginLeft: 10 }} label={card.type} />
                      </Grid>
                      <Typography color="text.secondary" variant="body2">
                        {card.description}
                        <Link to={"/product1"}>more</Link>
                      </Typography>
                    </Box>
                  </CardContent>

                  <CardActions>
                    <PersonModal />
                    <ModalComp>{card.id}</ModalComp>

                    {cart.some((p) => p.id === card.id) ? (
                      <Button
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: card,
                          });
                        }}
                        variant="contained"
                        color="error"
                      >
                        Remove
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          dispatch({
                            type: "ADD_TO_CART",
                            payload: card,
                          });
                        }}
                        variant="contained"
                        color="success"
                      >
                        Add
                      </Button>
                    )}

                    <Button href={card.instagram}>
                      <InstagramIcon />
                    </Button>
                    <Chip
                      avatar={<PeopleIcon />}
                      label={card.audienceCount}
                      color="success"
                      variant="outlined"
                    ></Chip>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default Home;
