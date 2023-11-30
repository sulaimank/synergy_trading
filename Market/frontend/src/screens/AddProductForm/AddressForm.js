import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Select } from "../../../node_modules/@mui/material/index";
import { MenuItem } from "../../../node_modules/@mui/material/index";
import { InputLabel } from "../../../node_modules/@mui/material/index";
import { TextareaValidator } from "../../components/TextareaValidator";
export default function AddressForm({ formData, setFromData }) {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
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

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel style={{ color: "white" }}>
            Service Listing Name
          </InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours.
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
            value={formData.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel style={{ color: "white" }}>Stock Type</InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours.
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
            value={formData.stockType}
            label="Usage"
            variant="outlined"
            //onChange={(e) => setCategory(e.target.value)}
            fullWidth
          >
            <MenuItem value={"Oceania Dance Oceania"}>Technology</MenuItem>
            <MenuItem value={"European Dance Europa"}>pharmaceutical</MenuItem>
            <MenuItem value={"Other etc."}>Energy</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel style={{ color: "white" }}>
            Primary Search Tags
          </InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours.
          </p>
        </Grid>
        <Grid item xs={6}>
          <InputLabel style={{ color: "white" }}>
            Secondary Search Tags
          </InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours.
          </p>
        </Grid>
        <Grid item sm={12}>
          <InputLabel style={{ color: "white" }}>
            Product Description
          </InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours.
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
            value={formData.description}
            onChange={(e) =>
              setFromData({ ...formData, description: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
