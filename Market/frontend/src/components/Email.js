import * as React from "react";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Form, FloatingLabel, Button, Card } from "react-bootstrap";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  ref,
} from "firebase/firestore";
import { db } from "../firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Email() {
  // need these names
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRequest, setNewRequest] = useState("");
  const [newPreformer, setNewPreformer] = useState(0);
  const [newLocation, setNewLocation] = useState("");
  const [newPrice, setNewPrice] = useState("");

  //need to reset this
  const [cards, setCards] = useState([]);
  const cardsRef = collection(db, "UserRequest");

  // Creating new names in the
  const createCard = async () => {
    await addDoc(cardsRef, {
      Name: newName,
      email: newEmail,
      request: newRequest,
      requestedPreformer: newPreformer,
      location: newLocation,
      price: newPrice,
    });
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
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <Card
            style={{
              width: "25rem",
              marginTop: 50,
              marginBottom: 50,
              alignItems: "center",
            }}
          >
            <Card.Body>
              <Card.Title>Send a Request to a Performer</Card.Title>
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
                label="Request Type"
                className="mb-3"
                style={{ width: 370 }}
                onChange={(event) => {
                  setNewRequest(event.target.value);
                }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Proposed Price"
                className="mb-3"
                style={{ width: 370 }}
                onChange={(event) => {
                  setNewPrice(event.target.value);
                }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Proposed Location"
                className="mb-3"
                style={{ width: 370 }}
                onChange={(event) => {
                  setNewLocation(event.target.value);
                }}
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <Button onClick={createCard} variant="success" size="md" active>
                Email Performer
              </Button>
            </Card.Body>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Email;
