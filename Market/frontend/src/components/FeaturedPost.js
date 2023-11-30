import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, CardActions, Container } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import "../App.css";
import Test from "../Image/test1.png";
import Connect from "../Image/1.png";
import Dancers from "../Image/2.png";
import Phone from "../Image/3.png";

function FeaturedPost() {
  return (
    <Grid container spacing={4} style={{ paddingLeft: 40, paddingRight: 40 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image={Connect}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Networking
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With this large network of performers finding the right fit for
              you is just one click away
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* First card*/}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image={Dancers}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Choose your Genrie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              They sky's the limit, there is a guaranteed dance style here for
              you
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      {/* Last card*/}
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image={Phone}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Tailored to you
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Customize your routines or performances to what you want ,
              performers are one message away
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FeaturedPost;
