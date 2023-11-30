import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "../Images/profile.png";
import { Form, FormControl } from "react-bootstrap";
import Avatar from "@mui/material/Avatar";
function Contacts({ contacts, currentUser, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);

  const [currentSelected, setCurrentSelected] = useState(undefined);

  // this is to search for seller
  const [search, setSearch] = useState("");

  useEffect(async () => {
    if (currentUser) {
      setCurrentUserName(currentUser.name);
    }
  }, [currentUser]);

  //changing the chat selected
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
  return (
    <>
      <Container>
        <div style={{ paddingTop: 20, marginBottom: 20 }}>
          {/*
          <Form>
            <FormControl
              type="search"
              variant="Secondary"
              placeholder={"Search Seller to Start Chatting"}
              outline="none"
              className="me-2"
              aria-label="Search "
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </Form>
            */}
        </div>
        <div className="contacts">
          {contacts
            .filter((contact) => {
              if (contact._id != currentUser._id) {
                return contact;
              }
            })

            .map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <Avatar>{contact.name.charAt(0)}</Avatar>
                  </div>
                  <div className="username">
                    <h3>{contact.name}</h3>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Contacts;

const Container = styled.div`
  display: grid;

  overflow: hidden;
  background-color: #ffffff40;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: #8d8d8d;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    min-height: 30rem;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #4d4a4a50;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #cacacaa7;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
    .selected {
      background-color: #a4a5a7;
    }
  }
  .current-user {
    background-color: #414141;
    display: flex;
    justify-content: center;
    height: 5rem;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 10rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
