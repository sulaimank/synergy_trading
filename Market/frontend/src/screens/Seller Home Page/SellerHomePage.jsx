import { Container, Grid, Chip, Button, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./SellerHomePage.css";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import React from "react";
function SellerHomePage(props) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? " #439fd8bc " : " #439fd8bc ",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? " #222433" : " #222433",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const Item3 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? " #222433" : " #222433",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));

  const InfoCard = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? " #439FD8" : " #439FD8",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",

    color: theme.palette.text.secondary,
  }));

  return (
    <Container style={{ marginTop: "50px" }}>
      {/* This is the main Grid that will divide the page in 1/2*/}
      <Grid container spacing={2}>
        <Grid item sm={4}>
          <Item>
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
            {/* End of Profile */}
            <div
              style={{
                borderTop: "2px solid #439FD8 ",
                marginTop: "10px",
                marginLeft: 20,
                marginRight: 20,
              }}
            ></div>
            {/* This is goign to be the GRID with the seller percentage */}
            <Grid
              container
              spacing={2}
              style={{ marginTop: "10px", color: "white" }}
            >
              <Grid item sm={4}>
                <p
                  style={{
                    marginTop: "8px",
                  }}
                >
                  Total Tweets
                </p>{" "}
                <p style={{ marginTop: "30px" }}>Total Tweets</p>
                <p style={{ marginTop: "30px" }}>Total Tweets</p>
                <p style={{ marginTop: "30px" }}>Total Tweets</p>
              </Grid>
              <Grid item sm={8}>
                <Chip
                  style={{
                    backgroundColor: "#439FD8",
                    width: "200px",
                    color: "white",
                  }}
                  label="50"
                />
                <Chip
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#439FD8",
                    width: "200px",
                    color: "white",
                  }}
                  label="50"
                />
                <Chip
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#439FD8",
                    width: "200px",
                    color: "white",
                  }}
                  label="50"
                />
                <Chip
                  style={{
                    marginTop: "20px",
                    backgroundColor: "#439FD8",
                    width: "200px",
                    color: "white",
                  }}
                  label="50"
                />
              </Grid>
            </Grid>
            <div
              style={{
                borderTop: "2px solid #439FD8 ",
                marginTop: "10px",
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10,
              }}
            ></div>
            <b style={{ marginTop: "10px" }}>Earned in Janurary : $20</b>
          </Item>
          <Item2 style={{ marginTop: 10 }}>
            <h2 style={{ color: "white" }}>Inbox 3 messages</h2>
            {/* Messaging Grid Box */}
            <Grid
              container
              spacing={2}
              style={{
                marginLeft: 0,
                marginRight: 0,
                width: "100%",
              }}
            >
              {/* 1st Message */}
              <Grid item sm={12} style={{ backgroundColor: "#D9D9D9" }}>
                <Grid container spacing={2}>
                  <Grid item sm={4}>
                    <img
                      className="pexels-thyrone-paas-1722198-3 "
                      src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/pexels-thyrone-paas-1722198-1@2x.png"
                      alt="pexels-andrea-piacquadio-3777946 8"
                    />
                  </Grid>
                  <Grid item sm={8}>
                    <p style={{ color: "black" }}>Henry Walter</p>
                    <div style={{ color: "grey" }} className="username">
                      The Message will go here
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {/* 2nd Message */}
              <Grid item sm={12} style={{ backgroundColor: "#353951" }}>
                <Grid container spacing={2}>
                  <Grid item sm={4}>
                    <img
                      className="pexels-thyrone-paas-1722198-3 "
                      src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/pexels-thyrone-paas-1722198-1@2x.png"
                      alt="pexels-andrea-piacquadio-3777946 8"
                    />
                  </Grid>
                  <Grid item sm={8}>
                    <p style={{ color: "white" }}>Henry Walter</p>
                    <div style={{ color: "grey" }} className="username">
                      The Message will go here
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {/* 3rd Message */}
              <Grid item sm={12} style={{ backgroundColor: "#D9D9D9" }}>
                <Grid container spacing={2}>
                  <Grid item sm={4}>
                    <img
                      className="pexels-thyrone-paas-1722198-3 "
                      src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/pexels-thyrone-paas-1722198-1@2x.png"
                      alt="pexels-andrea-piacquadio-3777946 8"
                    />
                  </Grid>
                  <Grid item sm={8}>
                    <p style={{ color: "black" }}>Henry Walter</p>
                    <div style={{ color: "grey" }} className="username">
                      The Message will go here
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Item2>
        </Grid>
        {/* End of First 1/2*/}
        <Grid item sm={8}>
          {/* Active Order Section*/}
          <Item2 className="border_box">
            <Grid container spacing={10}>
              <Grid item sm={4}>
                <p style={{ color: "white", fontSize: "20px" }}>
                  Active Orders
                </p>
              </Grid>
              <Grid item sm={8}>
                <Button
                  variant="contained"
                  style={{ color: "white", backgroundColor: "grey" }}
                  disabled
                >
                  See All Orders
                </Button>
              </Grid>
            </Grid>
          </Item2>
          <Item3 className="border_box" style={{ marginTop: "50PX" }}>
            <b style={{ fontSize: "20px", color: "white" }}>
              3 steps to become a top seller on Fiverr
            </b>
            <p style={{ color: "white" }}>
              The key to your success on Fiverr is the brand you build for
              yourself through your Fiverr reputation. We gathered some tips and
              resources to help you become a leading seller on Fiverr.
            </p>
            {/* This is going to be the grid items*/}
            <Grid container spacing={2}>
              <Grid item sm={4}>
                <InfoCard>
                  {" "}
                  <div style={{ alignContent: "center", marginLeft: "32%" }}>
                    <Avatar
                      style={{
                        backgroundColor: "#6eb2dd ",
                        width: "75px",
                        height: "75px",
                      }}
                    >
                      <AssignmentIcon
                        style={{ color: "#27709d ", fontSize: "45px" }}
                      />
                    </Avatar>
                  </div>
                  <p style={{ color: "white", fontSize: "20px" }}>
                    Tester Card
                  </p>
                  <p style={{ color: "#ececec", fontWeight: "lighter" }}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </InfoCard>
              </Grid>
              <Grid item sm={4}>
                {" "}
                <InfoCard>
                  {" "}
                  <div style={{ alignContent: "center", marginLeft: "32%" }}>
                    <Avatar
                      style={{
                        backgroundColor: "#6eb2dd ",
                        width: "75px",
                        height: "75px",
                      }}
                    >
                      <AssignmentIcon
                        style={{ color: "#27709d ", fontSize: "45px" }}
                      />
                    </Avatar>
                  </div>
                  <p style={{ color: "white", fontSize: "20px" }}>
                    Tester Card
                  </p>
                  <p style={{ color: "#ececec", fontWeight: "lighter" }}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </InfoCard>
              </Grid>
              <Grid item sm={4}>
                {" "}
                <InfoCard>
                  {" "}
                  <div style={{ alignContent: "center", marginLeft: "32%" }}>
                    <Avatar
                      style={{
                        backgroundColor: "#6eb2dd ",
                        width: "75px",
                        height: "75px",
                      }}
                    >
                      <AssignmentIcon
                        style={{ color: "#27709d ", fontSize: "45px" }}
                      />
                    </Avatar>
                  </div>
                  <p style={{ color: "white", fontSize: "20px" }}>
                    Tester Card
                  </p>
                  <p style={{ color: "#ececec", fontWeight: "lighter" }}>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </InfoCard>
              </Grid>
            </Grid>
          </Item3>
          <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
            <CardCover>
              <img
                src="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                srcSet="https://images.pexels.com/photos/7682340/pexels-photo-7682340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 2x"
                loading="lazy"
                alt=""
              />
            </CardCover>
            <CardContent>
              <Typography
                level="h4"
                fontWeight="lg"
                textColor="#fff"
                mt={{ xs: 12, sm: 18 }}
              >
                Contact Us
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SellerHomePage;
