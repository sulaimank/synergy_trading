import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Paper, TextField } from "../../node_modules/@mui/material/index";
import { detailsUser, updateUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import ShortFooter from "../components/ShortFooter";
import { Checkbox } from "../../node_modules/@mui/material/index";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import MessageBox from "../components/MessageBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Page from "../components/Page";

const ProfileEditScreenNew = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id: userId } = params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSeller, setIsSeller] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/userlist");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsSeller(user.isSeller);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, navigate, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, isSeller, isAdmin }));
  };
  return (
    <div>
      <Page>
        <ToastContainer />
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Change your private information for {name}
          </Typography>
          <Typography variant={"subtitle2"} color={"text.secondary"}>
            Please read our{" "}
            <Link color={"primary"} href={"/company-terms"} underline={"none"}>
              terms of use
            </Link>{" "}
            to be informed how we manage your private data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form className="form" onSubmit={submitHandler}>
            <div>
              {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
            </div>
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <>
                <div>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant={"subtitle2"}
                        sx={{ marginBottom: 2 }}
                        fontWeight={700}
                      >
                        Name
                      </Typography>
                      <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant={"subtitle2"}
                        sx={{ marginBottom: 2 }}
                        fontWeight={700}
                      >
                        Email
                      </Typography>
                      <TextField
                        label="Email *"
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
                        sx={{ marginBottom: 2 }}
                        fontWeight={700}
                      >
                        Is Seller
                      </Typography>
                      <Checkbox
                        label="Password"
                        variant="outlined"
                        type="checkbox"
                        checked={isSeller}
                        onChange={(e) => setIsSeller(e.target.checked)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        variant={"subtitle2"}
                        sx={{ marginBottom: 2 }}
                        fontWeight={700}
                      >
                        Is Admin
                      </Typography>
                      <Checkbox
                        label="Password"
                        variant="outlined"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </div>
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
                      size={"large"}
                      type="submit"
                      variant={"contained"}
                      style={{ backgroundColor: "#26ab62" }}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </>
            )}
          </form>
        </Box>
      </Page>
      <ShortFooter />
    </div>
  );
};

export default ProfileEditScreenNew;
