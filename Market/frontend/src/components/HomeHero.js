import React from "react";
import styled from "styled-components";
import { Link } from "../../node_modules/react-router-dom/index";
import business from "../img/business.jpg";
import { InnerLayout } from "../Layouts";
function HomeHero() {
  return (
    <div>
      <SectionDownloadStyled>
        <div className="dl-overlay"></div>
        <InnerLayout>
          <div className="dl-con">
            <h2>Accepting New Dancers Now!</h2>
            <h1>Simply Fill Out an Application With Your Details</h1>
            <div className="store-btns">
              <Link to="/signin">
                <div className="store-btn google">Apply Now</div>
              </Link>
            </div>
          </div>
        </InnerLayout>
      </SectionDownloadStyled>
      );
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
    background-color: #27ae60f2;
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

export default HomeHero;
