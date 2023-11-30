import React from "react";
import { useEffect, useState } from "react";
import AntDesignSideBar from "../components/AntDesignSideBar";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import TotalOrderLineCard from "../components/DashboardCards/TotalOrderLineCard";
import TotalIncomeLightCard from "../components/DashboardCards/TotalIncomeLightCard";
import TotalGrowthBarCard from "../components/DashboardCards/TotalGrowthBarCard";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Chip from "@mui/joy/Chip";
import PopularCard from "../components/DashboardCards/PopularCard";
import Typography from "@mui/joy/Typography";
import themes from "../themes";
import { useSelector } from "react-redux";
import EarningCard from "../components/DashboardCards/EarningCard";
import { Box, Paper, Grid } from "../../node_modules/@mui/material/index";
import { styled } from "@mui/material/styles";
const drawerWidth = 240;
function Dashboard2023() {
  const customization = useSelector((state) => state.customization);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        <AntDesignSideBar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <div
          style={{
            backgroundColor: "#ECF0F4",
            padding: "20px",
            borderRadius: "4px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                  <EarningCard
                    isLoading={isLoading}
                    style={{ paddingBottom: "100px" }}
                  />
                </ThemeProvider>
              </StyledEngineProvider>
            </Grid>
            <Grid item sm={4}>
              <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                  <TotalOrderLineCard isLoading={isLoading} />
                </ThemeProvider>
              </StyledEngineProvider>
            </Grid>
            {/* This will be the third row. Will have multiple cards*/}
            <Grid item sm={4}>
              <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                  <TotalIncomeLightCard isLoading={isLoading} />
                </ThemeProvider>
              </StyledEngineProvider>
              <div style={{ marginTop: "5px" }}>
                <StyledEngineProvider injectFirst>
                  <ThemeProvider theme={themes(customization)}>
                    <TotalIncomeLightCard isLoading={isLoading} />
                  </ThemeProvider>
                </StyledEngineProvider>
              </div>
            </Grid>
            <Grid item sm={8}>
              <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                  <TotalGrowthBarCard isLoading={isLoading} />
                </ThemeProvider>
              </StyledEngineProvider>
            </Grid>
            <Grid item sm={4}>
              <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                  <PopularCard isLoading={isLoading} />
                </ThemeProvider>
              </StyledEngineProvider>
            </Grid>
          </Grid>
        </div>
        {/* This will be the third row. Will have multiple cards*/}
      </Box>
    </Box>
  );
}

export default Dashboard2023;
