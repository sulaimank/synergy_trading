import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { listOrderMine } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { Container } from "@mui/material";
import ShortFooter from "../components/ShortFooter";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "../../node_modules/react-bootstrap/esm/Button";

export default function OrderHistoryScreen(props) {
  const navigate = useNavigate();
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 style={{ color: "white" }}>Order History</h1>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <TableContainer component={Paper} sx={{ backgroundColor: "#1F263B" }}>
            <Table
              sx={{ minWidth: 650, backgroundColor: "#1F263B" }}
              aria-label="simple table"
            >
              <TableHead sx={{ backgroundColor: "#1F263B" }}>
                <TableRow>
                  <TableCell align="right" sx={{ color: "white" }}>
                    ID
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    Name
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    DATE
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    TOTAL
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    PAID
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    DELIVERED
                  </TableCell>
                  <TableCell align="right" sx={{ color: "white" }}>
                    ACTIONS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: "#1F263B", color: "white" }}>
                {orders.map((order) => (
                  <TableRow key={order._id}>
                    <TableCell style={{ color: "white" }} align="right">
                      {order._id}
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      {order.seller}
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      {order.createdAt.substring(0, 10)}
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="right">
                      {order.totalPrice.toFixed(2)}
                    </TableCell>
                    <TableCell style={{ color: "white" }} align="right">
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
                        >
                          No
                        </Chip>
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
                        >
                          No
                        </Chip>
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                          navigate(`/order/${order._id}`);
                        }}
                      >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
      <ShortFooter />
    </div>
  );
}
