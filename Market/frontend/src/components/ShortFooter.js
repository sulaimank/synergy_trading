import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import logo from "../img/logo1.svg";
/*eslint-disable*/
import { Divider } from "../../node_modules/@mui/material/index";
function ShortFooter() {
  return (
    <div>
      <Divider />
      <SectionFooterStyled>
        <p className="footer">
          © 2022 <span>WealthFuel</span> Inc. All Rights Reserved.
        </p>
      </SectionFooterStyled>
    </div>
  );
}

const SectionFooterStyled = styled.footer`
  p {
    color: grey;
  }
  .f-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media screen and (max-width: 1242px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 841px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 530px) {
      grid-template-columns: repeat(1, 1fr);
      .f-title {
        padding: 1rem 0;
        overflow: hidden;
      }
    }
    p {
      color: #d8dadf;
      line-height: 1.9rem;
    }
    .logo {
      display: flex;
      img {
        width: 50px;
        margin-top: -13px;
      }
      h4 {
        margin-left: 16px;
      }
    }
    .f-title {
      padding-bottom: 2rem;
      font-size: 1.8rem;
      cursor: default;
    }
    li {
      margin: 1rem 0;
      a {
        transition: all 0.3s ease-in-out;
        color: #d8dadf;
        font-size: 1.1rem;
        &:hover {
          color: var(--color-primary);
        }
      }
    }
  }

  .footer {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding: 2rem 0;

    border-top: 1px solid #cccccc1c;
    span {
      color: var(--color-primary);
    }
  }
`;
export default ShortFooter;
