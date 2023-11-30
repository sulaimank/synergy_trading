import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { Paper } from "../../node_modules/@mui/material/index";

export default function PlaceOrderScreen(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    navigate("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
      window.location.reload();
    }
  }, [dispatch, order, navigate, success]);
  return (
    <div style={{ minHeight: "100vh" }}>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top" style={{ marginLeft: 20, marginRight: 30 }}>
        <div className="col-2">
          <ul>
            <li>
              <Paper
                style={{
                  paddingLeft: 20,
                  paddingBottom: 30,
                }}
              >
                <h2 style={{ color: "#347ba3" }}>Payment</h2>
                <p>
                  <strong style={{ color: "#347ba3" }}>
                    Method:
                    {cart.paymentMethod}
                  </strong>{" "}
                </p>
              </Paper>
            </li>
            <li>
              <Paper
                style={{
                  paddingLeft: 20,
                  paddingBottom: 30,
                }}
              >
                <h2 style={{ color: "#347ba3" }}>Order Items</h2>
                <ul style={{ color: "#347ba3" }}>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div> {item.name}</div>
                        <div>
                          <img src={item.thumbnail} height={150} width={150} />
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}></Link>
                        </div>

                        <div>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Paper>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <Paper
            style={{
              paddingLeft: 20,
              paddingBottom: 30,
              marginBottom: 30,
            }}
          >
            <ul style={{ color: "#347ba3" }}>
              <li>
                <h2 style={{ color: "#347ba3" }}>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>${cart.itemsPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping</div>
                  <div>${cart.shippingPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${cart.taxPrice.toFixed(2)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>${cart.totalPrice.toFixed(2)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <Button
                  style={{
                    backgroundColor: "#46a4da",
                    outline: "none",
                    color: "white",
                  }}
                  type="button"
                  onClick={placeOrderHandler}
                  disabled={cart.cartItems.length === 0}
                >
                  Place Order
                </Button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </Paper>
        </div>
      </div>
    </div>
  );
}
