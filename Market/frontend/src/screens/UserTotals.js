import React, { useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Chart from "react-google-charts";
import { summaryOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MessageBox from "../components/MessageBox";
import Container from "../../node_modules/react-bootstrap/esm/Container";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import ShortFooter from "../components/ShortFooter";
import OrderListScreen from "./OrderListScreen";
const mdTheme = createTheme();

export default function UserTotals() {
  const orderSummary = useSelector((state) => state.orderSummary);
  const { loading, summary, error } = orderSummary;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(summaryOrder());
  }, [dispatch]);
  return (
    <ThemeProvider theme={mdTheme}>
      <OrderListScreen style={{ marginBottom: 10 }} />
      <Container style={{ maringBottom: 10, marginTop: 30 }}>
        <h1>Sales Overview</h1>
        <div className="row2"></div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <Grid
                container
                rowSpacing={1}
                spacing={2}
                style={{ marginBottom: 50 }}
              >
                <Grid item xs={12} md={6}>
                  <Paper style={{ marginRight: 10 }}>
                    <iframe
                      style={{
                        background: "#FFFFFF",
                        border: "none",
                        width: 640,
                        height: 480,
                      }}
                      src="https://charts.mongodb.com/charts-project-0-evbwg/embed/charts?id=622961b7-5281-4f14-8701-020fbb8e0665&maxDataAge=3600&theme=light&autoRefresh=true"
                    ></iframe>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Paper>
                    <iframe
                      style={{
                        background: "#FFFFFF",
                        border: "none",
                        width: 640,
                        height: 480,
                      }}
                      src="https://charts.mongodb.com/charts-project-0-evbwg/embed/charts?id=62296394-3d53-44bc-85ff-14f3e53e8469&maxDataAge=300&theme=light&autoRefresh=true"
                    ></iframe>
                  </Paper>
                </Grid>
              </Grid>
              <Grid>
                <Paper style={{ marginBottom: 20 }}>
                  <iframe
                    style={{
                      background: "#FFFFFF",
                      border: "none",
                      width: 640,
                      height: 480,
                    }}
                    src="https://charts.mongodb.com/charts-project-0-evbwg/embed/charts?id=62296630-e19b-42f4-884f-eb3902619d6c&maxDataAge=300&theme=light&autoRefresh=true"
                  ></iframe>
                </Paper>
              </Grid>
            </div>
          </>
        )}
      </Container>
      <ShortFooter />
    </ThemeProvider>
  );
}
