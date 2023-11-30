import React from "react";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import AppBar from "@mui/material/AppBar";
import Dash from "../Images/das22.png";
import Dash3 from "../Images/22.png";
import Users from "../Images/users.png";
import Money from "../Images/money.png";
import Seller from "../Images/application.png";
import { useDispatch, useSelector } from "react-redux";
import ShortFooter from "../components/ShortFooter";
import SnackbarContent from "@mui/material/SnackbarContent";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Link } from "../../node_modules/react-router-dom/index";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import card from "../Images/21.png";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import AdminHero from "../components/AdminHero";
import {
  Grid,
  CardActionArea,
  CardActions,
  Button,
  Paper,
} from "../../node_modules/@mui/material/index";
import Card from "@mui/material/Card";
import Dash2 from "../Images/dash2.png";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Col from "../../node_modules/react-bootstrap/esm/Col";
function AdminDashNew() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return (
    <div style={{ minHeight: "50vh" }}>
      <AdminHero />
      <Container style={{ marginTop: 25, minHeight: "75vh" }}>
        {/* 
        <SnackbarContent
          style={{ marginBottom: 20 }}
          message="Please recall to check your email for seller applications"
        />
        */}
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Link to="/orderlist">
              <Card style={{ marginBottom: 15 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    width="50"
                    image={card}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Orders
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/dashboard">
              <Card style={{ marginBottom: 15 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Dash3}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Overview Metrics
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={4}>
            <Link to="/productlist">
              <Card style={{ marginBottom: 15 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Dash}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Products
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/userlist">
              <Card style={{ marginBottom: 15 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Users}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Users
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/applicationList">
              <Card style={{ marginBottom: 15 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Seller}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Seller Applications
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Link to="/userTotal">
              <Card style={{ marginBottom: 15 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={Money}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography variant="h5" color="text.secondary">
                      Pay Portal
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
          {/* 
          <Grid item xs={4}>
            <Typography variant="h5" gutterBottom component="div">
              Important Links
            </Typography>
            <Row style={{ paddingLeft: 20 }}>
              <Link to="/userlist">
                <Row style={{ marginBottom: 20 }}>
                  <Button
                    style={{
                      width: 60,
                      height: 62,
                      backgroundColor: "#3471eb",
                      borderRadius: 50,
                    }}
                  >
                    <SupervisedUserCircleIcon
                      style={{ color: "white", width: 140, height: 50 }}
                    />
                  </Button>
                  <Col>
                    <Typography variant="h5" color="text.secondary">
                      Users
                    </Typography>
                  </Col>
                </Row>
              </Link>
              <Link to="/userTotal">
                <Row>
                  <Button
                    style={{
                      width: 60,
                      height: 62,
                      backgroundColor: "#3471eb",
                      borderRadius: 50,
                    }}
                  >
                    <AttachMoneyIcon
                      style={{ color: "white", width: 140, height: 50 }}
                    />
                  </Button>
                  <Col>
                    <Typography variant="h5" color="text.secondary">
                      Pay Portal
                    </Typography>
                  </Col>
                </Row>
              </Link>
            </Row>
          </Grid>
          */}
        </Grid>
      </Container>
      <ShortFooter />
    </div>
  );
}

export default AdminDashNew;
