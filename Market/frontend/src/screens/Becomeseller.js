import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import FormControlLabel from "@mui/material/FormControlLabel";
import ShortFooter from "../components/ShortFooter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import Checkbox from "@mui/material/Checkbox";
import SellIcon from "@mui/icons-material/Sell";
import { Alert } from "../../node_modules/react-bootstrap/esm/index";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

import { createTheme, ThemeProvider } from "@mui/material/styles";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning">
        <Alert.Heading>Seller Details</Alert.Heading>
        <p>
          Community Guidelines are the rules of the road for how to behave on
          MarketPlace. If your content violates our Community Guidelines, your
          account will be issued a strike.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            <CloseIcon />
          </Button>
        </div>
      </Alert>
    </>
  );
}

const theme = createTheme();

export default function Becomeseller() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerLogo, setSellerLogo] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      if (user.seller) {
        setSellerName(userInfo.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/productlist/seller`);
    // dispatch update profile
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password Are Not Matched");
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          password,
          sellerName,
          sellerLogo,
          sellerDescription,
        })
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AlertDismissible />
      <ToastContainer />
      <Container component="main" maxWidth="xs" style={{ minHeight: "100vh" }}>
        <Paper
          style={{
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom: 10,
            marginBottom: 120,
          }}
        >
          <CssBaseline />
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Profile Updated Successfully
                </MessageBox>
              )}
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "#00a152" }}>
                  <SellIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Become a seller
                </Typography>
                <form onSubmit={submitHandler}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        value={sellerLogo}
                        label="Seller Logo"
                        placeholder="Enter Logo URL"
                        onChange={(e) => setSellerLogo(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Seller Description"
                        type="Seller Description"
                        id="confirmPassword"
                        value={sellerDescription}
                        placeholder="Enter Seller Description"
                        onChange={(e) => setSellerDescription(e.target.value)}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Confirm Details
                  </Button>
                  <Grid container justifyContent="flex-end">
                    <Grid item></Grid>
                  </Grid>
                </form>
              </Box>
            </>
          )}
        </Paper>
      </Container>
      <ShortFooter />
    </ThemeProvider>
  );
}
