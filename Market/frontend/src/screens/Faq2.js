import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ShortFooter from "../components/ShortFooter";
import Container from "./Container";
import Content from "../components/Content";
import Headline from "../components/Headline";

const Faq2 = () => {
  const theme = useTheme();
  return (
    <div>
      <Box>
        <Box style={{ backgroundColor: "#E6F3FF" }}>
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container maxWidth={800}>
          <Content />
        </Container>
      </Box>
      <ShortFooter />
    </div>
  );
};

export default Faq2;
