import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useContext, useReducer } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import SignUp from "../pages/SignUp";
import Details from "../pages/Details";
import i18n from "./i18n";
import Admin2 from "../pages/Admin2";
import Main from "../pages/Main";
import { CartState } from "../context/Context";
import RealHome from "../pages/RealHome";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import Home from "../pages/Home";
import Perf from "../pages/Perf";
import Routine from "../pages/Routine";
import Subscribing from "../pages/Subscribing";
import Chat from "../pages/Chat";
import Admin from "../pages/Admin";
import Card from "../pages/Cart";
import ModalComp from "./ModalComp";
import Login from "../pages/Login";
import { render } from "react-dom";
import Drop from "./Drop";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "../pages/Cart";
import { useTranslation } from "react-i18next";
import Product from "../pages/Product";
import Product1 from "../pages/Product1";

function Navigation() {
  const { t, i18n } = useTranslation();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand has={Link} to="/">
              Dance Lucid
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  {t("home")}
                </Nav.Link>
                <Nav.Link as={Link} to="/home">
                  {t("market")}
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  {t("add")}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Drop />
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaShoppingCart color="white" fontSize="25" />
                <Badge bg="sucess">{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {cart.length > 0 ? (
                  <>
                    {cart.map((card) => (
                      <span className="cartitem" key={card.id}>
                        <img
                          src={card.image}
                          className="cartItemImg"
                          alt={card.name}
                        />
                        <div className="cartItemDetail">
                          <span>{card.name}</span>
                          <span>$ {card.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: card,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Link to="/cart">
                      <Button style={{ width: "70%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <Dropdown.Item>Cart is Empty </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Navbar>
        <div>
          <Routes>
            <Route path="/home3" element={<RealHome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/performance" element={<Perf />} />
            <Route path="/routines" element={<Routine />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/modal" element={<ModalComp />} />
            <Route path="/" element={<Main />} />
            <Route path="/admin2" element={<Admin2 />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/subscribing" element={<Subscribing />} />
            <Route path="/product1" element={<Product1 />} />
            <Route path="/product/:id/:name" element={<Product />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navigation;
