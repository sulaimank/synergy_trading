import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import CheckIcon from "@mui/icons-material/Check";
import "./pay.css";
import Card from "@mui/material/Card";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("SAMPLE DESCRIPTION OF WHAT GOES INTO A ITEM", 159, 6.0, 24, 4.0),
];

function PaymentFinal() {
  return (
    <Container style={{ marginTop: "10px" }}>
      <Grid container spacing={2}>
        <Grid item sm={8}>
          <Item>
            <Card>
              <Chip
                style={{ backgroundColor: "#46A4DA", color: "white" }}
                label="Oct 24"
              />
              <Grid container spacing={0.6} style={{ marginTop: "40px" }}>
                <Grid item sm={2}>
                  <Avatar
                    sx={{
                      bgcolor: "#439FD8",
                      minWidth: "70px",
                      minHeight: "70px",
                    }}
                  >
                    <FileCopyIcon
                      sx={{ minWidth: "45px", minHeight: "45px" }}
                    />
                  </Avatar>
                </Grid>
                <Grid item sm={10}>
                  <p style={{ color: "#347ba3", fontWeight: "bold" }}>
                    Your order was placed on October 24
                  </p>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {
                              borderColor: "#f5f5f5",
                            },
                          }}
                        >
                          <TableCell align="left">
                            <InsertDriveFileIcon />
                            Your Orders
                          </TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableHead>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {},
                          }}
                        >
                          <TableCell style={{ width: "20x" }}>ITEM</TableCell>
                          <TableCell align="right">QTY</TableCell>
                          <TableCell align="right">DATE</TableCell>
                          <TableCell align="right">PRICE</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            style={{
                              backgroundColor: "#f5f5f5",
                              color: "#a0a0a0",
                            }}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                borderBottom: 0,
                                color: "#a0a0a0",
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <TableHead>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {
                              borderColor: "#f5f5f5",
                            },
                          }}
                        >
                          <TableCell style={{ width: "20x" }}>
                            SUBTOTAL
                          </TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right">$500</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableHead
                        sx={{
                          "&:last-child td, &:last-child th": {
                            borderBottom: "none",
                          },
                        }}
                      >
                        <TableRow>
                          <TableCell style={{ width: "20x" }}>FEE</TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right"></TableCell>
                          <TableCell align="right">$500</TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                    </Table>
                  </TableContainer>
                  <p style={{ color: "white" }}>
                    If something seems incorrect them please do not hesitate to
                    reach out to customer service{" "}
                  </p>
                </Grid>
              </Grid>
              {/* Second Grid for Deilivery */}
              <Grid container spacing={0.3} style={{ marginTop: "40px" }}>
                <Grid item sm={2}>
                  <Avatar
                    sx={{
                      bgcolor: "#6DB58E",
                      minWidth: "70px",
                      minHeight: "70px",
                    }}
                  >
                    <AddTaskIcon sx={{ minWidth: "45px", minHeight: "45px" }} />
                  </Avatar>
                </Grid>
                <Grid item sm={10}>
                  <p style={{ color: "#347ba3", fontWeight: "bold" }}>
                    Your order was delivered on October 24
                  </p>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {},
                          }}
                        >
                          <TableCell align="left">
                            <ShoppingBagIcon />
                            DELIVERED
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      {/* Information inside the second table */}
                      <Container>
                        <Grid container spacing={2}>
                          <Grid item sm={2} style={{ marginTop: "10px" }}>
                            <Avatar
                              sx={{ width: "70px", height: "70px" }}
                              alt="Remy Sharp"
                              src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800"
                            />
                          </Grid>
                          <Grid item sm={10} style={{ marginTop: "10px" }}>
                            <div>
                              <b style={{ color: "#a0a0a0" }}>JohnDoe7</b>
                              <p style={{ color: "#a0a0a0" }}>
                                Please see the attached PDF Plan, for more
                                questions please feel free to message me.
                              </p>
                              <p style={{ color: "#a0a0a0" }}>ATTACHMENTS</p>
                              <Alert
                                style={{
                                  width: "200px",
                                }}
                                severity="success"
                                color="info"
                              >
                                Download PDF
                              </Alert>
                            </div>
                            {/* This is the container with accept or decline*/}
                            <Grid
                              container
                              spacing={-3}
                              style={{ marginTop: "10px" }}
                            >
                              <Grid item sm={6}>
                                <Chip
                                  label="Complete Order"
                                  style={{
                                    backgroundColor: "#6DB58E",
                                    color: "white",
                                    width: "150px",
                                  }}
                                />
                              </Grid>
                              <Grid item sm={6}>
                                {" "}
                                <Chip
                                  label="Dispute Order"
                                  style={{
                                    backgroundColor: "#B56D6D",
                                    color: "white",
                                    width: "150px",
                                  }}
                                />
                              </Grid>
                              <p style={{ color: "white" }}>
                                *If you do not complete the order within 24
                                hours then it will automatically marked
                                complete.
                              </p>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Container>
                    </Table>
                  </TableContainer>
                  <p style={{ color: "white" }}>
                    If something seems incorrect them please do not hesitate to
                    reach out to customer service{" "}
                  </p>
                </Grid>
              </Grid>
              {/* End of Dilivery Grid*/}
              {/* Third Grid for Complete */}
              <Grid container spacing={2} style={{ marginTop: "40px" }}>
                <Grid item sm={2}>
                  <Avatar
                    sx={{
                      bgcolor: "#B99397",
                      minWidth: "70px",
                      minHeight: "70px",
                    }}
                  >
                    <CheckIcon sx={{ minWidth: "45px", minHeight: "45px" }} />
                  </Avatar>
                </Grid>
                <Grid item sm={10}>
                  <b style={{ color: "white", textDecoration: "underline" }}>
                    Your order was completed on October 24
                  </b>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow
                          sx={{
                            "&:last-child td, &:last-child th": {},
                          }}
                        >
                          <TableCell align="left">
                            <ShoppingBagIcon />
                            ORDER COMPLETE
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      {/* Information inside the second table */}

                      <Container>
                        <p style={{ color: "#a0a0a0", marginTop: "10px" }}>
                          Your order has been completed
                        </p>
                      </Container>
                    </Table>
                  </TableContainer>
                  <p style={{ color: "white" }}>
                    If something seems incorrect them please do not hesitate to
                    reach out to customer service{" "}
                  </p>
                </Grid>
              </Grid>
              {/* Third of Dilivery Grid*/}
            </Card>
          </Item>
        </Grid>
        <Grid item sm={4}>
          <Item>
            <Card>
              <h3 style={{ color: "#8d8d8d", padding: "10px" }}>
                Order Details
              </h3>
              <Grid container spacing={15} style={{ padding: "10px" }}>
                <Grid item sm={6}>
                  <img
                    style={{ width: "200px", paddingBottom: "30px" }}
                    src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63dea26ec11d35ed3668daff/img/pexels-roxanne-minnish-7949604-7@2x.png"
                    alt="pexels-roxanne-minnish-7949604 7"
                  />
                  <p style={{ color: "#8d8d8d" }}>Order from</p>
                  <p style={{ color: "#8d8d8d" }}>Delivery</p>
                  <p style={{ color: "#8d8d8d" }}>Total</p>
                  <p style={{ color: "#8d8d8d" }}>Order #</p>
                </Grid>
                <Grid item sm={6}>
                  <p style={{ color: "#8d8d8d" }}>Sample Headline </p>
                  <Chip
                    label="success"
                    style={{
                      backgroundColor: "#6DB58E",
                      width: "100px",
                      color: "white",
                    }}
                  />
                  <p style={{ color: "#6BD15A", marginTop: "60px" }}>
                    JohnDoe24
                  </p>
                  <p style={{ color: "#8d8d8d" }}>11/04/22</p>
                  <p style={{ color: "#8d8d8d" }}>$3404.00</p>
                  <p style={{ color: "#8d8d8d" }}>WUDJIEFNI</p>
                </Grid>
              </Grid>
            </Card>
          </Item>
          {/* This is the second item */}
          <Item style={{ marginTop: "30px" }}>
            <Card style={{ padding: "10px" }}>
              <h3 style={{ color: "#46A4DA" }}>Support</h3>
              <Grid container spacing={2}>
                <Grid item sm={3}>
                  <HelpOutlineIcon
                    style={{
                      color: "#46A4DA",
                      fontSize: "50px",
                      marginTop: "10px",
                    }}
                  />
                  <SupportAgentIcon
                    style={{
                      color: "#46A4DA",
                      fontSize: "50px",
                      marginTop: "75px",
                    }}
                  />
                </Grid>
                <Grid item sm={9}>
                  <h2 style={{ color: "#46A4DA" }}>FAQ</h2>
                  <p
                    style={{
                      color: "#46A4DA",
                      width: "270px",
                      marginTop: "-20px",
                    }}
                  >
                    This is the place where you can write all your previosuly
                    asked questions{" "}
                  </p>
                  <div
                    style={{
                      borderTop: "2px solid #fff ",
                      marginLeft: -90,
                      marginRight: 0,
                    }}
                  ></div>
                  <h2 style={{ color: "#46A4DA" }}>Service Station</h2>
                  <p
                    style={{
                      color: "#46A4DA",
                      width: "270px",
                      marginTop: "-20px",
                    }}
                  >
                    This is the place where you can write all asked questions
                  </p>
                </Grid>
              </Grid>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentFinal;
