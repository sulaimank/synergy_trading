import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import { Dropdown } from "../../node_modules/react-bootstrap/esm/index";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import { Paper } from "../../node_modules/@mui/material/index";
import { Card } from "../../node_modules/@mui/material/index";
export default function CartScreen(props) {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const { search } = useLocation();
  const qtyInUrl = new URLSearchParams(search).get("qty");
  const qty = qtyInUrl ? Number(qtyInUrl) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    // delete action
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    navigate("/signin?redirect=/payment");
  };
  return (
    <div className="row top" style={{ margin: 30, minHeight: "100vh" }}>
      <div className="col-2">
        <h1 style={{ color: "#347ba3" }}>Shopping Cart</h1>
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        {cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <div key={item.product}>
                <div className="row">
                  <div>
                    <img src={item.thumbnail} height={150} width={150} />
                  </div>
                  <div className="min-30">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <Row>
                    <Col>
                      {/* <div>
                        <select
                          style={{
                            width: 75,
                            height: 50,
                            fontSize: 15,
                            paddingLeft: 5,
                          }}
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div> */}
                    </Col>
                    <Col>{item.description}</Col>
                    <Col>
                      <h1>${item.price}</h1>
                    </Col>
                    <Col>
                      <div>
                        <Button
                          type="button"
                          onClick={() => removeFromCartHandler(item.product)}
                          variant="danger"
                        >
                          Delete
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Dropdown.Divider />
              </div>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <Paper
          style={{
            paddingLeft: 10,
            paddingBottom: 20,
          }}
        >
          <ul>
            <li>
              <h2 style={{ color: "#347ba3" }}>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <Button
                type="button"
                onClick={checkoutHandler}
                disabled={cartItems.length === 0}
                variant="success"
              >
                Proceed to Checkout
              </Button>
            </li>
          </ul>
        </Paper>
      </div>
    </div>
  );
}
