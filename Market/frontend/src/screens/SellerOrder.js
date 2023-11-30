import React, { useEffect, useState } from "react";
import { Container, Box, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteOrder, listOrders } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import CreateIcon from "@mui/icons-material/Create";
import AntDesignSideBar from "../components/AntDesignSideBar";
import { Form, FormControl } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MessageBox from "../components/MessageBox";
import ShortFooter from "../components/ShortFooter";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { ORDER_DELETE_RESET } from "../constants/orderConstants";

export default function SellerOrder(props) {
  const drawerWidth = 240;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf("/seller") >= 0;
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders({ seller: sellerMode ? userInfo._id : "" }));
  }, [dispatch, sellerMode, successDelete, userInfo._id]);
  const deleteHandler = (order) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteOrder(order._id));
    }
  };

  // this will be for the search Bar
  const [search, setSearch] = useState("");

  return (
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
        <div
          style={{
            backgroundColor: "#ECF0F4",
            padding: "20px",
            borderRadius: "4px",
          }}
        >
          <Container style={{ paddingTop: 20 }}>
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && (
              <MessageBox variant="danger">{errorDelete}</MessageBox>
            )}

            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="right">ID</TableCell>
                      <TableCell align="right">NAME</TableCell>
                      <TableCell align="right">DATE</TableCell>
                      <TableCell align="right">TOTAL</TableCell>
                      <TableCell align="right">PAID</TableCell>
                      <TableCell align="right">DELIVERED</TableCell>
                      <TableCell align="right">ACTIONS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders
                      .filter((order) => {
                        if (order.seller == userInfo.name) {
                          return order;
                        }
                      })

                      .map((order) => (
                        <TableRow key={order._id}>
                          <TableCell align="right">{order._id}</TableCell>
                          <TableCell align="right">{order.seller}</TableCell>
                          <TableCell align="right">
                            {order.createdAt.substring(0, 10)}
                          </TableCell>
                          <TableCell align="right">
                            {order.totalPrice.toFixed(2)}
                          </TableCell>
                          <TableCell align="right">
                            {order.isPaid ? (
                              <Chip
                                style={{ backgroundColor: "#81c784" }}
                                label={order.paidAt.substring(0, 10)}
                                color="primary"
                              />
                            ) : (
                              <Chip
                                style={{ backgroundColor: "#e57373" }}
                                label="Not Paid"
                                color="primary"
                              />
                            )}
                          </TableCell>
                          <TableCell align="right">
                            {order.isDelivered ? (
                              <Chip
                                style={{ backgroundColor: "#81c784" }}
                                label={order.deliveredAt.substring(0, 10)}
                                color="primary"
                              />
                            ) : (
                              <Chip
                                style={{ backgroundColor: "#e57373" }}
                                label="Not Delivered"
                                color="primary"
                              />
                            )}
                          </TableCell>
                          <TableCell align="right">
                            <IconButton
                              type="button"
                              size="sm"
                              variant="warning"
                              style={{ marginRight: 10 }}
                              onClick={() => navigate(`/order/${order._id}`)}
                            >
                              <CreateIcon />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              size="sm"
                              color="red"
                              onClick={() => deleteHandler(order)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Container>
        </div>
      </Box>
    </Box>
  );
}
