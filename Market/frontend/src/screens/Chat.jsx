import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
import ChatContainer from "../components/ChatContainer";
import ShortFooter from "../components/ShortFooter";
import { io } from "socket.io-client";
function Chat() {
  const host = "http://localhost:5079";
  const socket = useRef();
  const navigate = useNavigate();
  // holding contacts information
  const [contacts, setContacts] = useState([]);
  //get the current from local storage
  const [currentUser, setCurrentUser] = useState(undefined);
  //getting loading screen
  const [isLoaded, setIsLoaded] = useState(false);
  // but we can get it by caputring the login state
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // this use effect was supposed to get the current user logged in

  // this hook is going to keep track of the chats
  const [currentChat, setCurrentChat] = useState(undefined);
  const [notification, setNotification] = useState(false);
  //getting the IO connection
  useEffect(() => {
    if (userInfo) {
      socket.current = io(host);
      socket.current.emit("add-user", userInfo._id);
    }
  }, [userInfo]);
  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  // another try of the useEffect here
  useEffect(() => {
    const getUser = async () => {
      if (userInfo.isSeller == false) {
        try {
          const res = await axios(
            `/api/users/sellerContact`,

            {
              headers: { Authorization: `Bearer ${userInfo.token}` },
            }
          );
          setContacts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
      if (userInfo.isAdmin == true) {
        try {
          const res = await axios(
            `/api/users/`,

            {
              headers: { Authorization: `Bearer ${userInfo.token}` },
            }
          );
          setContacts(res.data);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          const res = await axios(
            `/api/users/buyerContact`,

            {
              headers: { Authorization: `Bearer ${userInfo.token}` },
            }
          );
          setContacts(res.data);
        } catch (err) {
          console.log(err);
        }
      }
    };
    getUser();
  }, [userInfo]);

  return (
    <div style={{ marginBottom: 10 }}>
      <Container style={{ marginBottom: 10, marginTop: 10 }}>
        <Paper>
          <div className="container">
            <Contacts
              contacts={contacts}
              currentUser={userInfo}
              changeChat={handleChatChange}
            />
            {currentChat === undefined ? (
              <Welcome currentUser={userInfo} />
            ) : (
              <ChatContainer
                currentChat={currentChat}
                currentUser={userInfo}
                socket={socket}
              />
            )}
          </div>
        </Paper>
      </Container>
      <ShortFooter />
    </div>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  .container {
    height: 100vh;
    width: 100vw;
    background-color: #ffffff;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 120px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;
