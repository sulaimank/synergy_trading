import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { listProducts } from "../actions/productActions";
import FaceIcon from "@mui/icons-material/Face";
import { detailsUser } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import Product2 from "../components/Product2";
import Rating from "../components/Rating";
import Grid from "@mui/material/Grid";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Container from "../../node_modules/react-bootstrap/esm/Container";
export default function SellerScreen(props) {
  const params = useParams();
  const { id: sellerId } = params;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const productList = useSelector((state) => state.productList);
  const {
    loading: loadingProducts,
    error: errorProducts,
    products,
  } = productList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsUser(sellerId));
    dispatch(listProducts({ seller: sellerId }));
  }, [dispatch, sellerId]);
  return (
    <Container style={{ minHeight: "100vh" }}>
      <Row style={{ paddingBottom: 20 }}>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Paper
            style={{
              width: 300,
              marginTop: 50,
              paddingBottom: 20,
              marginRight: 10,

              maxHeight: 350,
            }}
          >
            <ul>
              <div>
                <div className="p-1">
                  <h1>{user.seller.name}</h1>
                  <a href={`mailto:${user.email}`}>Contact Seller</a>

                  <li>
                    <img className="profilepic" src={user.seller.logo} />
                  </li>
                </div>
                <Chip
                  color="success"
                  label="Verified Seller"
                  icon={<FaceIcon />}
                />
              </div>
            </ul>
          </Paper>
        )}

        <Col>
          {loadingProducts ? (
            <LoadingBox></LoadingBox>
          ) : errorProducts ? (
            <MessageBox variant="danger">{errorProducts}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}

              <Grid
                container
                spacing={3}
                style={{ marginBottom: 10, marginTop: 10 }}
              >
                {products.map((product) => (
                  <Grid item={4}>
                    <Product key={product._id} product={product}></Product>
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}
