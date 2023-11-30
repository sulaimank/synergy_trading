import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Container from "../screens/Container";

const pages = [
  {
    id: "general",
    href: "/account-general",
    title: "General",
  },
  {
    id: "security",
    href: "/account-security",
    title: "Security",
  },
  {
    id: "notifications",
    href: "/account-notifications",
    title: "Notifications",
  },
  {
    id: "billing",
    href: "/account-billing",
    title: "Billing Information",
  },
];

const Page = ({ children }) => {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    setActiveLink(window && window.location ? window.location.pathname : "");
  }, []);

  const theme = useTheme();

  return (
    <Box>
      <Box bgcolor={"#E6F3FF"}>
        <Container>
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ color: "grey" }}
          >
            Account settings
          </Typography>
          <Typography variant="h6" sx={{ color: "grey" }}>
            Change account information and settings
          </Typography>
        </Container>
      </Box>
      <Container paddingTop={"0 !important"} marginTop={-8}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <Card sx={{ boxShadow: 3, padding: 4 }}>{children}</Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
