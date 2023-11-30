import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { MenuItem } from "../../../node_modules/@mui/material/index";
import { InputLabel } from "../../../node_modules/@mui/material/index";
import { TextareaValidator } from "../../components/TextareaValidator";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const MultistepForm = () => {
  const [name, setName] = useState("");
  const [stockType, setStockType] = useState("");
  const [primaryTags, setPrimaryTags] = useState("");
  const [secondaryTags, setSecondaryTags] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [calculatedProfit, setCalculatedProfit] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [pdfUpload, setPdfUpload] = useState("");
  const [streamingDate, setStreamingDate] = useState("");
  const [streamingTime, setStreamingTime] = useState("");
  const [streamingLink, setStreamingLink] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading } = userSignin;
  const [formError, setFormError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState(1);
  function Copyright() {
    return (
      <Typography variant="body2" color="white" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const theme = createTheme();

  const InfoCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#439fd8bc" : " #439fd8bc",
    ...theme.typography.body2,
    textAlign: "center",
    padding: theme.spacing(1),
    height: "500px",
    width: "400px",
    marginRight: "200px",
    color: theme.palette.text.secondary,
  }));

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={1}>
        <Grid item sm={8}>
          <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
            <Paper
              style={{ backgroundColor: "#263042" }}
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography
                color="white"
                component="h1"
                variant="h4"
                align="center"
              >
                Add Product
              </Typography>
              {step === 1 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <InputLabel style={{ color: "white" }}>
                      Service Listing Name
                    </InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to include keywords that buyers would likely use to
                      search for a service like yours.
                    </p>
                    <TextField
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "#23263C",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      color="primary"
                      id="firstName"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel style={{ color: "white" }}>
                      Stock Type
                    </InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to include keywords that buyers would likely use to
                      search for a service like yours.
                    </p>
                    <Select
                      style={{ backgroundColor: "#23263C", color: "white" }}
                      inputProps={{
                        MenuProps: {
                          MenuListProps: {
                            sx: {
                              backgroundColor: "#23263C",
                              color: "white",
                              "& .MuiOutlinedInput-notchedOutline": {
                                backgroundColor: "white",
                              },
                            },
                          },
                        },
                      }}
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "rec",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      value={stockType}
                      onChange={(e) => setStockType(e.target.value)}
                      label="Usage"
                      variant="outlined"
                      fullWidth
                    >
                      <MenuItem value={"Oceania Dance Oceania"}>
                        Technology
                      </MenuItem>
                      <MenuItem value={"European Dance Europa"}>
                        pharmaceutical
                      </MenuItem>
                      <MenuItem value={"Other etc."}>Energy</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel style={{ color: "white" }}>
                      Primary Search Tags
                    </InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to include keywords that buyers would likely use to
                      search for a service like yours.
                    </p>
                    <TextField
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "#23263C",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      color="primary"
                      id="firstName"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                      value={primaryTags}
                      onChange={(e) => setPrimaryTags(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <InputLabel style={{ color: "white" }}>
                      Secondary Search Tags
                    </InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to include keywords that buyers would likely use to
                      search for a service like yours.
                    </p>
                    <TextField
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "#23263C",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      color="primary"
                      id="firstName"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                      value={primaryTags}
                      onChange={(e) => setPrimaryTags(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <InputLabel style={{ color: "white" }}>
                      Product Description
                    </InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to include keywords that buyers would likely use to
                      search for a service like yours.
                    </p>
                    <TextField
                      inputProps={{
                        style: {
                          color: "white",
                          background: "#23263C",
                          with: "100%",
                        },
                      }}
                      sx={{
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      rows={4}
                      multiline
                      style={{ color: "white" }}
                      color="primary"
                      id="firstName"
                      name="firstName"
                      fullWidth
                      autoComplete="given-name"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Grid>
                  <Button
                    variant="contained"
                    onClick={nextStep}
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: "#46A4DA",
                      with: "200px",
                      "&:hover": {
                        backgroundColor: "#67b4e1",
                        transition: "0.2s",
                      },
                    }}
                  >
                    Next
                  </Button>
                </Grid>
              )}
              {step === 2 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <InputLabel style={{ color: "white" }}>Pricing</InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to
                    </p>
                    <TextField
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "#23263C",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      color="primary"
                      id="firstName"
                      name="firstName"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel style={{ color: "white" }}>
                      Your calculated Profit
                    </InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to
                    </p>
                    <TextField
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "#23263C",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      color="primary"
                      id="firstName"
                      name="firstName"
                      fullWidth
                      autoComplete="given-name"
                      variant="outlined"
                      value={calculatedProfit}
                      onChange={(e) => setCalculatedProfit(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel style={{ color: "white" }}>
                      Delivery Method
                    </InputLabel>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to include keywords that buyers would likely use to
                      search for a service like yours.
                    </p>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel style={{ color: "white" }}>
                      Select Delivery Option
                    </InputLabel>
                    <Select
                      style={{ backgroundColor: "#23263C", color: "white" }}
                      inputProps={{
                        MenuProps: {
                          MenuListProps: {
                            sx: {
                              backgroundColor: "#23263C",
                              color: "white",
                              "& .MuiOutlinedInput-notchedOutline": {
                                backgroundColor: "white",
                              },
                            },
                          },
                        },
                      }}
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "rec",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      label="Usage"
                      variant="outlined"
                      value={deliveryMethod}
                      onChange={(e) => setDeliveryMethod(e.target.value)}
                      fullWidth
                    >
                      <MenuItem value={"PDF"}>PDF</MenuItem>
                      <MenuItem value={"Live Stream"}>Live Stream</MenuItem>
                    </Select>
                  </Grid>
                  {deliveryMethod === "PDF" && (
                    <Container style={{ marginTop: "10px" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                          <InputLabel style={{ color: "white" }}>
                            Please Upload you PDF document
                          </InputLabel>
                          <p style={{ color: "#ececec" }}>
                            As your Gig storefront, your title is the most
                            important place to include keywords that buyers
                            would likely use to search for a service like yours.
                          </p>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <input
                            style={{ width: "400px", fontSize: "20px" }}
                            type="file"
                            name="file"
                            onChange={(e) => setPdfUpload(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Container>
                  )}
                  {deliveryMethod === "Live Stream" && (
                    <Container style={{ marginTop: "10px" }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                          <InputLabel style={{ color: "white" }}>
                            Please Select the Date of the Live Stream
                          </InputLabel>
                          <p style={{ color: "#ececec" }}>
                            As your Gig storefront, your title is the most
                            important place to include keywords that buyers
                            would likely use to search for a service like yours.
                          </p>
                          <TextField
                            sx={{
                              input: {
                                color: "white",
                                backgroundColor: "#23263C",
                              },
                              fieldset: { borderColor: "white" },
                            }}
                            id="date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            fullWidth
                            value={streamingDate}
                            onChange={(e) => setStreamingDate(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <InputLabel style={{ color: "white" }}>
                            Please Select the time of the Live Stream
                          </InputLabel>
                          <p style={{ color: "#ececec" }}>
                            As your Gig storefront, your title is the most
                            important place to include keywords that buyers
                            would likely use to search for a service like yours.
                          </p>
                          <TextField
                            sx={{
                              input: {
                                color: "white",
                                backgroundColor: "#23263C",
                              },
                              fieldset: { borderColor: "white" },
                            }}
                            id="time"
                            type="time"
                            defaultValue="07:30"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            inputProps={{
                              step: 300, // 5 min
                            }}
                            fullWidth
                            value={streamingTime}
                            onChange={(e) => setStreamingTime(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <InputLabel style={{ color: "white" }}>
                            Please Enter the link for the
                          </InputLabel>
                          <p style={{ color: "#ececec" }}>
                            As your Gig storefront, your title is the most
                            important place to include keywords that buyers
                            would likely use to search for a service like yours.
                          </p>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <InputLabel style={{ color: "white" }}>
                            Please Enter the link for the
                          </InputLabel>
                          <TextField
                            sx={{
                              input: {
                                color: "white",
                                backgroundColor: "#23263C",
                              },
                              fieldset: { borderColor: "white" },
                            }}
                            required
                            color="primary"
                            id="firstName"
                            name="firstName"
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                            value={streamingLink}
                            onChange={(e) => setStreamingLink(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Container>
                  )}
                  <Button
                    variant="contained"
                    onClick={prevStep}
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: "#46A4DA",
                      with: "200px",
                      "&:hover": {
                        backgroundColor: "#67b4e1",
                        transition: "0.2s",
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={nextStep}
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: "#46A4DA",
                      with: "200px",
                      "&:hover": {
                        backgroundColor: "#67b4e1",
                        transition: "0.2s",
                      },
                    }}
                  >
                    Next
                  </Button>
                </Grid>
              )}
              {step === 3 && (
                <div>
                  <Grid container spacing={-30}>
                    <Grid item md={6}>
                      <img
                        style={{ marginBottom: "15px", height: "200px" }}
                        src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/pexels-roxanne-minnish-7949604-7@2x.png"
                        alt="pexels-roxanne-minnish-7949604 7"
                      />
                    </Grid>
                    <Grid item md={6}>
                      <Accordion
                        disabled
                        style={{ width: "500px", backgroundColor: "#e6e6e6" }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Product Details</Typography>
                        </AccordionSummary>
                      </Accordion>
                      <Grid container spacing={15}>
                        <Grid item md={6}>
                          <InputLabel
                            style={{ color: "white", fontSize: "15px" }}
                          >
                            Service Listing Name
                          </InputLabel>
                          <TextField
                            sx={{
                              input: {
                                color: "white",
                                backgroundColor: "#23263C",
                                height: "3px",
                                width: "150px",
                              },
                              fieldset: { borderColor: "white" },
                            }}
                            required
                            color="primary"
                            id="firstName"
                            autoComplete="given-name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Grid>
                        <Grid item md={6}>
                          <InputLabel
                            style={{ color: "white", fontSize: "15px" }}
                          >
                            Service Listing Name
                          </InputLabel>
                          <TextField
                            sx={{
                              input: {
                                color: "white",
                                backgroundColor: "#23263C",
                                height: "3px",
                                width: "150px",
                              },
                              fieldset: { borderColor: "white" },
                            }}
                            required
                            color="primary"
                            id="firstName"
                            autoComplete="given-name"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Button
                    variant="contained"
                    onClick={prevStep}
                    sx={{
                      mt: 3,
                      ml: 1,
                      backgroundColor: "#46A4DA",
                      with: "200px",
                      "&:hover": {
                        backgroundColor: "#67b4e1",
                        transition: "0.2s",
                      },
                    }}
                  >
                    Back
                  </Button>
                </div>
              )}
            </Paper>

            <Copyright />
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default MultistepForm;
