import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Axios from "axios";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FireExtinguisher } from "../../node_modules/@mui/icons-material/index";
import axios from "../../node_modules/axios/index";
function ResetPassword() {
  const theme = createTheme();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const reset = (e) => {
    e.preventDefault();
    axios
      .post("api/forgot-password", {
        email: email,
      })
      .then((res) => {
        toast.info(res.data.message);
        console.log(res.data.message);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Container component="main" maxWidth="xs" style={{ height: "80vh" }}>
        <Paper
          style={{
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 10,
            marginBottom: 30,
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#26c766" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reset password
            </Typography>
            <Box component="form" onSubmit={reset} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Email"
                    label="Email"
                    type="Enter Email"
                    id="Email"
                    placeholder="Enter confirm password"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#26c766" }}
                sx={{ mt: 3, mb: 2 }}
              >
                Send Reset Email
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item></Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default ResetPassword;
