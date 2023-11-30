import { Grid } from "@mui/material";
import React from "react";
import "./followercard.css";
import Button from "@mui/material/Button";
function SocialMediaCard() {
  return (
    <div className="overlap-group566 ">
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <img
            className="pexels-thyrone-paas-1722198-2 "
            src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/pexels-thyrone-paas-1722198-1@2x.png"
            alt="pexels-andrea-piacquadio-3777946 8"
          />
        </Grid>
        <Grid item sm={8}>
          <h3 style={{ color: "white" }}>Henry Walter</h3>
          <div className="username">@Walter44_9</div>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginLeft: "10px" }}>
        <Grid item sm={4}>
          <div className="followers-num">3,490</div>
          <div className="followers-tit">Followers</div>
        </Grid>
        <Grid item sm={4}>
          <div className="followers-num">3,490</div>
          <div className="followers-tit">Followers</div>
        </Grid>
        <Grid item sm={4}>
          <div className="followers-num">3,490</div>
          <div className="followers-tit">Followers</div>
        </Grid>
        <div style={{ marginLeft: "20%", marginTop: "30px" }}>
          <Button
            style={{
              backgroundColor: "#46a4da",
              height: "45px",
              color: "white",
              width: "200px",
              border: "none",
            }}
          >
            Write a Message
          </Button>
        </div>
      </Grid>
    </div>
  );
}

export default SocialMediaCard;
