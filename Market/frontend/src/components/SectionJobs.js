import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../Layouts";

import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import JobCard from "./JobCard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Title from "./Title";
import logo1 from "../img/logo1.svg";
import logo2 from "../img/logo2.svg";
import logo3 from "../img/logo3.svg";
import logo4 from "../img/logo4.svg";
import logo5 from "../img/logo5.svg";
import logo6 from "../img/logo6.svg";
import logo7 from "../img/logo7.svg";

function SectionJobs() {
  return (
    <SectionJobsStyled>
      <InnerLayout>
        <div className="title-con">
          <Title
            name={"Browse Performances"}
            para={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit, excepturi inventore!"
            }
          />
        </div>
        <ImageList cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </InnerLayout>
    </SectionJobsStyled>
  );
}

const SectionJobsStyled = styled.section`
  background-color: var(--color-neutral-3);
  .cards-con {
    padding-top: 3.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-gap: 2rem;
  }
`;
const itemData = [
  {
    img: "https://images.pexels.com/photos/4937768/pexels-photo-4937768.jpeg?cs=srgb&dl=pexels-yaroslav-shuraev-4937768.jpg&fm=jpg",
    title: "Bed",
  },
  {
    img: "https://images.pexels.com/photos/8929829/pexels-photo-8929829.jpeg?cs=srgb&dl=pexels-rodnae-productions-8929829.jpg&fm=jpg",
    title: "Kitchen",
  },
  {
    img: "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?cs=srgb&dl=pexels-wesley-carvalho-3622614.jpg&fm=jpg",
    title: "Sink",
  },
  {
    img: "https://images.pexels.com/photos/5150444/pexels-photo-5150444.jpeg?cs=srgb&dl=pexels-budgeron-bach-5150444.jpg&fm=jpg",
    title: "Books",
  },
  {
    img: "https://images.pexels.com/photos/2320133/pexels-photo-2320133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title: "Chairs",
  },
  {
    img: "https://images.pexels.com/photos/8929036/pexels-photo-8929036.jpeg?cs=srgb&dl=pexels-rodnae-productions-8929036.jpg&fm=jpg",
    title: "Candle",
  },
];
export default SectionJobs;
