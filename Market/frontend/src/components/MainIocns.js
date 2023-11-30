import * as React from "react";
import Back from "../Image/back.png";
import Box from "@mui/material/Box";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Chat from "../Image/chat.png";
import Shopping from "../Image/shopping-cart.png";
import Search from "../Image/searching.png";
import { useTranslation } from "react-i18next";
import "../App.css";
import {
  Card,
  Button,
  Paper,
  Container,
  Typography,
  Grid,
  Avatar,
  CardContent,
  CardActions,
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

function MainIocns() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {" "}
      <Box
        component="section"
        sx={{
          display: "flex",
          marginTop: 10,

          overflow: "hidden",
        }}
      >
        <Container
          sx={{
            mb: 15,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper style={{ backgroundColor: "#F9F6EF" }}>
            <div>
              <Typography
                sx={{
                  mt: 1,
                }}
                variant="h4"
                align="center"
                color="text.secondary"
              >
                {t("how-it-works")}
              </Typography>
              <Grid style={{ marginTop: 2 }} container spacing={5}>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <Box sx={number}>
                      <Card sx={{ minWidth: 300, marginBottom: 10 }}>
                        <CardContent>
                          <img
                            src={Chat}
                            style={{ width: 100, alignItems: "center" }}
                          />
                          <Typography
                            sx={{ fontSize: 20 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {t("messaging")}
                          </Typography>

                          <Typography variant="body2">
                            {t("messaging-text")}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <Box sx={number}>
                      <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                          <img
                            src={Shopping}
                            style={{ width: 100, alignItems: "center" }}
                          />
                          <Typography
                            sx={{ fontSize: 20 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {t("easy-trans")}
                          </Typography>

                          <Typography variant="body2">
                            {t("easy-trans-text")}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={item}>
                    <Box sx={number}>
                      <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                          <img
                            src={Search}
                            style={{ width: 100, alignItems: "center" }}
                          />
                          <Typography
                            sx={{ fontSize: 20 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            {t("quick-search")}
                          </Typography>

                          <Typography variant="body2">
                            {t("quick-searching-text")}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Container>
      </Box>
    </div>
  );
}

export default MainIocns;
