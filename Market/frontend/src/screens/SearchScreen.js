import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/Products";
import { Typography } from "../../node_modules/@mui/material/index";
import { TextField } from "../../node_modules/@mui/material/index";
import { InputAdornment } from "../../node_modules/@mui/material/index";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import business from "../img/business.jpg";
import { InnerLayout } from "../Layouts";
import SectionFooter from "../components/SectionFooter";
import LoadingBox from "../components/LoadingBox";
import Grid from "@mui/material/Grid";
import MessageBox from "../components/MessageBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Paper from "@mui/material/Paper";

import Col from "../../node_modules/react-bootstrap/esm/Col";
import { Card, Box } from "@mui/material";
import Container from "./Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Product from "../components/Product";
import Rating from "../components/Rating";
import { prices, ratings } from "../utils";
import { Offcanvas } from "../../node_modules/react-bootstrap/esm/index";
import Button from "@mui/material/Button";
import { Form, Dropdown } from "../../node_modules/react-bootstrap/esm/index";
import MainFeaturedPost from "../components/MainFeaturedPost";
import Rotate from "../components/MainImg";
import ShortFooter from "../components/ShortFooter";
import { useTheme } from "@mui/material/styles";
import MainImg from "../components/MainImg";
import HomeHero from "../components/HomeHero";

export default function SearchScreen(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    name = "all",
    category = "all",
    min = 0,
    max = 0,
    rating = 0,
    order = "newest",
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Box
        style={{ marginTop: 0 }}
        position={"relative"}
        sx={{
          backgroundImage:
            'url("https://images.pexels.com/photos/6771607/pexels-photo-6771607.jpeg?cs=srgb&dl=pexels-alesia-kozik-6771607.jpg&fm=jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#1F263B",
          marginTop: -13,
          paddingTop: 13,
          "&:after": {
            position: "absolute",
            content: '" "',
            width: "100%",
            height: "100%",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            background: "#1F263B",
            opacity: 0.6,
          },
        }}
      >
        <Container
          zIndex={3}
          position={"relative"}
          maxHeight={600}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box width={1}>
            <Box marginBottom={2}>
              <Typography
                variant="h2"
                align={"center"}
                sx={{
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Explore Marketplace
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                align={"center"}
                sx={{
                  color: "white",
                }}
              >
                See all the upcomming performances
              </Typography>
            </Box>
            <Box padding={2}>
              <Box style={{ marginLeft: "40%" }}>
                <Button
                  style={{ marginRight: 20, backgroundColor: "#46a4da" }}
                  sx={{
                    height: 54,
                    maxWidth: 110,
                    whiteSpace: "nowrap",
                  }}
                  variant="contained"
                  size="medium"
                  fullWidth
                  onClick={handleShow}
                >
                  Apply Filter
                </Button>
                <Link to="/home">
                  <Button
                    sx={{ height: 54, maxWidth: 110, whiteSpace: "nowrap" }}
                    variant="contained"
                    style={{ backgroundColor: "#46a4da" }}
                    size="medium"
                    fullWidth
                  >
                    Clear Filter
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <SectionDownloadStyled>
        <div className="dl-overlay"></div>
        <InnerLayout>
          <div className="dl-con">
            <h3 style={{ color: "white" }}>
              Find Thousands of Dances With Just One Click
            </h3>
            <div className="store-btns">
              <div className="store-btn google" onClick={handleShow}>
                Apply Filter
              </div>
              <Link style={{ color: "black" }} to="/home">
                <div className="store-btn google">Reset Filter</div>
              </Link>
            </div>
          </div>
        </InnerLayout>
      </SectionDownloadStyled> */}

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter Dance</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Row>
            {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            ) : (
              <div>{products.length} Results</div>
            )}

            <div style={{ paddingTop: 10, paddingRight: 20 }}>
              <h3>Sort by </h3>
              <Form.Select
                aria-label="Default select example"
                value={order}
                onChange={(e) => {
                  navigate(getFilterUrl({ order: e.target.value }));
                }}
              >
                <option value="newest">Newest Arrivals</option>
                <option value="lowest">Price: Low to High</option>
                <option value="highest">Price: High to Low</option>
                <option value="toprated">Avg. Customer Reviews</option>
              </Form.Select>
            </div>

            <h3>Department</h3>
            <div>
              {loadingCategories ? (
                <LoadingBox></LoadingBox>
              ) : errorCategories ? (
                <MessageBox variant="danger">{errorCategories}</MessageBox>
              ) : (
                <Form.Select
                  aria-label="Default select example"
                  value={order}
                  onChange={(e) => {
                    navigate(getFilterUrl({ category: e.target.value }));
                  }}
                >
                  <option value="Any">Any</option>
                  <option value="Slow Dance">Slow Dance</option>
                  <option value="Tap Dance">Tap Dance</option>
                  <option value="TikTok">TickTok</option>
                </Form.Select>
              )}
            </div>

            <div>
              <h3 style={{ color: "white" }}>Price</h3>
              <ul>
                {prices.map((p) => (
                  <li key={p.name}>
                    <Link
                      to={getFilterUrl({ min: p.min, max: p.max })}
                      className={
                        `${p.min}-${p.max}` === `${min}-${max}` ? "active" : ""
                      }
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ color: "white" }}>Avg. Customer Review</h3>
              <ul>
                {ratings.map((r) => (
                  <li key={r.name}>
                    <Link
                      to={getFilterUrl({ rating: r.rating })}
                      className={`${r.rating}` === `${rating}` ? "active" : ""}
                    >
                      <Rating caption={" & up"} rating={r.rating}></Rating>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
      {/* This is where the second Grid needs to happen */}
      <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
            <div className="row center" style={{ marginBottom: 10 }}>
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Product
                      style={{ marginRight: 100 }}
                      key={product._id}
                      product={product}
                    ></Product>
                  </Grid>
                ))}
              </Grid>
            </div>
          </>
        )}
      </div>
      <ShortFooter />
    </div>
  );
}
const SectionDownloadStyled = styled.section`
  background: url(${business});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;

  .dl-overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #326ff7f0;
  }

  .dl-con {
    position: relative;
    z-index: 7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
      font-size: 3rem;
      padding-top: 2rem;
    }
  }

  .store-btns {
    display: flex;
    padding-top: 2.5rem;
    color: "white";
    .google,
    .apple {
      border-radius: 7px;
      cursor: pointer;
      padding: 1rem 2rem;
      display: flex;
      margin-right: 1rem;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      img {
        width: 120px;
      }
    }
    .apple {
      margin-left: 1rem;
    }
  }
`;
