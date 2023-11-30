import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Linelogo from "../Images/line.png";
import Button from "@mui/material/Button";
import "./upload2.css";
import axios from "axios";
import { Select } from "../../node_modules/@mui/material/index";
import { MenuItem } from "../../node_modules/@mui/material/index";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import {
  Divider,
  ImageListItemBar,
} from "../../node_modules/@mui/material/index";
import { ImageListItem } from "../../node_modules/@mui/material/index";
import { IconButton } from "../../node_modules/@mui/material/index";
import InfoIcon from "@mui/icons-material/Info";
import Axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "../../node_modules/react-router-dom/index";
import ShortFooter from "../components/ShortFooter";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "../../node_modules/react-bootstrap/esm/index";
import { FormControl } from "../../node_modules/react-bootstrap/esm/index";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import { Alert } from "../../node_modules/react-bootstrap/esm/index";
import { useNavigate, useParams } from "react-router-dom";
import { detailsProduct, updateProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import SectionFooter from "../components/SectionFooter";
import Grid from "@mui/material/Grid";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import MessageBox from "../components/MessageBox";
import PublicIcon from "@mui/icons-material/Public";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { PRODUCT_UPDATE_RESET } from "../constants/productConstants";
import { Chip } from "@mui/material";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import InputLabel from "@mui/material/InputLabel";
import CopyrightIcon from "@mui/icons-material/Copyright";
import TagIcon from "@mui/icons-material/Tag";
import { SocialIcon } from "react-social-icons";

import {
  Paper,
  TextField,
  Typography,
} from "../../node_modules/@mui/material/index";
import { FilePresent } from "../../node_modules/@mui/icons-material/index";
export default function ProductEditScreen(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const params = useParams();
  const { id: productId } = params;
  const [name, setName] = useState("");
  const [line, setNewLine] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [ticktock, setTicktock] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [usage, setUsage] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const [imageError, setImageError] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [imageURL, setImageURL] = useState("");

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

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setFacebook(product.facebook);
      setInstagram(product.instagram);
      setBrand(product.brand);
      setDescription(product.description);
      setLocation(product.location);
      setThumbnail(product.thumbnail);
    }
  }, [product, dispatch, productId, successUpdate, navigate]);
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
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        category,
        brand,
        description,
        facebook,
        instagram,
        location,
        thumbnail,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const inputProps = {
    min: 1,
  };
  const inputProps2 = {
    min: date,
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={submitHandler}>
        <Container>
          <Link to="/home">Back to result</Link>
          <Grid container spacing={2} style={{ minHeight: "75vh" }}>
            <Grid item md={8} sm={12}>
              <Paper
                variant="outlined"
                style={{
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingBottom: 20,
                  paddingTop: 20,
                  backgroundColor: "#1F263B",
                }}
              >
                <h5 style={{ marginTop: 10, color: "white" }}>
                  Thumbnail and Links
                </h5>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <ImageListItem>
                      <img style={{ height: 150 }} src={thumbnail} alt={name} />
                      <ImageListItemBar
                        title={name}
                        subtitle={"Daniel"}
                        actionIcon={
                          <IconButton
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                            aria-label={`info about ${name}`}
                          >
                            <InfoIcon />
                          </IconButton>
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
                      variant="filled"
                      type="text"
                      value={thumbnail}
                      disabled
                      style={{ width: "100", marginTop: "10px" }}
                      placeholder="Uploaded Image"
                    ></TextField>
                  </Grid>
                </Grid>

                <Divider style={{ marginTop: 20 }} />
                <h5 style={{ marginTop: 10, color: "white" }}>
                  Social Media Contact Icons
                </h5>
                <Grid container spacing={2} style={{ paddingTop: 20 }}>
                  <Grid item xs={6}>
                    <SocialIcon
                      network="facebook"
                      style={{ marginLeft: 10, marginTop: 10 }}
                    />
                    <TextField
                      style={{
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                      sx={{ input: { color: "white" } }}
                      id="facebook"
                      variant="filled"
                      type="text"
                      value={facebook}
                      placeholder=""
                      required
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SocialIcon
                      network="instagram"
                      style={{ marginLeft: 10, marginTop: 10 }}
                    />
                    <TextField
                      style={{
                        marginLeft: 10,
                        marginTop: 10,
                      }}
                      variant="filled"
                      sx={{ input: { color: "white" } }}
                      id="instagram"
                      type="text"
                      required
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            <Grid item md={4} sm={12}>
              <Paper
                variant="filled"
                style={{
                  paddingRight: 10,
                  paddingLeft: 10,
                  paddingBottom: 10,
                  backgroundColor: "#1F263B",
                }}
              >
                <h5 style={{ marginTop: 10, color: "white" }}>
                  Basic Listing Information
                </h5>
                <div>
                  <InputLabel sx={{ color: "white" }}>
                    Product Listing Name
                  </InputLabel>
                  <TextField
                    variant="filled"
                    sx={{ input: { color: "white" } }}
                    placeholder=""
                    value={name}
                    style={{ maxWidth: 400 }}
                    onChange={(e) => setName(e.target.value)}
                    required
                    fullWidth
                  />
                </div>

                <div style={{ marginTop: 10 }}>
                  <InputLabel sx={{ color: "white" }}>Location</InputLabel>
                  <TextField
                    sx={{ input: { color: "white" } }}
                    variant="filled"
                    id="price"
                    type="text"
                    value={location}
                    required
                    fullWidth
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <InputLabel sx={{ color: "white" }}>Price</InputLabel>
                  <TextField
                    sx={{ input: { color: "white" } }}
                    variant="filled"
                    id="price"
                    type="text"
                    value={price}
                    required
                    fullWidth
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div style={{ marginTop: 10 }}>
                  <InputLabel sx={{ color: "white" }}>Description</InputLabel>
                  <TextField
                    variant="filled"
                    sx={{ input: { color: "white" } }}
                    value={description}
                    required
                    fullWidth
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
              </Paper>
              <div style={{ marginBottom: 10, marginTop: 10 }}>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  size="lg"
                  type="submit"
                >
                  Update
                </Button>

                <Button onClick={handleOpen} variant="contained" size="lg">
                  Preview
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </form>
      <ShortFooter />
    </div>
  );
}
