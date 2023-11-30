import React, { useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Chart from "react-google-charts";
import { summaryOrder } from "../actions/orderActions";
import ShortFooter from "../components/ShortFooter";
import LoadingBox from "../components/LoadingBox";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MessageBox from "../components/MessageBox";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Col from "../../node_modules/react-bootstrap/esm/Col";
const mdTheme = createTheme();

export default function DashboardScreen() {
  const orderSummary = useSelector((state) => state.orderSummary);
  const { loading, summary, error } = orderSummary;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(summaryOrder());
  }, [dispatch]);
  return (
    <ThemeProvider theme={mdTheme}>
      <Container style={{ maringBottom: 10 }}>
        <div className="row2">
          <h1>Dashboard</h1>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <Row>
              <Col>
                <Paper style={{ marginBottom: 30 }}>
                  <div className="summary-title color1">
                    <span>
                      <i className="fa fa-users" /> Users
                    </span>
                  </div>
                  <div className="summary-body">
                    {summary.users[0].numUsers}
                  </div>
                </Paper>
              </Col>
              <Col>
                <Paper>
                  <div className="summary-title color2">
                    <span>
                      <i className="fa fa-shopping-cart" /> Orders
                    </span>
                  </div>
                  <div className="summary-body">
                    {summary.orders[0] ? summary.orders[0].numOrders : 0}
                  </div>
                </Paper>
              </Col>
              <Col>
                <Paper>
                  <div className="summary-title color3">
                    <span>
                      <i className="fa fa-money" /> Sales
                    </span>
                  </div>
                  <div className="summary-body">
                    $
                    {summary.orders[0]
                      ? summary.orders[0].totalSales.toFixed(2)
                      : 0}
                  </div>
                </Paper>
              </Col>
            </Row>

            <div>
              <Grid
                container
                rowSpacing={1}
                spacing={2}
                style={{ marginBottom: 50 }}
              >
                <Grid item xs={12} md={6}>
                  <Paper>
                    <h2 style={{ marginLeft: 10 }}>Sales</h2>
                    {summary.dailyOrders.length === 0 ? (
                      <MessageBox>No Sale</MessageBox>
                    ) : (
                      <Chart
                        width="100%"
                        height="400px"
                        chartType="AreaChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ["Date", "Sales"],
                          ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                        ]}
                      ></Chart>
                    )}
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper>
                    <h2 style={{ marginLeft: 10 }}>Categories</h2>
                    {summary.productCategories.length === 0 ? (
                      <MessageBox>No Category</MessageBox>
                    ) : (
                      <Chart
                        width="100%"
                        height="400px"
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                          ["Category", "Products"],
                          ...summary.productCategories.map((x) => [
                            x._id,
                            x.count,
                          ]),
                        ]}
                      />
                    )}
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </>
        )}
      </Container>
      <ShortFooter />
    </ThemeProvider>
  );
}
