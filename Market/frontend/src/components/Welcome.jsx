import React from "react";
import styled from "styled-components";
import Robot from "../Images/robot.gif";
import Email from "../Images/email2.gif";
export default function Welcome({ currentUser }) {
  return (
    <Container>
      <img src={Email} alt="Robot" />
      <h1>
        Welcome,<span>{currentUser.name}!</span>
      </h1>
      <h3>Please select a chat to start Messaging a Seller </h3>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #272424;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #3cba92;
  }
`;
