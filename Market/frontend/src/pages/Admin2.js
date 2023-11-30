import React from "react";
import { styled } from "@mui/material/styles";
import "../App.css";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  ref,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import AdminIm from "../Image/Admin.png";
import {
  CardActions,
  Box,
  Link,
  Divider,
  CardContent,
  Modal,
  TextField,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Adminhome from "../Image/adminhome.png";

import CardMedia from "@mui/material/CardMedia";
import ModalComp from "../components/ModalComp";
import { db } from "../firebase";
import { async } from "@firebase/util";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Card,
  FloatingLabel,
  Button,
  Col,
  Row,
} from "react-bootstrap";
function Admin2() {
  //setting the new name
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPer, setNewPerf] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newRorP, setNewRorP] = useState("");
  const [newAudience, setNewAudience] = useState(0);
  const [newInstagram, setNewInstagram] = useState("");
  const [newTick, setNewTick] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [user, setUser] = useState({});
  const [cards, setCards] = useState([]);
  const cardsRef = collection(db, "cardcollection");
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/home");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#F8EDD3",
      color: "#BDA56E",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      audienceCount: newAudience,
      date: newDate,
      location: newLocation,
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
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${Adminhome})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: "none" }} src={Adminhome} />}
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
              <Button
                variant="light"
                onClick={logout}
                style={{
                  alignItems: "center",
                  marginTop: 15,
                  marginBottom: 20,
                }}
              >
                Logout
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Button
        variant="dark"
        style={{ alignItems: "center", marginTop: 15, marginBottom: 20 }}
        onClick={handleOpen}
      >
        Add a listing
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" gutterBottom component="div">
            Add Your Listing
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                helperText=""
                id="demo-helper-text-aligned"
                label="Name"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                helperText=" "
                id="demo-helper-text-aligned-no-helper"
                label="Email"
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              />
            </Grid>
          </Grid>
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Performance Duration"
            style={{ marginRight: 20 }}
            onChange={(event) => {
              setNewPerf(event.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Performance Price"
            onChange={(event) => {
              setNewPrice(event.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Performance Description"
            style={{ marginRight: 20 }}
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Image URL"
            onChange={(event) => {
              setNewImage(event.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Instagram URL"
            style={{ marginRight: 20 }}
            onChange={(event) => {
              setNewInstagram(event.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Tick Tock URL"
            onChange={(event) => {
              setNewTick(event.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Routine of Performance"
            style={{ marginRight: 20 }}
            onChange={(event) => {
              setNewRorP(event.target.value);
            }}
          />
          <TextField
            helperText=" "
            id="demo-helper-text-aligned-no-helper"
            label="Audience Number"
            style={{ marginRight: 20 }}
            onChange={(event) => {
              setNewAudience(event.target.value);
            }}
          />
          <TextField
            type="date"
            id="outlined-number"
            label="Date Available"
            style={{ marginRight: 20 }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              setNewDate(event.target.value);
            }}
          />
          <TextField
            id="outlined-number"
            label="Your Location"
            style={{ marginRight: 20 }}
            onChange={(event) => {
              setNewLocation(event.target.value);
            }}
          />
          <Button
            style={{ marginTop: 10 }}
            onClick={createCard}
            variant="success"
          >
            Add Listing
          </Button>
        </Box>
      </Modal>
      {/*Form*/}

      <TableContainer component={Paper} style={{ marginBottom: 24 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Type</StyledTableCell>
              <StyledTableCell align="left">Date</StyledTableCell>
              <StyledTableCell align="left">Location</StyledTableCell>
              <StyledTableCell align=""></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map((card) => (
              <StyledTableRow key={card.name}>
                <StyledTableCell component="th" scope="row">
                  {card.name}
                </StyledTableCell>
                <StyledTableCell align="right">{card.price}</StyledTableCell>
                <StyledTableCell align="left">
                  {" "}
                  {card.description}
                </StyledTableCell>
                <StyledTableCell align="right"> {card.email}</StyledTableCell>
                <StyledTableCell align="right"> {card.type}</StyledTableCell>
                <StyledTableCell align="right"> {card.date}</StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  {card.location}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {" "}
                  <Button
                    onClick={() => {
                      deleteUser(card.id);
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Admin2;
