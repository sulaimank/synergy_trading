import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { TextField } from "../../node_modules/@mui/material/index";

export default function ShippingAddressScreen(props) {
  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);

  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!userInfo) {
    navigate("/signin");
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(shippingAddress.country || "");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    navigate("/payment");
  };
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 style={{ color: "white" }}>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <TextField
            sx={{ input: { color: "white" } }}
            variant="filled"
            type="text"
            id="fullName"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <TextField
            variant="filled"
            sx={{ input: { color: "white" } }}
            type="text"
            id="address"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <TextField
            variant="filled"
            sx={{ input: { color: "white" } }}
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <TextField
            variant="filled"
            sx={{ input: { color: "white" } }}
            type="text"
            id="postalCode"
            placeholder="Enter postal code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <TextField
            sx={{ input: { color: "white" } }}
            variant="filled"
            type="text"
            id="country"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>

        <div>
          <label />
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
}
