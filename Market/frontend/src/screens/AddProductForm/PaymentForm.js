import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  Select,
  MenuItem,
  Container,
} from "../../../node_modules/@mui/material/index";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { InputLabel } from "../../../node_modules/@mui/material/index";
export default function PaymentForm({ formData, setFromData }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputLabel style={{ color: "white" }}>Pricing</InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
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
            value={formData.price}
            color="primary"
            id="firstName"
            name="firstName"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            //onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel style={{ color: "white" }}>
            Your calculated Profit
          </InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
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
            value={formData.calculatedProfit}
            //onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel style={{ color: "white" }}>Delivery Method</InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours.
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel style={{ color: "white" }}>
            Select Delivery Option
          </InputLabel>
          <Select
            style={{ backgroundColor: "#23263C", color: "white" }}
            onChange={(e) => setSelectedOption(e.target.value)}
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
            value={formData.deliveryMethod}
            label="Usage"
            variant="outlined"
            //onChange={(e) => setCategory(e.target.value)}
            fullWidth
          >
            <MenuItem value={"PDF"}>PDF</MenuItem>
            <MenuItem value={"Live Stream"}>Live Stream</MenuItem>
          </Select>
        </Grid>
        {selectedOption === "PDF" && (
          <Container style={{ marginTop: "10px" }}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6}>
                <InputLabel style={{ color: "white" }}>
                  Please Upload you PDF document
                </InputLabel>
                <p style={{ color: "#ececec" }}>
                  As your Gig storefront, your title is the most important place
                  to include keywords that buyers would likely use to search for
                  a service like yours.
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <input
                  value={formData.pdfUpload}
                  style={{ width: "400px", fontSize: "20px" }}
                  type="file"
                  name="file"
                />
              </Grid>
            </Grid>
          </Container>
        )}
        {selectedOption === "Live Stream" && (
          <Container style={{ marginTop: "10px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel style={{ color: "white" }}>
                  Please Select the Date of the Live Stream
                </InputLabel>
                <p style={{ color: "#ececec" }}>
                  As your Gig storefront, your title is the most important place
                  to include keywords that buyers would likely use to search for
                  a service like yours.
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
                  value={formData.streamingDate}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel style={{ color: "white" }}>
                  Please Select the time of the Live Stream
                </InputLabel>
                <p style={{ color: "#ececec" }}>
                  As your Gig storefront, your title is the most important place
                  to include keywords that buyers would likely use to search for
                  a service like yours.
                </p>
                <TextField
                  value={formData.streamingTime}
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
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <InputLabel style={{ color: "white" }}>
                  Please Enter the link for the
                </InputLabel>
                <p style={{ color: "#ececec" }}>
                  As your Gig storefront, your title is the most important place
                  to include keywords that buyers would likely use to search for
                  a service like yours.
                </p>
              </Grid>
              <Grid item xs={6} md={6}>
                <InputLabel style={{ color: "white" }}>
                  Please Enter the link for the
                </InputLabel>
                <TextField
                  value={formData.streamingLink}
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
                  //onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>
          </Container>
        )}
      </Grid>
    </React.Fragment>
  );
}
