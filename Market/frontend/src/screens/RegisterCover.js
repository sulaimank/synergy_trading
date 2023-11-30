import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { register } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ShortFooter from "../components/ShortFooter";
import { useTheme } from "@mui/material/styles";
import Cookies from "js-cookie"; // Import js-cookie
import Box from "@mui/material/Box";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Container from "./Container";
import { Typography } from "../../node_modules/@mui/material/index";
import { ToastContainer, toast } from "react-toastify";
import { Grid } from "../../node_modules/@mui/material/index";

import Button from "@mui/material/Button";
import { TextField } from "../../node_modules/@mui/material/index";
import axios from "../../node_modules/axios/index";
const RegisterCover = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const convertedEmail = email.toLowerCase();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();

  // function  To send

  const registerUser = async () => {
    Cookies.set("firstName", name);
    Cookies.set("email", email);
    /*{ 
    try {
      const res = await axios
        .post("api/users/register", {
          name: name,
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.message);
          navigate("/checkemail");
        });
    } catch (error) {
      toast.error(error);
    }
    }*/
    navigate("/coinMarkets");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and confirm password are not match");
    } else {
      dispatch(registerUser);
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, redirect, userInfo]);
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          position={"relative"}
        >
          <Box
            width={1}
            order={{ xs: 2, md: 1 }}
            display={"flex"}
            alignItems={"center"}
          >
            <Container>
              <Box>
                <Box marginBottom={4}>
                  <ToastContainer />
                  {loading && <LoadingBox></LoadingBox>}
                  {error && <MessageBox variant="danger">{error}</MessageBox>}
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "medium",
                    }}
                    gutterBottom
                    color="white"
                  >
                    Register
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                    }}
                  >
                    Create an Account
                  </Typography>
                </Box>
                <form onSubmit={submitHandler}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Typography
                        variant={"subtitle2"}
                        sx={{ marginBottom: 2, color: "black" }}
                      >
                        Enter your name
                      </Typography>
                      <TextField
                        sx={{
                          input: {
                            color: "black",
                            backgroundColor: "white",
                          },
                        }}
                        label="Name"
                        variant="outlined"
                        name={"Name"}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        alignItems={{ xs: "stretched", sm: "center" }}
                        justifyContent={"space-between"}
                        width={1}
                        marginBottom={2}
                      >
                        <Box marginBottom={{ xs: 1, sm: 0 }}>
                          <Typography
                            variant={"subtitle2"}
                            style={{ color: "white" }}
                          >
                            Enter your email
                          </Typography>
                        </Box>
                        <Typography variant={"subtitle2"}></Typography>
                      </Box>
                      <TextField
                        sx={{
                          input: {
                            color: "black",
                            backgroundColor: "white",
                          },
                        }}
                        label="Email"
                        type="email"
                        variant="outlined"
                        name={"Email"}
                        //type={"password"}
                        fullWidth
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        alignItems={{ xs: "stretched", sm: "center" }}
                        justifyContent={"space-between"}
                        width={1}
                        marginBottom={2}
                      >
                        <Box marginBottom={{ xs: 1, sm: 0 }}>
                          <Typography
                            variant={"subtitle2"}
                            style={{ color: "white" }}
                          >
                            Enter your password
                          </Typography>
                        </Box>
                        <Typography variant={"subtitle2"}></Typography>
                      </Box>
                      <TextField
                        sx={{
                          input: {
                            color: "black",
                            backgroundColor: "white",
                          },
                        }}
                        label="Password"
                        variant="outlined"
                        name={"Password"}
                        type={"password"}
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        alignItems={{ xs: "stretched", sm: "center" }}
                        justifyContent={"space-between"}
                        width={1}
                        marginBottom={2}
                      >
                        <Box marginBottom={{ xs: 1, sm: 0 }}>
                          <Typography
                            variant={"subtitle2"}
                            style={{ color: "white" }}
                          >
                            Confirm your password
                          </Typography>
                        </Box>
                        <Typography variant={"subtitle2"}></Typography>
                      </Box>
                      <TextField
                        sx={{
                          input: {
                            color: "black",
                            backgroundColor: "white",
                          },
                        }}
                        label="Confirm Password"
                        variant="outlined"
                        name={"Confrim Password"}
                        type={"password"}
                        fullWidth
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </Grid>
                    <Grid item container xs={12}>
                      <Box
                        display="flex"
                        flexDirection={{ xs: "column", sm: "row" }}
                        alignItems={{ xs: "stretched", sm: "center" }}
                        justifyContent={"space-between"}
                        width={1}
                        maxWidth={600}
                        margin={"0 auto"}
                      >
                        <Box marginBottom={{ xs: 1, sm: 0 }}>
                          <Typography variant={"subtitle2"}>
                            <Link to="/signin">
                              Already have an account? Login
                            </Link>
                          </Typography>
                          <Typography variant={"subtitle2"}>
                            <Link to="/reset">Forgot Password</Link>
                          </Typography>
                        </Box>
                        <Button
                          size={"large"}
                          variant={"contained"}
                          type={"submit"}
                        >
                          Register
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: "0 0 100%", md: "0 0 50%" },
              position: "relative",
              maxWidth: { xs: "100%", md: "50%" },
              order: { xs: 1, md: 2 },
              minHeight: { xs: "auto", md: "calc(100vh - 58px)" },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: "50vw" },
                height: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    overflow: "hidden",
                    left: "0%",
                    width: 1,
                    height: 1,
                    position: { xs: "relative", md: "absolute" },
                    clipPath: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                    shapeOutside: {
                      xs: "none",
                      md: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: "auto", md: 1 },
                      "& img": {
                        objectFit: "cover",
                      },
                      "& .lazy-load-image-loaded": {
                        height: 1,
                        width: 1,
                      },
                    }}
                  >
                    <Box
                      component={LazyLoadImage}
                      effect="blur"
                      src={
                        "https://images.pexels.com/photos/6771740/pexels-photo-6771740.jpeg?cs=srgb&dl=pexels-alesia-kozik-6771740.jpg&fm=jpg"
                      }
                      height={{ xs: "auto", md: 1 }}
                      maxHeight={{ xs: 300, md: 1 }}
                      width={1}
                      maxWidth={1}
                      sx={{
                        filter:
                          theme.palette.mode === "dark"
                            ? "brightness(0.7)"
                            : "none",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <ShortFooter />
    </Box>
  );
};

export default RegisterCover;
