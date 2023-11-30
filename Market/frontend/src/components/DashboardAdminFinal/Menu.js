import React, { Component, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  return (
    <div>
      <div className="main-sidebar sidebar-primary elevation-4">
        {/* Brand Logo */}

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              {/* <Avatar>{userInfo.name.charAt(0)}</Avatar>*/}
            </div>
            <div className="info">
              <a href="#" className="d-block"></a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
              <li className="nav-item has-treeview menu-open">
                <ul className="nav nav-treeview"></ul>
              </li>
              <li className="nav-item">
                <a href="/dash3" className="nav-link">
                  <i className="nav-icon fas fa-home" />
                  <p>Home</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/userorders" className="nav-link">
                  <i className="nav-icon fas fa-shopping-bag" />
                  <p>Orders</p>
                </a>
              </li>

              <li className="nav-item has-treeview">
                <a href="/usermainlist" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>Users</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="/userMainProcuts" className="nav-link">
                  <i className="nav-icon fas fa-tags" />
                  <p>Products</p>
                </a>
              </li>

              <li className="nav-header">SELLERS</li>
              <li className="nav-item">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://caakkchasgtsd02mvh8g-jezx6m9i1-ro-hanna.vercel.app/create"
                  className="nav-link"
                >
                  <i className="nav-icon far fa-image" />
                  <p>Video Portal</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/productPortal" className="nav-link">
                  <i className="nav-icon far fa-credit-card" />
                  <p>Seller Pay Portal</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </div>
    </div>
  );
}
