import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createReview, detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductPageGrid from "../components/ProductPageGrid";
import "./NewProductDetails/ProductDetailsPage.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import MessageBox from "../components/MessageBox";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Rating from "../components/Rating";
import PublicIcon from "@mui/icons-material/Public";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DateRangeIcon from "@mui/icons-material/DateRange";
import GavelIcon from "@mui/icons-material/Gavel";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";

export default function ProductScreen(props) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",

    boxShadow: 24,
    p: 4,
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const params = useParams();
  const { id: productId } = params;

  const [qty, setQty] = useState(1);
  const [tableData, setTableData] = useState([]);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [stockTab, setStockTab] = useState("");

  useEffect(() => {
    if (successReviewCreate) {
      toast.success("Review Submitted Successfully");
      setRating("");
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }

    dispatch(detailsProduct(productId));
    fetchData();
  }, [dispatch, productId, successReviewCreate]);

  const addToCartHandler = () => {
    navigate(`/cart/${productId}?qty=${qty}`);
  };

  const fetchData = async () => {
    try {
      const getTable = await axios.get(`/api/products/${productId}`); // Replace with your API endpoint
      const tabledata = getTable.data;
      console.log(tabledata);
      console.log(tabledata.stocksInvolved);
      const tableArray = tabledata.stocksInvolved; // This is the array
      const fetchedData = [];
      for (const item of tableArray) {
        console.log(item);
        const response = await fetch(
          `https://api.polygon.io/v1/open-close/${item}/2023-01-09?adjusted=true&apiKey=sopFyO7CMPJwZgSkUZS7D96iT_1JeTQe`
          //`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${item}&apikey=apikey=UL0H71FED3PGMZVX`
        );
        const data = await response.json();
        console.log(data);
        if (data.status == "OK") {
          fetchedData.push(data);
        }
      }
      setTableData(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      toast.error("Please enter comment and rating");
    }
  };
  return (
    <div style={{ paddingLeft: 100, paddingRight: 100, minHeight: "100vh" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back to result</Link>

          <div>
            <Grid container spacing={-40}>
              <Grid item md={6}>
                <img
                  style={{ marginBottom: "15px" }}
                  className="pexels-roxanne-minnish-7949604-7"
                  src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/pexels-roxanne-minnish-7949604-7@2x.png"
                  alt="pexels-roxanne-minnish-7949604 7"
                />
                <Accordion expanded="true" style={{ width: "425px" }}>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h5" style={{ color: "grey" }}>
                      Details
                    </Typography>
                  </AccordionSummary>
                  <Divider style={{ color: "grey" }} />
                  <AccordionDetails>
                    <Typography style={{ color: "grey" }}>
                      {product.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item md={6}>
                <ul>
                  <li>
                    <Typography variant="h3" style={{ color: "grey" }}>
                      {product.name}
                    </Typography>
                  </li>
                  <Grid container spacing={0}>
                    {/* This is the Grids for the Button Section*/}
                    <Grid item md={4}>
                      <Chip
                        style={{
                          backgroundColor: "#429fd86e",
                          color: "white",
                          height: "45px",
                          width: "150px",
                        }}
                        avatar={<PublicIcon style={{ color: "white" }} />}
                        label={product.primaryTags}
                      />
                    </Grid>
                    <Grid item md={4}>
                      <Chip
                        style={{
                          backgroundColor: "#429fd86e",
                          color: "white",
                          height: "45px",
                          width: "150px",
                        }}
                        avatar={<PublicIcon style={{ color: "white" }} />}
                        label={product.location}
                      />
                    </Grid>
                    <Grid item md={4}>
                      <Button
                        style={{
                          backgroundColor: "#46a4da",
                          height: "45px",
                          width: "150px",
                          border: "none",
                          color: "white",
                        }}
                        onClick={handleOpen}
                      >
                        Add to Cart
                      </Button>
                    </Grid>
                  </Grid>

                  <li>
                    <Rating
                      rating={product.rating}
                      numReviews={product.numReviews}
                    ></Rating>
                  </li>

                  <div className="overlap-group5">
                    <div className="price-3 inter-bold-white-48px">
                      ${product.price}
                    </div>
                    <div className="current-price inter-normal-white-20px">
                      Current Price
                    </div>
                    <div className="rectangle-91"></div>
                    <div className="rectangle-92"></div>
                    <div className="rectangle-93"></div>
                    <div className="rectangle-89"></div>
                    <div className="platform" style={{ color: "#46a4da" }}>
                      Platform
                    </div>
                    <div
                      className="stock-type inter-medium-cornflower-16px"
                      style={{ color: "#46a4da" }}
                    >
                      Stock Type
                    </div>
                    <div
                      className="seller-profit inter-medium-cornflower-16px"
                      style={{ color: "#46a4da" }}
                    >
                      Seller Profit%
                    </div>
                    <div className="pdf inter-medium-white-32px">PDF</div>
                    <div className="tech inter-medium-white-32px">Tech</div>
                    <div className="percent inter-medium-white-32px">87%</div>
                  </div>
                </ul>
                <Grid container spacing={2} style={{ marginTop: "10px" }}>
                  <Grid item sm={8}>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 650 }}
                        size="large"
                        aria-label="a dense table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>Symbol</TableCell>
                            <TableCell align="right">High</TableCell>
                            <TableCell align="right">Low</TableCell>
                            <TableCell align="right">Volume</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tableData.map((tableData) => (
                            <TableRow
                              key={tableData.symbol}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {tableData.symbol}
                              </TableCell>
                              <TableCell align="right">
                                {tableData.high}
                              </TableCell>
                              <TableCell align="right">
                                {tableData.low}
                              </TableCell>
                              <TableCell align="right">
                                {tableData.volume}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item sm={4}>
                    <div
                      style={{
                        backgroundColor: "#46a4da",
                        minWidth: "400px",
                        alignItems: "center",
                        borderRadius: "3px",
                      }}
                    >
                      <Container>
                        <div className="name-1">Virgil Weston</div>
                        <img
                          className="pexels-thyrone-paas-1722198-1"
                          src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/pexels-thyrone-paas-1722198-1@2x.png"
                          alt="pexels-thyrone-paas-1722198 1"
                        />
                        <div className="overlap-group-container-2">
                          <div className="star-container-1">
                            <img
                              className="star-1"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-1.svg"
                              alt="Star 1"
                            />
                            <img
                              className="star-2"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-2.svg"
                              alt="Star 2"
                            />
                          </div>
                          <div className="star-container-2">
                            <img
                              className="star-1"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-1.svg"
                              alt="Star 1"
                            />
                            <img
                              className="star-2"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-2-1.svg"
                              alt="Star 2"
                            />
                          </div>
                          <div className="star-container">
                            <img
                              className="star-1"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-1.svg"
                              alt="Star 1"
                            />
                            <img
                              className="star-2"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-2-2.svg"
                              alt="Star 2"
                            />
                          </div>
                          <div className="star-container">
                            <img
                              className="star-1"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-1.svg"
                              alt="Star 1"
                            />
                            <img
                              className="star-2"
                              src="https://anima-uploads.s3.amazonaws.com/projects/63cfdb376d4b4edae4bd7a28/releases/63d01ad19966eaf8201eba97/img/star-2-3.svg"
                              alt="Star 2"
                            />
                          </div>
                        </div>
                        <p className="lorem-ipsum-dolor-si-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis{" "}
                        </p>
                      </Container>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {/* */}
            </Grid>
          </div>
          <div>
            <h2 style={{ color: "grey" }} id="reviews">
              Reviews
            </h2>
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong style={{ color: "grey" }}>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p style={{ color: "grey" }}>
                    {review.createdAt.substring(0, 10)}
                  </p>
                  <p style={{ color: "grey" }}>{review.comment}</p>
                </li>
              ))}
              <li>
                {userInfo ? (
                  <form className="form" onSubmit={submitHandler}>
                    <div>
                      <h2 style={{ color: "grey" }}>
                        {" "}
                        Write a customer review
                      </h2>
                    </div>
                    <div>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Rating Value
                        </InputLabel>
                        <Select
                          variant="outlined"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <MenuItem value="1">1- Poor</MenuItem>
                          <MenuItem value="2">2- Fair</MenuItem>
                          <MenuItem value="3">3- Good</MenuItem>
                          <MenuItem value="4">4- Very good</MenuItem>
                          <MenuItem value="5">5- Excelent</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <TextField
                      value={comment}
                      multiline
                      rows={4}
                      onChange={(e) => setComment(e.target.value)}
                      variant="outlined"
                    />

                    <div>
                      <label />
                      <Button
                        style={{ backgroundColor: "#46a4da", color: "white" }}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Please Check Product Descriptions
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2, color: "black" }}
              >
                All products are non refundable.
              </Typography>
              <div>
                <Button
                  style={{ backgroundColor: "#46a4da", color: "white" }}
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
}
