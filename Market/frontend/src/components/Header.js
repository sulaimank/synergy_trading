import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../img/logo1.svg";
import hero from "../img/hero.jpeg";
import search from "../img/search.svg";
import { useNavigate } from "react-router-dom";
/*eslint-disable*/
function Header() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}`);
  };
  return (
    <HeaderStyled>
      <div className="header-content">
        <h1 style={{ color: "white" }}>
          Over <span style={{ color: "#26c766" }}>500</span> dances available{" "}
          <br />
          You can choose your dream dance
        </h1>
        <p className="main-para">Find the dances you need on demand</p>
        <form onSubmit={submitHandler}>
          <div className="input-control">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Dance Title "
            />

            <button type="submit" className="search-btn">
              <img src={search} alt="" />
            </button>
          </div>
        </form>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  min-height: 90vh;
  position: relative;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${hero}) no-repeat;
  .navigation {
    border-bottom: 1px solid #f4f7f773;
    .nav-wrapper {
      margin: 0 20rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 10vh;
      @media screen and (max-width: 1187px) {
        margin: 0 10rem;
      }
      @media screen and (max-width: 1187px) {
        margin: 0 5rem;
      }
    }
    .logo {
      img {
        width: 50px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      li {
        margin: 0 1rem;
      }
    }
    .cta-btn {
      display: inline-block;
      background-color: var(--color-primary);
      padding: 1rem 1.7rem;
      border-radius: 7px;
      text-align: center;
    }
  }

  .header-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 60%;
    @media screen and (max-width: 1187px) {
      width: 80%;
    }
    h1 {
      font-size: 3rem;
      span {
        font-size: 4rem;
        color: var(--color-primary);
      }
      @media screen and (max-width: 780px) {
        font-size: 2rem;
        span {
          font-size: 3rem;
        }
      }
    }

    .main-para {
      padding: 2rem;
      color: #fff;
    }

    .input-control {
      display: flex;
      justify-content: center;
      width: 100%;
      input,
      select {
        background-color: #fff;
        padding: 1.4rem;
        outline: none;
        border: none;
        margin-right: 10px;
        border-radius: 7px;
        font-size: inherit;
        width: 80%;
        color: #a1a1a1;
        font-weight: 500;
      }
      input[type="text"]::placeholder {
        color: #a1a1a1;
      }
    }

    .search-btn {
      background-color: #26c766;
      outline: none;
      border: none;
      padding: 0.5rem 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 7px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1018px) {
    .nav-items {
      display: none !important;
    }
  }
  @media screen and (min-width: 1025px) {
    .nav-items {
      display: flex !important;
    }
  }
`;

export default Header;
