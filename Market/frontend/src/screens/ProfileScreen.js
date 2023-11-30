import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { Form } from "../../node_modules/react-bootstrap/esm/index";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShortFooter from "../components/ShortFooter";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { TextField } from "../../node_modules/@mui/material/index";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [sellerLogo, setSellerLogo] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        setSellerName(user.seller.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
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
    <div>
      <ToastContainer />
      <Container style={{ minHeight: "100vh" }}>
        <form className="form" onSubmit={submitHandler}>
          <Paper style={{ paddingLeft: 10 }}>
            <div>
              <h1>User Profile</h1>
            </div>
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
                <div style={{ marginBottom: 20 }}>
                  <label style={{ marginRight: 10 }} htmlFor="name">
                    Name
                  </label>
                  <TextField
                    variant="filled"
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ marginRight: 12 }} htmlFor="email">
                    Email
                  </label>
                  <TextField
                    variant="filled"
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ marginRight: 12 }} htmlFor="password">
                    Password
                  </label>
                  <TextField
                    variant="filled"
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label style={{ marginRight: 12 }} htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <TextField
                    variant="filled"
                    id="confirmPassword"
                    type="password"
                    placeholder="Enter confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {user.isSeller && (
                  <>
                    <h2>Seller Information</h2>
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ marginRight: 12 }} htmlFor="sellerName">
                        Seller Name
                      </label>
                      <TextField
                        variant="filled"
                        id="sellerName"
                        type="text"
                        placeholder="Enter Seller Name"
                        value={sellerName}
                        onChange={(e) => setSellerName(e.target.value)}
                      />
                    </div>
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ marginRight: 12 }} htmlFor="sellerLogo">
                        Seller Logo
                      </label>
                      <TextField
                        variant="filled"
                        id="sellerLogo"
                        type="text"
                        placeholder="Enter Seller Logo"
                        value={sellerLogo}
                        onChange={(e) => setSellerLogo(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        style={{ marginRight: 12 }}
                        htmlFor="sellerDescription"
                      >
                        Seller Description
                      </label>
                      <TextField
                        variant="filled"
                        id="sellerDescription"
                        type="text"
                        placeholder="Enter Seller Description"
                        value={sellerDescription}
                        onChange={(e) => setSellerDescription(e.target.value)}
                      />
                    </div>
                  </>
                )}
                <div>
                  <label />
                  <br />
                  <Button
                    variant="contained"
                    color="success"
                    size="lg"
                    style={{ marginBottom: 20 }}
                    onClick={handleOpen}
                  >
                    Update Information
                  </Button>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} style={{ backgroundColor: "#1F263B" }}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ color: "white" }}
                      >
                        Confirm Changes
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You are about to Update/Change your account information
                      </Typography>
                      <Button
                        variant="contained"
                        size="lg"
                        style={{ marginBottom: 20 }}
                        onClick={submitHandler}
                      >
                        Update
                      </Button>
                    </Box>
                  </Modal>
                </div>
              </>
            )}
          </Paper>
        </form>
      </Container>
      <ShortFooter />
    </div>
  );
}
