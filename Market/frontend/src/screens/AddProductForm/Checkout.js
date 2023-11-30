import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { Grid } from "../../../node_modules/@mui/material/index";
import GalleryStock from "./GalleryStock";
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

const steps = [
  "Product Overview",
  "Pricing and Delivery",
  "Gallery and Stocks Involved",
  "Review Submission",
];

const theme = createTheme();

export default function Checkout() {
  const [page, setPage] = useState(0);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <GalleryStock />;
      case 3:
        return <GalleryStock />;
      default:
        throw new Error("Unknown step");
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    stockType: "",
    primaryTags: "",
    secondaryTags: "",
    description: "",
    price: "",
    calculatedProfit: "",
    deliveryMethod: "",
    pdfUpload: "",
    streamingDate: "",
    streamingTime: "",
    streamingLink: "",
    category: "",
    thumbnail: "",
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
              <Stepper
                activeStep={activeStep}
                sx={{ pt: 3, pb: 5, color: "white" }}
              >
                {steps.map((label) => (
                  <Step
                    alternativeLabel={true}
                    sx={{
                      "& .MuiStepLabel-root .Mui-completed": {
                        color: "#87e4b2", // circle color (COMPLETED)
                      },
                      "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                        {
                          color: "#87e4b2", // Just text label (COMPLETED)
                        },
                      "& .MuiStepLabel-root .Mui-active": {
                        color: "#46A4DA", // circle color (ACTIVE)
                      },
                      "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                        {
                          color: "#87e4b2", // Just text label (ACTIVE)
                        },
                      "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                        fill: "white", // circle's number (ACTIVE)
                      },
                      "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                        {
                          color: "white", // Just text label (ACTIVE)
                        },
                    }}
                    key={label}
                  >
                    <StepLabel
                      sx={{
                        ".MuiStepLabel-label": {
                          color: "white",
                        },
                      }}
                      style={{ color: "white" }}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      onClick={handleNext}
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
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </Paper>
            <Copyright />
          </Container>
        </Grid>
        <Grid item sm={4}>
          <Container component="main" maxWidth="md" sx={{ mb: 4, mt: 10 }}>
            <InfoCard>
              <div style={{ alignContent: "center", marginLeft: "32%" }}>
                <Avatar
                  style={{
                    backgroundColor: "#6eb2dd ",
                    width: "75px",
                    height: "75px",
                  }}
                >
                  <AssignmentIcon
                    style={{ color: "#27709d ", fontSize: "45px" }}
                  />
                </Avatar>
              </div>
              <p style={{ color: "white", fontSize: "20px" }}>Tester Card</p>
              <p style={{ color: "#ececec", fontWeight: "lighter" }}>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </InfoCard>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
