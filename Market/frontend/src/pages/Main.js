import React from "react";
import Contain1 from "../components/Contain1";
import { Grid } from "@mui/material";
import Friends from "../components/Friends";
import More from "../components/More";
import MainIocns from "../components/MainIocns";
import Questions from "../components/Questions";
function Main() {
  return (
    <div style={{ marginBottom: 20 }}>
      <Contain1 />

      <Friends />
      <More />
      <MainIocns />
      <Questions />
    </div>
  );
}

export default Main;
