import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  ref,
} from "firebase/firestore";

import AdminIm from "../Image/Admin.png";
import {
  CardActions,
  Paper,
  Box,
  Link,
  Divider,
  CardContent,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import CardMedia from "@mui/material/CardMedia";
import ModalComp from "../components/ModalComp";
import { db } from "../firebase";
import { async } from "@firebase/util";
import {
  Container,
  Form,
  Card,
  FloatingLabel,
  Button,
  Col,
  Row,
} from "react-bootstrap";
function Admin() {
  // this is the function for holding images
  const onFileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = db.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("Uploaded file", file.name);
    });
  };
  //setting the new name
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPer, setNewPerf] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newRorP, setNewRorP] = useState("");
  const [newInstagram, setNewInstagram] = useState("");
  const [newTick, setNewTick] = useState("");

  const [cards, setCards] = useState([]);
  const cardsRef = collection(db, "cardcollection");

  //creating a card
  const createCard = async () => {
    await addDoc(cardsRef, {
      name: newName,
      email: newEmail,
      Perfromance: newPer,
      price: newPrice,
      description: newDescription,
      image: newImage,
      type: newRorP,
      instagram: newInstagram,
      ticktock: newTick,
    });
    window.location.reload();
  };
  //deleting the user
  const deleteUser = async (id) => {
    const userDoc = doc(db, "cardcollection", id);
    await deleteDoc(userDoc);
    window.location.reload();
  };
  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(cardsRef);
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCards();
  }, []);
  return (
    <Container style={{ marginTop: 50 }}>
      {/*Form*/}
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${AdminIm})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={AdminIm} />}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        />

        {/* Container is here*/}
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
                Add Your Services
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Connect to customers
              </Typography>
              <Link variant="subtitle1" href="#"></Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* Container is here*/}

      {/* Mapping here */}

      {/* This is where the mappip*/}
      <Grid container spacing={4} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          style={{ paddingLeft: 0, paddingRight: 50 }}
        >
          <Card
            style={{
              width: "25rem",
              marginBottom: 50,
              marginRight: 50,
              alignItems: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Add Performance Posting Here</Card.Title>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              >
                <Form.Control
                  style={{ width: 370, alignItems: "center" }}
                  type="Dance Genre"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
                style={{ width: 370 }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Performance Duration"
                className="mb-3"
                style={{ width: 370 }}
                onChange={(event) => {
                  setNewPerf(event.target.value);
                }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Description"
                className="mb-3"
                style={{ width: 370 }}
                onChange={(event) => {
                  setNewDescription(event.target.value);
                }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Price"
                className="mb-3"
                onChange={(event) => {
                  setNewPrice(event.target.value);
                }}
                style={{ width: 370 }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Image URL"
                className="mb-3"
                onChange={(event) => {
                  setNewImage(event.target.value);
                }}
                style={{ width: 370 }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Performance or Routine "
                className="mb-3"
                onChange={(event) => {
                  setNewRorP(event.target.value);
                }}
                style={{ width: 370 }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Instagram URL"
                className="mb-3"
                onChange={(event) => {
                  setNewInstagram(event.target.value);
                }}
                style={{ width: 370 }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Tick-Tock URL "
                className="mb-3"
                onChange={(event) => {
                  setNewTick(event.target.value);
                }}
                style={{ width: 370 }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <Button onClick={createCard} variant="primary" size="md" active>
                Add Posting Here
              </Button>{" "}
            </Card.Body>
          </Card>
        </Grid>
        {cards.map((card) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
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
                          <span>Starting At :${card.price}</span>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                      {card.description}
                    </Typography>
                  </Box>

                  <Button
                    onClick={() => {
                      deleteUser(card.id);
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Admin;
