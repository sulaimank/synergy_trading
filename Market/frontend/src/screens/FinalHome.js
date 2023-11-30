import React from "react";
import Features22 from "../components/Features22";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PromoNumbers from "../components/PromoNumbers";
import Container from "./Container";
import RatingPlace from "../components/RatingPlace";
import HomeHero2 from "../components/HomeHero2";
import CaseStudy1 from "../components/CaseStudy1";
import Application2 from "../components/Application2";
import AskExpert from "../components/AskExpert";
import MeetTeam from "../components/MeetTeam";
import ContactName from "../components/ContactName";
import { Divider } from "../../node_modules/@mui/material/index";
import ShortFooter from "../components/ShortFooter";
import Gallery from "../components/Gallery";
import PricingSub from "../components/PricingSub";
const FinalHome = () => {
  const theme = useTheme();

  return (
    <div>
      <Box
        sx={{
          position: "relative",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "30%",
            zIndex: 1,
            top: 0,
            left: "5%",
            height: "100%",
            backgroundSize: "18px 18px",
            backgroundImage: `radial-gradient(${alpha(
              theme.palette.primary.dark,
              0.4
            )} 20%, transparent 20%)`,
            opacity: 0.2,
          },
        }}
      >
        <Box position={"relative"} zIndex={3}>
          <HomeHero2 />
        </Box>
      </Box>
      <Box style={{ backgroundColor: "#E6F3FF" }}>
        <Container>
          <Features22 />
        </Container>
      </Box>

      <Box>
        <Container>
          <CaseStudy1 />
        </Container>
      </Box>
      <Box>
        <RatingPlace />
      </Box>
      <Box>
        <Container>
          <AskExpert />
        </Container>
      </Box>
      {/*
 <Box style={{ backgroundColor: "#191E30" }}>
        <Container>
          <PricingSub />
        </Container>
      </Box>
      */}

      <Box style={{ backgroundColor: "#E6F3FF" }}>
        <Container>
          <MeetTeam />
        </Container>
      </Box>
      <Box style={{ backgroundColor: "#448CDC" }}>
        <Container>
          <ContactName />
        </Container>
      </Box>

      <ShortFooter />
    </div>
  );
};

export default FinalHome;
