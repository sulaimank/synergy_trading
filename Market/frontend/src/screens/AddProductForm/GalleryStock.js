import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Select } from "../../../node_modules/@mui/material/index";
import { MenuItem } from "../../../node_modules/@mui/material/index";
import { InputLabel } from "../../../node_modules/@mui/material/index";
import { TextareaValidator } from "../../components/TextareaValidator";
export default function GalleryStock({ formData, setFromData }) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel style={{ color: "white" }}>
            Please Upload you PDF document
          </InputLabel>
          <p style={{ color: "#ececec" }}>
            As your Gig storefront, your title is the most important place to
            include keywords that buyers would likely use to search for a
            service like yours.
          </p>
        </Grid>
        <Grid item xs={6} md={6}>
          <input
            value={formData.thumbnail}
            style={{ width: "400px", fontSize: "20px" }}
            type="file"
            name="file"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
