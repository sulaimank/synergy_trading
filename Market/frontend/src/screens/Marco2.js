import React from "react";
import { Grid } from "@mui/material";
import CoinMarkets from "../screens/CoinMarkets";
import AreaChart from "../screens/AreaChart";
function Marco2() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <CoinMarkets />
        </Grid>{" "}
        <Grid item sm={6}>
          <AreaChart />
        </Grid>
      </Grid>
    </div>
  );
}

export default Marco2;
