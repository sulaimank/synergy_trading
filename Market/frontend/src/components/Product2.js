import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import line from "../Images/line.png";
import { useDispatch, useSelector } from "react-redux";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { SocialIcon } from "react-social-icons";
import PublicIcon from "@mui/icons-material/Public";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GavelIcon from "@mui/icons-material/Gavel";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";

export default function Product2(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const { product } = props;
  return (
    <div key={product._id}>
      <Card
        sx={{ maxWidth: 345, minWidth: 325, minHeight: 385, maxHeight: 410 }}
        style={{ marginTop: 50, marginLeft: 20 }}
      >
        <Link to={`/product/${product._id}`}>
          <CardMedia
            component="video"
            height="200"
            controls
            src={product.imageURL}
            alt={product.name}
          ></CardMedia>
        </Link>
        {/* 
        <Grid container spacing={1} style={{ paddingTop: 10, paddingLeft: 4 }}>
          <Grid item>
            <Chip
              avatar={<PublicIcon />}
              style={{ backgroundColor: "#dedede" }}
              label={product.location}
            />
          </Grid>
          <Grid item>
            <Chip
              avatar={<EmojiPeopleIcon />}
              style={{ backgroundColor: "#dedede" }}
              label={product.service}
            />
          </Grid>
          <Grid item>
            <Chip
              avatar={<GavelIcon />}
              style={{ backgroundColor: "#dedede" }}
              label={product.usage}
            />
          </Grid>
          <Grid item>
            <Chip
              avatar={<DateRangeIcon />}
              style={{ backgroundColor: "#dedede" }}
              label={product.date}
            />
          </Grid>
        </Grid>
      */}

        <CardContent>
          <Link to={`/product/${product._id}`}>
            <p>{product.name}</p>
          </Link>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <div className="row">
            <div className="price">${product.price}</div>

            <Row>
              <Col>
                <Link to={`/seller/${product.seller._id}`}>
                  {/* {product.seller.seller.name} */}
                </Link>
              </Col>
              {userInfo ? (
                <Col>
                  <Link stlye={{ color: "white" }} to="/chat">
                    Message Seller
                  </Link>
                </Col>
              ) : (
                <Col>Login to Message</Col>
              )}
            </Row>
          </div>
          <Grid
            container
            spacing={1}
            style={{ paddingTop: 10, paddingLeft: 4, marginBottom: 100 }}
          >
            <Grid item>
              <a href={product.instagram}>
                <SocialIcon style={{ width: 30 }} network="instagram" />
              </a>
            </Grid>
            <Grid item>
              <a href={product.facebook}>
                <SocialIcon style={{ width: 30 }} network="facebook" />
              </a>
            </Grid>
            <Grid item>
              <a href={product.line}>
                <img style={{ marginTop: 10, width: 30 }} src={line} />
              </a>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
