import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Profile from "../Images/profile.png";
import Avatar from "@mui/material/Avatar";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
export default function ChatContainer({ currentChat, currentUser, socket }) {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const scrollRef = useRef();

  // here we are going to Get the messages
  useEffect(async () => {
    if (currentChat) {
      const message = {
        from: currentUser._id,
        to: currentChat._id,
      };
      const response = await axios.post("/api/messages/getmess", message, {
        headers: { Authorization: `Bearer ${currentUser.token}` },
      });
      setMessages(response.data);
    }
  }, [currentChat]);

  // sending messages work
  const handleSendMsg = async (msg) => {
    // this is basically the key that gets sent in
    const message = {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    };

    await axios.post("/api/messages", message, {
      headers: { Authorization: `Bearer ${currentUser.token}` },
    });

    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      message: msg,
    });
    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  //scroll into the view the new messages
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <Avatar>{currentChat.name.charAt(0)}</Avatar>
          </div>
          <div className="username">
            <h3>{currentChat.name}</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #a19f9f;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #91020239;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #ffffff;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #36a1df;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #6d6d6d1f;
        color: #777777;
      }
    }
  }
`;
