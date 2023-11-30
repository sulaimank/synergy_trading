import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";
import { Link } from "react-router-dom";
import { listProductCategories } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Button } from "../../node_modules/@mui/material/index";
import MessageBox from "../components/MessageBox";
import Logo from "../Images/logo.png";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
export default function Navbar2() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}` || ``);
    console.log(userInfo);
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <Paper>
      <Navbar
        variant="light"
        expand="lg"
        style={{ backgroundColor: "#282F43", color: "white" }}
      >
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              width="55"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* This is the first if user */}
              <Nav.Link href="/home" style={{ color: "white" }}>
                Marketplace
              </Nav.Link>
              <Nav.Link href="/faq" style={{ color: "white" }}>
                FAQ
              </Nav.Link>
              {userInfo ? (
                <NavDropdown
                  title={userInfo.name}
                  style={{ color: "white" }}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    User Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/chat">Chat</NavDropdown.Item>
                  <NavDropdown.Item href="/orderhistory">
                    Your Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/request">
                    Apply to be a Seller
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={signoutHandler} href="#signout">
                    {" "}
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/signin" style={{ color: "white" }}>
                  Sign In
                </Nav.Link>
              )}
              {/* This is the first if user */}
              {userInfo && userInfo.isSeller && (
                <NavDropdown
                  title="Seller"
                  style={{ color: "white" }}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/productlist/seller">
                    Add a Dance
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/orderedlist">
                    Customer Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/adminDash">
                    Dashboard
                  </NavDropdown.Item>
                  {/* <NavDropdown.Item href="/dashboard">
                    Overview Metrics
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/orderlist">Orders</NavDropdown.Item>
                  <NavDropdown.Item href="/productlist">
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/userlist">Users</NavDropdown.Item>
                  <NavDropdown.Item href="/userTotal">
                    Seller Order Total
                  </NavDropdown.Item>
                    */}
                </NavDropdown>
              )}
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <Button style={{ backgroundColor: "#1C6AC6" }}>
                  <Link to="/cart">
                    <ShoppingCartIcon
                      style={{ color: "white" }}
                    ></ShoppingCartIcon>
                    {cartItems.length > 0 && (
                      <span style={{ color: "white" }}>{cartItems.length}</span>
                    )}
                  </Link>
                </Button>
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={submitHandler}>
              <FormControl
                type="search"
                style={{ color: "black" }}
                placeholder="Search Dance"
                className="me-2"
                aria-label="Search Dance"
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                style={{ backgroundColor: "#1C6AC6", color: "white" }}
                type="submit"
                variant="outline-success"
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Paper>
  );
}
