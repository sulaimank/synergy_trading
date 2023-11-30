import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Chart from "react-google-charts";

import { Grid } from "@mui/material";

export default function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  return (
    <div>
      <>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Dashboard </li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <Grid container spacing={2}>
                <Grid item md={4} xs={12}>
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <p>Sales </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="#" className="small-box-footer"></a>
                  </div>
                </Grid>
                {/* ./col */}
                <Grid item md={4} xs={12}>
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <p>Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-card" />
                    </div>
                    <a href="#" className="small-box-footer"></a>
                  </div>
                </Grid>

                {/* ./col */}
                <Grid item md={4} xs={12}>
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="#" className="small-box-footer"></a>
                  </div>
                </Grid>
              </Grid>
              {/* /.row */}
              {/* Main row */}
              <Grid container spacing={2}>
                {/* Left col */}
                <Grid item md={6}>
                  {" "}
                  {/* Custom tabs (Charts with tabs)*/}
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <div className="card-header">
                      <h3 className="card-title text-black">
                        <i className="fas fa-bar-chart mr-1 " />
                        Sales
                      </h3>
                    </div>
                    {/* /.card-header */}

                    {/* /.card-body */}
                  </div>
                </Grid>
                <Grid item md={6}>
                  {" "}
                  {/* Custom tabs (Charts with tabs)*/}
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "0.25rem",
                    }}
                  >
                    <div className="card-header">
                      <h3 className="card-title text-black">
                        <i className="fas fa-chart-pie mr-1 " />
                        Categories
                      </h3>
                    </div>
                    {/* /.card-header */}

                    {/* /.card-body */}
                  </div>
                </Grid>
                {/* /.card */}
                {/* DIRECT CHAT */}

                {/*/.direct-chat */}
                {/* TO DO List */}

                {/* /.card */}

                {/* /.Left col */}
                {/* right col (We are only adding the ID to make the widgets sortable)*/}
                <section className="col-lg-5 connectedSortable">
                  {/* Map card */}

                  {/* /.card */}
                  {/* solid sales graph */}

                  {/* /.card */}
                  {/* Calendar */}

                  {/* /.card */}
                </section>
                {/* right col */}
              </Grid>
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </>
    </div>
  );
}
