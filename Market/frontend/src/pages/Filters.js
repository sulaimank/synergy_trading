import React from "react";
import "../App.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Dropdown,
  Badge,
  Form,
  Rating,
  Button,
} from "react-bootstrap";
import { CartState } from "../context/Context";
export const Filters = () => {
  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-1`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
      </span>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
};
