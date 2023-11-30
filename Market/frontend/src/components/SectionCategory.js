import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import CatBtn from "./CatBtn";
import Title from "./Title";
import { Link } from "../../node_modules/react-router-dom/index";

function SectionCategory() {
  return (
    <SectionCategoryStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Quick Links"}
            para={"Use the Link Below to Quickly access what you need"}
          />
        </div>
        <div className="category-con">
          <Link style={{ color: "black" }} to="/register">
            <CatBtn name={"Create An Account"} />
          </Link>
          <Link style={{ color: "black" }} to="/register">
            <CatBtn name={"Apply to be a Seller"} />
          </Link>
          <Link style={{ color: "black" }} to="/home">
            <CatBtn name={"Market "} />
          </Link>

          <Link style={{ color: "black" }} to="/faq">
            <CatBtn name={"FAQ"} />
          </Link>
        </div>
      </InnerLayout>
    </SectionCategoryStyled>
  );
}

const SectionCategoryStyled = styled.section`
  .category-con {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.2rem;
    padding-top: 1rem;
    @media screen and (max-width: 822px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default SectionCategory;
