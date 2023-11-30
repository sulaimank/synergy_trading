import React from "react";
import Container from "@mui/material/Container";
import AntDesignSideBar from "../../components/AntDesignSideBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
const drawerWidth = 240;
function OnePageForm() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#263042",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
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
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Item>
              <Card>
                <CardHeader
                  style={{ color: "white" }}
                  title="Top 10 Cryptocurrencies By All-Time-High"
                />
                <Divider />
                <CardContent>hi hi hi</CardContent>
              </Card>
            </Item>
          </Grid>
          <Grid item md={6}>
            <Item>hi</Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default OnePageForm;
