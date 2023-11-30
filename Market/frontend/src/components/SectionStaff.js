import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";
import StaffCard from "./StaffCard";
import Title from "./Title";
import avatar1 from "../img/avatar1.png";
import avatar2 from "../img/avatar2.png";
import avatar3 from "../img/avatar3.png";
import avatar4 from "../img/avatar4.png";
import star from "../img/star.svg";
import star_half from "../img/star_half.svg";
import bookmark from "../img/bookmark.svg";

function SectionStaff() {
  return (
    <SectionStaffStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Our Founders"}
            para={
              "Lorem ipsum is placeholder text commonly used in the graphic, print,"
            }
          />
        </div>
        <div className="staff-cards">
          <StaffCard
            img={avatar1}
            bookmark={bookmark}
            name={"Huan Nguyen"}
            tit={"Founder"}
            rating={star}
            rating_half={star_half}
            stack={
              "Lorem ipsum is placeholder text commonly used in the graphic, print,"
            }
          />
          <StaffCard
            img={avatar2}
            bookmark={bookmark}
            name={"Gustavo Mikalia"}
            tit={"Founder"}
            rating={star}
            rating_half={star_half}
            stack={
              "Lorem ipsum is placeholder text commonly used in the graphic, print,"
            }
          />
          <StaffCard
            img={avatar3}
            bookmark={bookmark}
            name={"Gustavo Mikalia"}
            tit={"Founder"}
            rating={star}
            rating_half={star}
            stack={
              "Lorem ipsum is placeholder text commonly used in the graphic, print,"
            }
          />
          <StaffCard
            img={avatar4}
            bookmark={bookmark}
            name={"Sunil Patel"}
            tit={"Founder"}
            rating={star}
            rating_half={star}
            stack={
              "Lorem ipsum is placeholder text commonly used in the graphic, print,"
            }
          />
        </div>
      </InnerLayout>
    </SectionStaffStyled>
  );
}

const SectionStaffStyled = styled.section`
  .staff-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
    padding-top: 3.5rem;
  }
`;

export default SectionStaff;
