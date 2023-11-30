import React, { useState } from "react";
import "./finance.css";
import Avatar from "@mui/material/Avatar";
import Avatar2 from "./icons/admin-avatar.svg";
import Button from "react-bootstrap/Button";
import Divider from "@mui/material/Divider";
import ShortFooter from "../components/ShortFooter";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBeer } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { VscGraphScatter } from "react-icons/vsc";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { RiStockLine } from "react-icons/ri";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AdminAvatar from "./icons/admin-avatar.svg";
import Message from "./icons/message.svg";
import Logo from "../Images/logo_long.png";
import Head from "../Image/head.jpg";
import User from "./icons/user.svg";
const FinanceDashboard = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Dashboard",
      icon: "./icons/admin-avatar.svg",
    },
    {
      text: "Admin Profile",
      icon: { User },
    },
    {
      text: "Messages",
      icon: { Message },
    },
    {
      text: "Analytics",
      icon: "icons/pie-chart.svg",
    },
    {
      text: "File Manager",
      icon: "icons/folder.svg",
    },
    {
      text: "Orders",
      icon: "icons/shopping-cart.svg",
    },
    {
      text: "Saved Items",
      icon: "icons/heart.svg",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
    },
  ];
  return (
    <div>
      <div
        className={
          isExpanded
            ? "side-nav-container"
            : "side-nav-container side-nav-container-NX"
        }
      >
        <div className="nav-upper">
          <div className="nav-heading">
            {isExpanded && (
              <div className="nav-brand">
                <img src={Logo} alt="" srcset="" />
              </div>
            )}

            <button
              className={
                isExpanded
                  ? "hamburger hamburger-in"
                  : "hamburger hamburger-out"
              }
              onClick={() => setExpendState(!isExpanded)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className="nav-menu">
            <div>
              <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              >
                <div className="menu-item-icon">
                  <AiOutlineHome style={{ fontSize: "25px" }} />
                </div>
                {isExpanded && <p style={{ marginLeft: "30px" }}>Home</p>}
              </a>
            </div>
            <div>
              <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              >
                <div className="menu-item-icon">
                  <VscGraphScatter style={{ fontSize: "25px" }} />
                </div>
                {isExpanded && (
                  <p style={{ marginLeft: "30px" }}>Graph Overview</p>
                )}
              </a>
            </div>

            <div>
              <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              >
                <div className="menu-item-icon">
                  <BsCurrencyBitcoin style={{ fontSize: "25px" }} />
                </div>
                {isExpanded && (
                  <p style={{ marginLeft: "27px" }}>Crypto Currency</p>
                )}
              </a>
            </div>
            <div>
              <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              >
                <div className="menu-item-icon">
                  <AiOutlineShoppingCart style={{ fontSize: "25px" }} />
                </div>
                {isExpanded && (
                  <p style={{ marginLeft: "30px" }}>Shopping center</p>
                )}
              </a>
            </div>
            <div>
              <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              >
                <div className="menu-item-icon">
                  <BsChatDots style={{ fontSize: "25px" }} />
                </div>
                {isExpanded && (
                  <p style={{ marginLeft: "27px" }}>Chat Center</p>
                )}
              </a>
            </div>

            <div>
              <a
                className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
                href="#"
              >
                <div className="menu-item-icon">
                  <RiStockLine style={{ fontSize: "25px" }} />
                </div>
                {isExpanded && <p style={{ marginLeft: "27px" }}>Stocks</p>}
              </a>
            </div>
          </div>
        </div>
        <div className="nav-footer">
          <div style={{ marginTop: "10px" }}>
            <a
              className={isExpanded ? "menu-item2" : "menu-item menu-item-NX"}
              href="#"
            >
              <div className="menu-item-icon2">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </div>
              {isExpanded && (
                <p style={{ marginLeft: "27px", fontSize: "20px" }}>John Doe</p>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceDashboard;
