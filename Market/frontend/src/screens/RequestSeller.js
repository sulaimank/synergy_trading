import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import ShortFooter from "../components/ShortFooter";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import emailjs from "emailjs-com";
import { LazyLoadImage } from "react-lazy-load-image-component";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Container from "./Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Dance Market
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function RequestScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [link, setLink] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [sellerDes, setSellerDis] = useState("");
  const [style, setStyle] = useState("");
  const [error, setError] = useState([]);
  const [find, findError] = useState("");
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo, loading } = userSignin;

  const sellerApplication = (e) => {
    e.preventDefault();
    axios
      .post("/api/application", {
        userID: userInfo._id,
        fullName: userInfo.name,
        firstName: firstName,
        lastName: lastName,
        email: userInfo.email,
        link: link,
        style: style,
      })
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        if (err) {
          toast.error(
            "You have already submmited application or there is an issue with your details"
          );
        }
      });
    axios
      .put("/api/users/updateSeller", {
        id: userInfo._id,
        sellerName: displayName,
        sellerDescription: sellerDes,
      })
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        if (err) {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        toastStyle={{ backgroundColor: "#1F263B" }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        fontWeight: "medium",
                      }}
                      gutterBottom
                      color={"text.secondary"}
                    >
                      Request to be a Seller
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                      }}
                    >
                      Submit an application today
                    </Typography>
                  </Box>
                  <form onSubmit={sellerApplication}>
                    <Grid container spacing={4}>
                      <Grid item xs={12}>
                        <Typography
                          variant={"subtitle2"}
                          sx={{ marginBottom: 2, color: "white" }}
                        >
                          Enter your First Name
                        </Typography>
                        <TextField
                          label="First Name"
                          variant="outlined"
                          name={"First Name"}
                          sx={{ backgroundColor: "white" }}
                          onChange={(e) => setFirstName(e.target.value)}
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
                              sx={{ color: "white" }}
                            >
                              Enter your Last Name
                            </Typography>
                          </Box>
                          <Typography variant={"subtitle2"}></Typography>
                        </Box>
                        <TextField
                          label="Last Name"
                          variant="outlined"
                          name={"Last Name"}
                          sx={{ backgroundColor: "white" }}
                          fullWidth
                          onChange={(e) => setLastName(e.target.value)}
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
                              Enter the Seller Name you want to be displayed *
                            </Typography>
                          </Box>
                          <Typography variant={"subtitle2"}></Typography>
                        </Box>
                        <TextField
                          sx={{ backgroundColor: "white" }}
                          label="Seller Name "
                          variant="outlined"
                          fullWidth
                          onChange={(e) => setDisplayName(e.target.value)}
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
                              Enter the seller Description*
                            </Typography>
                          </Box>
                          <Typography variant={"subtitle2"}></Typography>
                        </Box>
                        <TextField
                          style={{ backgroundColor: "white" }}
                          label="Seller Description "
                          variant="outlined"
                          name={"Style "}
                          fullWidth
                          onChange={(e) => setSellerDis(e.target.value)}
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
                          <Button
                            size={"large"}
                            variant={"contained"}
                            type={"submit"}
                          >
                            Apply
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
                          "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    </div>
  );
}
