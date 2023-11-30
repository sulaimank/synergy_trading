import React, { useEffect, useState } from "react";
import LoadingBox from "../components/LoadingBox";
import Button from "@mui/material/Button";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import Chip from "@mui/material/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AntDesignSideBar from "../components/AntDesignSideBar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Container, Box, Grid } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import ShortFooter from "../components/ShortFooter";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  listProducts,
} from "../actions/productActions";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
} from "../constants/productConstants";

export default function ProductListScreen(props) {
  const drawerWidth = 240;
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf("/seller") >= 0;
  const productList = useSelector((state) => state.productList);
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, products, page, pages } = productList;
  // this is going to be the handlers for the user state
  const [sellerName, setSellerName] = useState("");
  const [sellerLogo, setSellerLogo] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;
  const { user } = userDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
      console.log(userInfo._id);
    } else {
      if (user.seller) {
        setSellerName(userInfo.name);
        setSellerLogo("test test");
        setSellerDescription("test test");
        dispatch(
          updateUserProfile({
            userId: user._id,

            sellerName,
            sellerLogo,
            sellerDescription,
          })
        );
        console.log("getting inside");
      }
    }

    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
      navigate(`/product/${createdProduct._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(
      listProducts({ seller: sellerMode ? userInfo._id : "", pageNumber })
    );
  }, [
    createdProduct,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successDelete,
    userInfo._id,
    pageNumber,
    user,
  ]);

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product._id));
    }
  };
  const createHandler = () => {
    dispatch(createProduct());
  };
  return (
    <div>
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
          <div className="row">
            <h1 style={{ color: "white" }}>Products</h1>
            <Box style={{ marginBottom: 2 }}>
              <Button type="button" variant="contained" href="/addProduct">
                Create Listing
              </Button>
            </Box>
          </div>

          {loadingDelete && <LoadingBox></LoadingBox>}
          {errorDelete && (
            <MessageBox variant="danger">{errorDelete}</MessageBox>
          )}

          {loadingCreate && <LoadingBox></LoadingBox>}
          {errorCreate && (
            <MessageBox variant="danger">{errorCreate}</MessageBox>
          )}
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">ID</TableCell>
                      <TableCell align="right">NAME</TableCell>
                      <TableCell align="right">PRICE</TableCell>

                      <TableCell align="right">ACTIONS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product._id}>
                        <TableCell align="right">{product._id}</TableCell>
                        <TableCell align="right">{product.name}</TableCell>
                        <TableCell align="right">{product.price}</TableCell>

                        <TableCell align="right">
                          {/*
                          <IconButton
                            type="button"
                            size="sm"
                            variant="warning"
                            style={{ marginRight: 10 }}
                            onClick={() => navigate(`/order/${order._id}`)}
                          >
                            <CreateIcon />
                          </IconButton>
                          */}
                          {/*
                          <IconButton
                            aria-label="delete"
                            size="sm"
                            color="red"
                            onClick={() => deleteHandler(order)}
                          >
                            <DeleteIcon />
                          </IconButton>
                          */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Box style={{ width: 20, marginTop: 50, marginBottom: 50 }}>
                <Grid container spacing={3}>
                  <div className="row center pagination">
                    <Grid item xs>
                      {[...Array(pages).keys()].map((x) => (
                        <Link
                          className={x + 1 === page ? "active" : ""}
                          key={x + 1}
                          to={`/productlist/pageNumber/${x + 1}`}
                        >
                          {x + 1}
                        </Link>
                      ))}
                    </Grid>
                  </div>
                </Grid>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
}
