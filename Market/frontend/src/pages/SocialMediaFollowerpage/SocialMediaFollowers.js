import React from "react";
import SocialMediaCard from "./SocialMediaCard";
import Grid from "@mui/material/Grid";
import { FollowersPageData } from "./FollowersPageData";
import { Container } from "react-bootstrap";
function SocialMediaFollowers() {
  return (
    <Container>
      <h1 style={{ color: "white" }}>Social Media Followers</h1>
      <Grid container spaciing={2}>
        <Grid item sm={4} style={{ marginBottom: "10px" }}>
          <SocialMediaCard />
        </Grid>
        <Grid item sm={4} style={{ marginBottom: "10px" }}>
          <SocialMediaCard />
        </Grid>
        <Grid item sm={4} style={{ marginBottom: "10px" }}>
          <SocialMediaCard />
        </Grid>
        <Grid item sm={4} style={{ marginBottom: "10px" }}>
          <SocialMediaCard />
        </Grid>
        <Grid item sm={4} style={{ marginBottom: "10px" }}>
          <SocialMediaCard />
        </Grid>
        <Grid item sm={4} style={{ marginBottom: "10px" }}>
          <SocialMediaCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SocialMediaFollowers;
