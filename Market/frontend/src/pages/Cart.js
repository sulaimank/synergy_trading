import React from "react";
import { ListGroup } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/Context";
import { Row, Col, Button, Image, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { Chip, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  ref,
} from "firebase/firestore";
import { db } from "../firebase";
import { async } from "@firebase/util";

toast.configure();

function Cart() {
  // this is for payment
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();
  const cardsRef = collection(db, "cardcollection");
  const [error, setError] = useState();
  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(cardsRef);
      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getCards();
  }, []);

  const makePayment = (token) => {
    const body = {
      token,
      cards,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    //stripe only works on https
    return fetch(`https://dance-lucid.herokuapp.com/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        navigate("/home");
        const { status } = response;
        console.log("STATUS", status);
      })
      .catch((error) => setError(error.message));
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  // handle token function

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((card) => (
            <ListGroup.Item key={card.id}>
              <Row>
                <Col md={2}>
                  <Image src={card.image} alt={card.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{card.name}</span>
                </Col>
                <Col md={2}>$ {card.price}</Col>

                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: card,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
                <Col md={2}>
                  <Chip label={card.type} />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        {error && (
          <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{error}</p>
          </Alert>
        )}
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: $ {total}</span>
        <StripeCheckout
          stripeKey="pk_test_51KMlY1AJk2314JcUkJONWtVYCtAek9c8QL68v2GpQXzGODu6cM7HoCnPEjYn09zNQaMO1nwrxn1uUU0Ne6wpDgSr00CoXXm5Fq"
          token={makePayment}
          amount={total * 100}
        >
          <Button>Proceed to Cart</Button>
        </StripeCheckout>
      </div>
    </div>
  );
}

export default Cart;
