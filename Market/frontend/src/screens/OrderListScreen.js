import React, { useEffect, useState } from "react";
import { Container, Box, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { deleteOrder, listOrders } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import { Form, FormControl } from "react-bootstrap";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MessageBox from "../components/MessageBox";
import ShortFooter from "../components/ShortFooter";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { ORDER_DELETE_RESET } from "../constants/orderConstants";

export default function OrderListScreen(props) {
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
    <div>
      <Container style={{ paddingTop: 20 }}>
        {loadingDelete && <LoadingBox></LoadingBox>}
        {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
        <Form>
          <FormControl
            type="search"
            variant="Secondary"
            style={{ marginBottom: 10 }}
            placeholder={"Search For A Seller"}
            outline="none"
            className="me-2"
            aria-label="Search "
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </Form>
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
                    if (search == "") {
                      return order;
                    } else if (
                      order.seller.toLowerCase().includes(search.toLowerCase())
                    ) {
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
                        <Button
                          type="button"
                          size="sm"
                          variant="warning"
                          style={{ marginRight: 10 }}
                          onClick={() => navigate(`/order/${order._id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="danger"
                          onClick={() => deleteHandler(order)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  );
}
