import * as React from "react";
import Back from "../Image/back.png";
import Box from "@mui/material/Box";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../App.css";
import {
  Card,
  Button,
  Paper,
  Container,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

const image = {
  height: 55,
  my: 4,
};

export default function Iocns() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        marginTop: 10,
        backgroundColor: "#E9E9E9",
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper>
          <div>
            <Typography
              sx={{
                mt: 2,
              }}
              variant="h4"
              align="center"
            >
              How it Works
            </Typography>
            <Grid style={{ marginTop: 30 }} container spacing={5}>
              <Grid item xs={12} md={4}>
                <Box sx={item}>
                  <Box sx={number}>
                    <Avatar
                      style={{
                        height: 150,
                        width: 150,
                        backgroundColor: "#3080E3",
                      }}
                    >
                      <ManageSearchIcon style={{ height: 100, width: 100 }} />
                    </Avatar>
                  </Box>

                  <Typography
                    gutterBottom
                    variant="h6"
                    align="center"
                    component="div"
                  >
                    <span>
                      Search our database that contains thousands of artists
                    </span>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={item}>
                  <Box sx={number}>
                    <Avatar
                      style={{
                        height: 150,
                        width: 150,
                        backgroundColor: "#3080E3",
                      }}
                    >
                      <AttachEmailIcon style={{ height: 100, width: 100 }} />
                    </Avatar>
                  </Box>

                  <Typography
                    gutterBottom
                    variant="h6"
                    align="center"
                    component="div"
                  >
                    <span>
                      Direct communication with performers so they can
                      understand your needs
                    </span>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={item}>
                  <Box sx={number}>
                    <Avatar
                      style={{
                        height: 150,
                        width: 150,
                        backgroundColor: "#3080E3",
                      }}
                    >
                      <AddShoppingCartIcon
                        style={{ height: 100, width: 100 }}
                      />
                    </Avatar>
                  </Box>

                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    align="center"
                  >
                    <span>
                      Choose what you want when you want, with secure checkout
                    </span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </Box>
  );
}
