import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShortFooter from "../components/ShortFooter";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import Page from "../components/Page";
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

const General = () => {
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
      <Page>
        <ToastContainer />
        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: "grey" }}
            fontWeight={700}
          >
            Change your private information
          </Typography>

          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={submitHandler}>
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
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant={"subtitle2"}
                      sx={{ marginBottom: 2, color: "white" }}
                      fontWeight={700}
                    >
                      Name
                    </Typography>
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant={"subtitle2"}
                      sx={{ marginBottom: 2, color: "white" }}
                      fontWeight={700}
                    >
                      Email
                    </Typography>
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      variant="outlined"
                      placeholder="Enter email"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant={"subtitle2"}
                      sx={{ marginBottom: 2, color: "white" }}
                      fontWeight={700}
                    >
                      Password
                    </Typography>
                    <TextField
                      sx={{ backgroundColor: "white" }}
                      variant="outlined"
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Typography
                      variant={"subtitle2"}
                      sx={{ marginBottom: 2, color: "white" }}
                      fontWeight={700}
                    >
                      Confirm Password
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      sx={{ backgroundColor: "white" }}
                      type="password"
                      placeholder="Enter confirm password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Grid>
                  {user.isSeller && (
                    <>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant={"subtitle2"}
                          sx={{ marginBottom: 2, color: "white" }}
                          fontWeight={700}
                        >
                          Seller Name
                        </Typography>
                        <TextField
                          placeholder="Enter Seller Name"
                          sx={{ backgroundColor: "white" }}
                          value={sellerName}
                          onChange={(e) => setSellerName(e.target.value)}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography
                          variant={"subtitle2"}
                          sx={{ marginBottom: 2, color: "white" }}
                          fontWeight={700}
                        >
                          Seller Logo
                        </Typography>
                        <TextField
                          placeholder="Enter Seller Logo"
                          value={sellerLogo}
                          sx={{ backgroundColor: "white" }}
                          onChange={(e) => setSellerLogo(e.target.value)}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant={"subtitle2"}
                          sx={{ marginBottom: 2, color: "white" }}
                          fontWeight={700}
                        >
                          Seller Description
                        </Typography>
                        <TextField
                          placeholder="Enter Seller Description"
                          value={sellerDescription}
                          sx={{ backgroundColor: "white" }}
                          onChange={(e) => setSellerDescription(e.target.value)}
                          fullWidth
                        />
                      </Grid>
                    </>
                  )}
                  <Grid item container xs={12}>
                    <Box
                      display="flex"
                      flexDirection={{ xs: "column", sm: "row" }}
                      alignItems={{ xs: "stretched", sm: "center" }}
                      justifyContent={"space-between"}
                      width={1}
                      margin={"0 auto"}
                    >
                      <Button
                        style={{ backgroundColor: "#46a4da", color: "white" }}
                        size={"large"}
                        variant={"contained"}
                        onClick={handleOpen}
                      >
                        Save
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Confirm Changes
                    </Typography>
                    <Typography
                      id="modal-modal-description"
                      sx={{ mt: 2, color: "black" }}
                    >
                      You are about to Update/Change your account information
                    </Typography>
                    <Button
                      variant="contained"
                      size="lg"
                      style={{
                        marginBottom: 20,
                        backgroundColor: "#46a4da",
                        color: "white",
                      }}
                      onClick={submitHandler}
                    >
                      Update
                    </Button>
                  </Box>
                </Modal>
              </>
            )}
          </form>
        </Box>
      </Page>
      <ShortFooter />
    </div>
  );
};

export default General;
