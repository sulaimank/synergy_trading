import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import { Button } from "../../node_modules/@mui/material/index";
import CheckoutSteps from "../components/CheckoutSteps";

export default function PaymentMethodScreen(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    navigate("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <div style={{ height: "100vh" }}>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 style={{ color: "#347ba3" }}>Payment Method</h1>
        </div>
        <div>
          <div>
            <input
              style={{ color: "black" }}
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label style={{ color: "black" }} htmlFor="paypal">
              PayPal
            </label>
          </div>
        </div>

        <div>
          <label />
          <Button
            style={{
              backgroundColor: "#46a4da",
              outline: "none",
              color: "white",
            }}
            type="submit"
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}
