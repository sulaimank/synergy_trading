import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import ShortFooter from "../components/ShortFooter";
import axios from "axios";
import { SocialIcon } from "react-social-icons";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Linelogo from "../Images/line.png";
import { ImageListItemBar } from "../../node_modules/@mui/material/index";
import ReactPlayer from "react-player/youtube";
import { ImageListItem } from "../../node_modules/@mui/material/index";
import { IconButton } from "../../node_modules/@mui/material/index";
import PublicIcon from "@mui/icons-material/Public";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { Card, Chip } from "../../node_modules/@mui/material/index";
import { useDispatch, useSelector } from "react-redux";
import { TikTok } from "react-tiktok";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box } from "../../node_modules/@mui/material/index";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { InputLabel } from "../../node_modules/@mui/material/index";
import { Select } from "../../node_modules/@mui/material/index";
import { MenuItem } from "../../node_modules/@mui/material/index";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { Divider, Paper } from "../../node_modules/@mui/material/index";
import { Typography } from "../../node_modules/@mui/material/index";
import { TextField } from "../../node_modules/@mui/material/index";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Grid } from "../../node_modules/@mui/material/index";
import { FormControlLabel } from "../../node_modules/@mui/material/index";
import { Checkbox } from "../../node_modules/@mui/material/index";
function AddProduct(props) {
  const params = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [count, setCount] = useState(1);
  const { id: productId } = params;
  const [name, setName] = useState("");
  const [line, setNewLine] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [ticktock, setTicktock] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const [imageError, setImageError] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading } = userSignin;
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const productDetails = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/products",
        {
          _id: productId,
          name: name,
          price: price,
          category: category,
          brand: userInfo.name,
          description: description,
          facebook: facebook,
          instagram: instagram,
          location: location,
          thumbnail: thumbnail,
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

  const step1 = async (e) => {
    setCount(count + 1);
    /*if (!name || !location || !category || !date || !date2) {
      toast.error(" Please Check Fields, One or More appears to be missing");
    } else {
      setCount(count + 1);
    }
    */
  };

  const step2 = async (e) => {
    setCount(count + 1);
    /* if (!imageURL) {
      toast.error(" Please Check Fields, One or More appears to be missing");
    } else {
      setCount(count + 1);
    }
    */
  };

  const step3 = async (e) => {
    setCount(count + 1);
  };

  const step4 = async (e) => {
    setCount(count + 1);
  };
  const step5 = async (e) => {
    setCount(count - 1);
    /*
    if (!imageURL || !name || !location || !category || !date || !date2) {
      toast.error(" Please Check Fields, One or More appears to be missing");
    } else {
      ;
    }
    */
  };
  const inputProps = {
    min: 1,
  };
  const inputProps2 = {
    min: date,
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];

    if (file.size > 20000000) {
      toast.error("File Size is too big");

      return;
    }
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setThumbnail(data);
      setLoadingUpload(false);
      toast.success("File has been uploaded");
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        toastStyle={{ backgroundColor: "#1F263B" }}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Commercial vs Limited
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Limited usage means that the products must only be used for certain
            non-profit usages stated in the terms and conditions. Commercial
            usage means the product can be used in a way to make money.
          </Typography>
        </Box>
      </Modal>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          C
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          style={{ backgroundColor: "#263042" }}
        >
          <Typography variant="h6" component="h3" style={{ color: "white" }}>
            Step {count}
          </Typography>
          <Divider />
          <form onSubmit={productDetails}>
            {count === 1 ? (
              <div style={{ paddingTop: "20px" }}>
                <Grid container spacing={3}>
                  <Grid container spacing={2}>
                    <Grid item sm={8}></Grid>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ color: "white" }}
                    >
                      Gig title
                    </Typography>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your title is the most important
                      place to include keywords that buyers would likely use to
                      search for a service like yours.
                    </p>
                  </Grid>
                  <Grid item xs={8}>
                    <InputLabel style={{ color: "white" }}>
                      Service Listing Name
                    </InputLabel>

                    <TextField
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "#23263C",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      color="primary"
                      id="firstName"
                      name="firstName"
                      fullWidth
                      helperText={formError}
                      autoComplete="given-name"
                      variant="outlined"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ color: "white" }}
                    >
                      Stock Type
                    </Typography>
                    <p style={{ color: "#ececec" }}>
                      Please tell us more about the your location and the price
                      that you will post this Gig for. Buyers will be able to
                      see your location.
                    </p>
                  </Grid>
                  <Grid item sm={8}>
                    <InputLabel style={{ color: "white" }}>
                      Stock Type
                    </InputLabel>
                    <Select
                      style={{ backgroundColor: "#23263C", color: "white" }}
                      inputProps={{
                        MenuProps: {
                          MenuListProps: {
                            sx: {
                              backgroundColor: "#23263C",
                              color: "white",
                              "& .MuiOutlinedInput-notchedOutline": {
                                backgroundColor: "white",
                              },
                            },
                          },
                        },
                      }}
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "rec",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      value={category}
                      label="Usage"
                      variant="outlined"
                      onChange={(e) => setCategory(e.target.value)}
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

                  <Grid item xs={4}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ color: "white" }}
                    >
                      Search Tags
                    </Typography>
                    <p style={{ color: "#ececec" }}>
                      How can the audience find you. Please include some tags
                      that can be searched in our fantastic search engine
                    </p>
                  </Grid>

                  <Grid item sm={8}>
                    <InputLabel style={{ color: "white" }}>
                      Primary Search Tags
                    </InputLabel>
                    <TextField
                      sx={{
                        input: {
                          color: "white",
                          backgroundColor: "#23263C",
                        },
                        fieldset: { borderColor: "white" },
                      }}
                      required
                      id="lastName"
                      name="lastName"
                      fullWidth
                      autoComplete="family-name"
                      variant="outlined"
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Grid>

                  <Button
                    style={{
                      marginTop: 10,
                      marginLeft: 10,
                      backgroundColor: "#46A4DA",
                      outline: "none",
                      width: "100px",
                    }}
                    sx={{
                      "&.MuiDataGrid-cell:focus-within": {
                        outline: "none",
                      },
                    }}
                    onClick={() => step1()}
                    disabled={count > 2}
                  >
                    Next
                  </Button>
                </Grid>
              </div>
            ) : null}
            {count === 2 ? (
              <div style={{ paddingTop: "20px" }}>
                <Grid container spacing={3}>
                  <Grid item sm={4}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ color: "white" }}
                    >
                      Gig Pricing
                    </Typography>
                    <p style={{ color: "#ececec" }}>
                      As your Gig storefront, your that buyers would likely use
                      to search for a service like yours.
                    </p>
                  </Grid>
                  <Grid item sm={8}>
                    <InputLabel style={{ color: "white" }}>Price</InputLabel>
                    <TextField
                      sx={{
                        input: {
                          color: "black",
                          backgroundColor: "white",
                        },
                      }}
                      required
                      id="lastName"
                      name="lastName"
                      fullWidth
                      autoComplete="family-name"
                      variant="standard"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ color: "white" }}
                    >
                      Upload Your Thumbnail
                    </Typography>
                    <p style={{ color: "#ececec" }}>
                      Let them see what you can do ! Upload an image that best
                      fits with the description of your service
                    </p>
                  </Grid>
                  <Grid sm={8}>
                    <Box>
                      <div className="file-card">
                        <div style={{ color: "white", paddingLeft: "20px" }}>
                          <input type="file" onChange={uploadFileHandler} />
                        </div>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item sm={4}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      style={{ color: "white" }}
                    >
                      Let your clients connect with you
                    </Typography>
                    <p style={{ color: "#ececec" }}>
                      By uploading your Instgram and Facebook you allow your
                      customers to get a better feel of who you are and what you
                      do
                    </p>
                  </Grid>
                  <Grid item sm={4}>
                    <InputLabel style={{ color: "white" }}>
                      Instagram URL
                    </InputLabel>
                    <TextField
                      sx={{
                        input: {
                          color: "black",
                          backgroundColor: "white",
                        },
                      }}
                      id="city"
                      name="city"
                      fullWidth
                      onChange={(e) => setInstagram(e.target.value)}
                      autoComplete="shipping address-level2"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item sm={4}>
                    <InputLabel style={{ color: "white" }}>
                      Facebook URL
                    </InputLabel>
                    <TextField
                      sx={{
                        input: {
                          color: "black",
                          backgroundColor: "white",
                        },
                      }}
                      id="city"
                      name="city"
                      fullWidth
                      onChange={(e) => setFacebook(e.target.value)}
                      autoComplete="shipping address-level2"
                      variant="standard"
                    />
                  </Grid>
                  <Button
                    style={{ marginTop: 10, marginLeft: 10 }}
                    onClick={() => step3()}
                    disabled={count > 2}
                  >
                    Next
                  </Button>
                </Grid>
              </div>
            ) : null}

            {count === 3 ? (
              <div>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{ color: "white" }}
                >
                  Product Confirmation
                </Typography>

                <Card
                  sx={{ border: "1px solid grey" }}
                  elevation={0}
                  style={{
                    backgroundColor: "#263042",
                    color: "white",
                    padding: "20px",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item sm={6}>
                      <InputLabel style={{ color: "white" }}>
                        Product Listing Name
                      </InputLabel>
                      <TextField
                        required
                        fullWidth
                        sx={{ input: { color: "white" } }}
                        value={name}
                        variant="filled"
                        id="outlined-required"
                        defaultValue="Hello World"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <InputLabel style={{ color: "white" }}>
                        Location
                      </InputLabel>
                      <TextField
                        fullWidth
                        required
                        sx={{ input: { color: "white" } }}
                        value={location}
                        variant="filled"
                        id="outlined-required"
                        defaultValue="Hello World"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <InputLabel style={{ color: "white" }}>
                        Primary Tag
                      </InputLabel>
                      <TextField
                        fullWidth
                        required
                        sx={{ input: { color: "white" } }}
                        value={category}
                        variant="filled"
                        id="outlined-required"
                        defaultValue="Hello World"
                      />
                    </Grid>
                    <Grid item sm={6}>
                      <InputLabel style={{ color: "white" }}>
                        Description
                      </InputLabel>
                      <TextField
                        required
                        fullWidth
                        sx={{ input: { color: "white" } }}
                        value={description}
                        variant="filled"
                        id="outlined-required"
                        defaultValue="Hello World"
                      />
                    </Grid>
                    <Grid item sm={4}>
                      <InputLabel style={{ color: "white" }}>Price</InputLabel>
                      <TextField
                        required
                        fullWidth
                        sx={{ input: { color: "white" } }}
                        value={price}
                        variant="filled"
                        id="outlined-required"
                        defaultValue="Hello World"
                      />
                    </Grid>
                    <Grid item sm={4}>
                      <InputLabel style={{ color: "white" }}>
                        Instagram Link
                      </InputLabel>
                      <TextField
                        required
                        fullWidth
                        sx={{ input: { color: "white" } }}
                        value={instagram}
                        variant="filled"
                        id="outlined-required"
                        defaultValue="Hello World"
                      />
                    </Grid>
                    <Grid item sm={4}>
                      <InputLabel style={{ color: "white" }}>
                        Facebook Link
                      </InputLabel>
                      <TextField
                        required
                        fullWidth
                        sx={{ input: { color: "white" } }}
                        value={facebook}
                        variant="filled"
                        id="outlined-required"
                        defaultValue="Hello World"
                      />
                    </Grid>
                  </Grid>
                </Card>

                <Button
                  style={{ marginTop: "10px" }}
                  className="btn btn-primary"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            ) : null}
            {count === 5 ? (
              <div>
                <Typography variant="h6" gutterBottom>
                  Edit Product
                </Typography>
                <Grid container spacing={2} style={{ minHeight: "75vh" }}>
                  <Grid item md={8} sm={12}>
                    <Paper
                      variant="outlined"
                      style={{
                        paddingRight: 10,
                        paddingLeft: 10,
                        paddingBottom: 20,
                        paddingTop: 20,
                      }}
                    >
                      <h5 style={{ marginTop: 10 }}>Thumbnail and Links</h5>
                      <Grid container spacing={2}>
                        <Grid item md={4}>
                          <ImageListItem>
                            <ImageListItemBar
                              title={name}
                              subtitle={"Daniel"}
                              actionIcon={
                                <IconButton
                                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                                  aria-label={`info about ${name}`}
                                ></IconButton>
                              }
                            />
                          </ImageListItem>
                        </Grid>
                        <Grid item md={6}>
                          <div>
                            <input type="file" onChange={uploadFileHandler} />
                          </div>

                          <TextField
                            id="image"
                            label="Thumbnail"
                            variant="outlined"
                            type="text"
                            value={thumbnail}
                            disabled
                            style={{ width: "100", marginTop: "10px" }}
                            placeholder="Uploaded Image"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <div>
                        <h3 style={{ fontSize: "1rem" }}>
                          TikTok or Youtube URL
                        </h3>
                        <p>(Copy and paste from search bar)</p>

                        <TextField
                          required
                          variant="outlined"
                          label="Video Link"
                          value={imageURL}
                          onChange={(e) => setImageURL(e.target.value)}
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                          fullWidth
                        />
                      </div>
                      <Divider style={{ marginTop: 20 }} />
                      <h5 style={{ marginTop: 10 }}>
                        Social Media Contact Icons
                      </h5>
                      <Grid container spacing={2} style={{ paddingTop: 20 }}>
                        <Grid item xs={6}>
                          <img
                            src={Linelogo}
                            style={{
                              width: 50,
                              height: 50,
                              marginLeft: 10,
                              marginTop: 10,
                            }}
                          />

                          <TextField
                            style={{ marginLeft: 10, marginTop: 10 }}
                            variant="outlined"
                            id="line"
                            type="text"
                            value={line}
                            label="Lime Link"
                            placeholder=""
                            displayEmpty
                            onChange={(e) => setNewLine(e.target.value)}
                          />
                        </Grid>

                        <Grid item xs={6}>
                          <SocialIcon
                            network="facebook"
                            style={{ marginLeft: 10, marginTop: 10 }}
                          />
                          <TextField
                            style={{ marginLeft: 10, marginTop: 10 }}
                            label="Facebook Link"
                            id="facebook"
                            variant="outlined"
                            type="text"
                            value={facebook}
                            placeholder=""
                            onChange={(e) => setFacebook(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <SocialIcon
                            network="instagram"
                            style={{ marginLeft: 10, marginTop: 10 }}
                          />
                          <TextField
                            style={{ marginLeft: 10, marginTop: 10 }}
                            variant="outlined"
                            id="instagram"
                            label="Instagram Link"
                            type="text"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <SocialIcon
                            network="tiktok"
                            style={{ marginLeft: 10, marginTop: 10 }}
                          />
                          <TextField
                            style={{ marginLeft: 10, marginTop: 10 }}
                            variant="outlined"
                            id="Tick-Tock"
                            label="Tik-Tok Link"
                            type="text"
                            value={ticktock}
                            onChange={(e) => setTicktock(e.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>

                  <Grid item md={4} sm={12}>
                    <Paper
                      variant="outlined"
                      style={{
                        paddingRight: 10,
                        paddingLeft: 10,
                        paddingBottom: 10,
                      }}
                    >
                      <h5 style={{ marginTop: 10 }}>
                        Basic Listing Information
                      </h5>
                      <div>
                        <TextField
                          variant="outlined"
                          label="Product Listing Name"
                          placeholder=""
                          value={name}
                          style={{ maxWidth: 400 }}
                          onChange={(e) => setName(e.target.value)}
                          required
                          fullWidth
                        />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        <TextField
                          variant="outlined"
                          id="price"
                          type="text"
                          value={location}
                          required
                          fullWidth
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>

                      <div style={{ marginTop: 10 }}>
                        <Select
                          required
                          value={category}
                          label="Usage"
                          variant="outlined"
                          onChange={(e) => setCategory(e.target.value)}
                          fullWidth
                        >
                          <MenuItem value={"Jazz Dance"}>Jazz Dance</MenuItem>
                          <MenuItem value={"Square Dance"}>
                            Square Dance
                          </MenuItem>
                          <MenuItem value={"Disco Dance"}>Disco Dance</MenuItem>
                          <MenuItem value={"Street Dance"}>
                            Street Dance
                          </MenuItem>
                          <MenuItem value={"Hip hop Dance"}>
                            Hip Hop Dance
                          </MenuItem>
                          <MenuItem value={"Rock Dance"}>Rock Dance</MenuItem>
                          <MenuItem value={"Pop Dance "}>Pop Dance</MenuItem>
                          <MenuItem value={"Breakdance Dance "}>
                            Breakdance Dance{" "}
                          </MenuItem>
                          <MenuItem value={"Ballet "}>Ballet</MenuItem>
                          <MenuItem value={"Contemporary"}>
                            Contemporary
                          </MenuItem>
                          <MenuItem value={"Flamenco"}>Flamenco</MenuItem>
                          <MenuItem value={"Bellydance"}>Bellydance</MenuItem>
                          <MenuItem value={"Central America and South America"}>
                            Central America and South America
                          </MenuItem>
                          <MenuItem value={"African Dance Africa"}>
                            African Dance Africa
                          </MenuItem>
                          <MenuItem value={"East Asian Dance East Asia"}>
                            East Asian Dance East Asia
                          </MenuItem>
                          <MenuItem value={"East Asian Dance East Asia"}>
                            East Asian Dance East Asia
                          </MenuItem>
                          <MenuItem value={"South Asian Dance South Asia"}>
                            South Asian Dance South Asia
                          </MenuItem>
                          <MenuItem value={"Oceania Dance Oceania"}>
                            Oceania Dance Oceania
                          </MenuItem>
                          <MenuItem value={"European Dance Europa"}>
                            European Dance Europa
                          </MenuItem>
                          <MenuItem value={"Other etc."}>Other etc.</MenuItem>
                        </Select>
                      </div>

                      <Row style={{ marginTop: 10 }}>
                        <Col>
                          <div>
                            <h3 style={{ fontSize: "1rem" }} htmlFor="service">
                              Date Available Start
                            </h3>
                            <TextField
                              variant="outlined"
                              label="Start Date"
                              id="date"
                              type="date"
                              value={date}
                              placeholder="Enter Usage"
                              required
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </div>
                        </Col>
                        <Col>
                          <div>
                            <h3 style={{ fontSize: "1rem" }} htmlFor="service">
                              Date Available End
                            </h3>
                            <TextField
                              variant="outlined"
                              label="End Date"
                              id="date"
                              type="date"
                              value={date2}
                              inputProps={inputProps2}
                              placeholder="Enter Usage"
                              required
                              onChange={(e) => setDate2(e.target.value)}
                            />
                          </div>
                        </Col>
                      </Row>
                    </Paper>
                    <div style={{ marginBottom: 10, marginTop: 10 }}>
                      <Button
                        style={{ marginRight: "10px" }}
                        className="btn btn-primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                      <Button onClick={() => step5()}>Review</Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            ) : null}
            {count === 4 ? (
              <Button
                style={{ marginTop: 10 }}
                className="btn btn-primary"
                type="submit"
              >
                Submit
              </Button>
            ) : null}
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default AddProduct;
