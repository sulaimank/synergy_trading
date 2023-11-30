import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { InputLabel } from "@mui/material";
import { Button } from "../../node_modules/@mui/material/index";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { MenuItem, Select } from "@mui/material";
import { Input } from "antd";
import ImageDropzone from "../pages/ImageDropzone";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import AntDesignSideBar from "../components/AntDesignSideBar";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
const drawerWidth = 240;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function ResponsiveDrawer(props) {
  const params = useParams();
  const [name, setName] = useState("");
  const [stockType, setStockType] = useState("");
  const [primaryTags, setPrimaryTags] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [calculatedProfit, setCalculatedProfit] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [pdfUpload, setPdfUpload] = useState("");
  const [streamingDate, setStreamingDate] = useState("");
  const [streamingTime, setStreamingTime] = useState("");
  const [streamingLink, setStreamingLink] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [stocksInvolved, setStocksInvolved] = useState("");
  const { id: productId } = params;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading } = userSignin;
  const [formError, setFormError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const navigate = useNavigate();
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const handleChange3 = (event) => {
    console.log(event.target.value);
  };
  const onDrop = useCallback((acceptedFiles) => {
    console.log("we are eneti");
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setThumbnail(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    console.log(file);
  }, []);

  const convertToBase64 = async (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
    };
    reader.onerror = (error) => {
      toast.error("This did not work", error);
    };
  };

  useEffect(() => {
    fetch(
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const array = data.results;
        array.forEach((element) => console.log(element.ticker));
        console.log(array);
      })
      .catch((error) => console.error(error));
  }, []);

  const search = async () => {
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=UL0H71FED3PGMZVX`
      );
      const data = await response.json();
      const firstObjects = [];

      for (let i = 0; i < data.bestMatches.length; i++) {
        const subArray = data.bestMatches[i];
        const firstObject = subArray["1. symbol"];
        firstObjects.push(firstObject);
      }
      setSearchResults(firstObjects);
      console.log(firstObjects);
    } catch (error) {
      console.error(error);
    }
  };

  const calcprofit = (event) => {
    const value = event.target.value;
    setPrice(value);
    setCalculatedProfit(value * 0.95); // calculate 5% of the input value
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const productDetails = (e) => {
    e.preventDefault();

    axios
      .post(
        "/api/products",
        {
          name: name,
          stockType: stockType,
          primaryTags: primaryTags,
          description: description,
          price: price,
          description: description,
          stocksInvolved: stocksInvolved,
          calculatedProfit: 500,
          deliveryMethod: deliveryMethod,
          pdfUpload: pdfUpload,
          streamingDate: streamingDate,
          streamingTime: streamingTime,
          streamingLink: streamingLink,
          category: category,
          thumbnail:
            "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      )
      .then((res) => {
        navigate("/successpage");
        toast.success(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        if (err) {
          toast.error("😲 There is an issue with your upload", {
            position: "top-right",

            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div>
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

      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

          <AntDesignSideBar />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Grid container spacing={2}>
            <Grid item sm={6} style={{ marginTop: "20px" }}>
              <Item>
                <Card>
                  <CardContent>
                    <p style={{ color: "#347ba3", fontWeight: "bold" }}>
                      Description
                    </p>
                    {/* This i the box that has the information*/}
                    <Box
                      sx={{
                        ...commonStyles,
                        border: 1,
                        borderColor: "grey.300",
                      }}
                    >
                      <Container style={{ marginTop: "10px" }}>
                        {/* Put the first form here*/}
                        <InputLabel
                          style={{
                            color: "grey",
                            fontSize: "13px",
                            fontWeight: "lighter",
                          }}
                        >
                          Service Listing Name
                        </InputLabel>
                        <TextField
                          required
                          color="primary"
                          id="firstName"
                          size="small"
                          fullWidth
                          autoComplete="given-name"
                          variant="outlined"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <InputLabel
                          style={{
                            color: "grey",
                            fontSize: "13px",
                            fontWeight: "lighter",
                            marginTop: "10px",
                          }}
                        >
                          Service Listing Description
                        </InputLabel>
                        <TextField
                          required
                          color="primary"
                          id="firstName"
                          size="small"
                          fullWidth
                          autoComplete="given-name"
                          variant="outlined"
                          value={description}
                          rows={4}
                          style={{ marginBottom: "10px" }}
                          multiline
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <Grid
                          container
                          spacing={2}
                          style={{ marginBottom: "10px" }}
                        >
                          <Grid item sm={8}>
                            <InputLabel
                              style={{
                                color: "grey",
                                fontSize: "13px",
                                fontWeight: "lighter",
                                marginTop: "10px",
                              }}
                            >
                              Stocks Involved in Product
                            </InputLabel>
                            <Autocomplete
                              multiple
                              id="tags-standard"
                              options={searchResults}
                              onChange={(event, value) =>
                                setStocksInvolved(value)
                              }
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  value={searchTerm}
                                  onChange={handleChange}
                                  variant="outlined"
                                  placeholder="Favorites"
                                  InputProps={{
                                    ...params.InputProps,
                                    type: "search",
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={4} style={{ marginTop: "20px" }}>
                            <Button
                              variant="contained"
                              sx={{
                                mt: 3,
                                ml: 1,
                                mb: 2,
                                backgroundColor: "#46A4DA",
                                with: "200px",
                                "&:hover": {
                                  backgroundColor: "#67b4e1",
                                  transition: "0.2s",
                                },
                              }}
                              onClick={search}
                            >
                              Search
                            </Button>
                          </Grid>
                        </Grid>
                      </Container>
                    </Box>
                    <p style={{ color: "#347ba3", fontWeight: "bold" }}>
                      Category
                    </p>
                    {/* This i the box that has the information*/}
                    <Box
                      sx={{
                        ...commonStyles,
                        border: 1,
                        borderColor: "grey.300",
                        marginTop: "10px",
                      }}
                    >
                      <Container style={{ marginTop: "10px" }}>
                        {/* Put the first form here*/}
                        <Grid
                          container
                          spacing={2}
                          style={{ marginBottom: "10px" }}
                        >
                          <Grid item md={6}>
                            <InputLabel
                              style={{
                                color: "grey",
                                fontSize: "13px",
                                fontWeight: "lighter",
                              }}
                            >
                              Stock Type
                            </InputLabel>
                            <Select
                              required
                              size="small"
                              value={stockType}
                              onChange={(e) => setStockType(e.target.value)}
                              label="Usage"
                              variant="outlined"
                              fullWidth
                            >
                              <MenuItem value={"Oceania Dance Oceania"}>
                                Technology
                              </MenuItem>
                              <MenuItem value={"European Dance Europa"}>
                                pharmaceutical
                              </MenuItem>
                              <MenuItem value={"Other etc."}>Energy</MenuItem>
                            </Select>
                          </Grid>
                          <Grid item md={6}>
                            <InputLabel
                              style={{
                                color: "grey",
                                fontSize: "13px",
                                fontWeight: "lighter",
                              }}
                            >
                              Primary Tag
                            </InputLabel>
                            <Select
                              required
                              size="small"
                              value={primaryTags}
                              onChange={(e) => setPrimaryTags(e.target.value)}
                              label="Usage"
                              variant="outlined"
                              fullWidth
                            >
                              <MenuItem value={"Oceania Dance Oceania"}>
                                Technology
                              </MenuItem>
                              <MenuItem value={"European Dance Europa"}>
                                pharmaceutical
                              </MenuItem>
                              <MenuItem value={"Other etc."}>Energy</MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                      </Container>
                    </Box>
                    <p style={{ color: "#347ba3", fontWeight: "bold" }}>
                      Pricing
                    </p>
                    {/* This i the box that has the information*/}
                    <Box
                      sx={{
                        ...commonStyles,
                        border: 1,
                        borderColor: "grey.300",
                        marginTop: "10px",
                        marginBottom: "25px",
                      }}
                    >
                      <Container style={{ marginTop: "10px" }}>
                        {/* Put the first form here*/}
                        <Grid
                          container
                          spacing={2}
                          style={{ marginBottom: "10px" }}
                        >
                          <Grid item md={6}>
                            <InputLabel
                              style={{
                                color: "grey",
                                fontSize: "13px",
                                fontWeight: "lighter",
                              }}
                            >
                              Pricing
                            </InputLabel>
                            <TextField
                              required
                              color="primary"
                              id="firstName"
                              name="firstName"
                              fullWidth
                              size="small"
                              endAdornment={
                                <InputAdornment position="end">
                                  kg
                                </InputAdornment>
                              }
                              autoComplete="given-name"
                              variant="outlined"
                              value={price}
                              onChange={calcprofit}
                              //onChange={(e) => setPrice(e.target.value)}
                            />
                          </Grid>
                          <Grid item md={6}>
                            <InputLabel
                              style={{
                                color: "grey",
                                fontSize: "13px",
                                fontWeight: "lighter",
                              }}
                            >
                              Your calculated Profit
                            </InputLabel>
                            <TextField
                              size="small"
                              required
                              disabled
                              color="primary"
                              id="firstName"
                              name="firstName"
                              fullWidth
                              autoComplete="given-name"
                              variant="outlined"
                              value={calculatedProfit}
                              readOnly
                            />
                          </Grid>
                        </Grid>
                      </Container>
                    </Box>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
            <Grid item sm={6} style={{ marginTop: "20px" }}>
              <Item>
                <Card>
                  <CardContent>
                    <p style={{ color: "#347ba3", fontWeight: "bold" }}>
                      Product Image
                    </p>

                    <ImageDropzone />

                    <p
                      style={{
                        color: "#347ba3",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      Product Delivery
                    </p>
                    <Box
                      sx={{
                        ...commonStyles,
                        border: 1,
                        borderColor: "grey.300",
                        marginTop: "10px",
                      }}
                    >
                      <Container style={{ marginTop: "10px" }}>
                        {/* Put the first form here*/}
                        <Grid
                          container
                          spacing={2}
                          style={{ marginBottom: "10px" }}
                        >
                          <Grid item md={6}>
                            <InputLabel
                              style={{
                                color: "grey",
                                fontSize: "13px",
                                fontWeight: "lighter",
                              }}
                            >
                              Select Delivery Option
                            </InputLabel>
                            <Select
                              required
                              size="small"
                              value={deliveryMethod}
                              onChange={(e) =>
                                setDeliveryMethod(e.target.value)
                              }
                              label="Usage"
                              variant="outlined"
                              fullWidth
                            >
                              <MenuItem value={"PDF"}>PDF</MenuItem>
                              <MenuItem value={"Live Stream"}>
                                Live Stream
                              </MenuItem>
                            </Select>
                          </Grid>
                          <Grid item md={6}>
                            <div
                              style={{
                                backgroundColor: "#E6F3FF",
                                borderRadius: "10px",
                                padding: "20px",
                              }}
                            >
                              <p
                                style={{
                                  color: "grey",
                                  fontSize: "13px",
                                  fontWeight: "lighter",
                                }}
                              >
                                As your Gig storefront, your title is the most
                                important place to include.
                              </p>
                            </div>
                          </Grid>
                          {deliveryMethod === "PDF" && (
                            <Grid
                              container
                              spacing={2}
                              style={{ marginTop: "10px" }}
                            >
                              <Grid item md={12}>
                                <div
                                  style={{
                                    border: "2px dashed #ccc",
                                    borderRadius: "5px",
                                    padding: "30px",
                                    textAlign: "center",
                                    background: isDragActive ? "#eee" : "#fff",
                                  }}
                                >
                                  <input
                                    type="file"
                                    onChange={convertToBase64}
                                  />
                                  {thumbnail ? (
                                    <img
                                      src={thumbnail}
                                      style={{ maxWidth: "100px" }}
                                      alt="Uploaded"
                                    />
                                  ) : (
                                    <p
                                      style={{
                                        color: "grey",
                                        fontSize: "13px",
                                        fontWeight: "lighter",
                                      }}
                                    >
                                      Drag and drop an image or click to select
                                      a file
                                    </p>
                                  )}
                                </div>
                              </Grid>
                            </Grid>
                          )}
                          {deliveryMethod === "Live Stream" && (
                            <Grid
                              container
                              spacing={2}
                              style={{ marginTop: "10px" }}
                            >
                              <Grid item md={6}>
                                <InputLabel
                                  style={{
                                    color: "grey",
                                    fontSize: "13px",
                                    fontWeight: "lighter",
                                  }}
                                >
                                  Streaming Date
                                </InputLabel>
                                <TextField
                                  size="small"
                                  required
                                  type="date"
                                  color="primary"
                                  id="firstName"
                                  name="firstName"
                                  fullWidth
                                  autoComplete="given-name"
                                  variant="outlined"
                                  value={streamingDate}
                                  onChange={(e) =>
                                    setStreamingDate(e.target.value)
                                  }
                                />
                              </Grid>
                              <Grid item md={6}>
                                <InputLabel
                                  style={{
                                    color: "grey",
                                    fontSize: "13px",
                                    fontWeight: "lighter",
                                  }}
                                >
                                  Time of the Live Stream
                                </InputLabel>
                                <TextField
                                  size="small"
                                  id="time"
                                  type="time"
                                  defaultValue="07:30"
                                  inputProps={{
                                    step: 300, // 5 min
                                  }}
                                  fullWidth
                                  value={streamingTime}
                                  onChange={(e) =>
                                    setStreamingTime(e.target.value)
                                  }
                                />
                              </Grid>
                              <Grid item md={12}>
                                <InputLabel
                                  style={{
                                    color: "grey",
                                    fontSize: "13px",
                                    fontWeight: "lighter",
                                  }}
                                >
                                  Link for streaming
                                </InputLabel>
                                <TextField
                                  size="small"
                                  id="time"
                                  defaultValue="07:30"
                                  inputProps={{
                                    step: 300, // 5 min
                                  }}
                                  fullWidth
                                  value={streamingLink}
                                  onChange={(e) =>
                                    setStreamingLink(e.target.value)
                                  }
                                />
                              </Grid>
                            </Grid>
                          )}
                        </Grid>
                      </Container>
                    </Box>
                  </CardContent>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      ml: 1,
                      mb: 2,
                      backgroundColor: "#46A4DA",
                      with: "200px",
                      "&:hover": {
                        backgroundColor: "#67b4e1",
                        transition: "0.2s",
                      },
                    }}
                    onClick={productDetails}
                  >
                    Add Product
                  </Button>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
