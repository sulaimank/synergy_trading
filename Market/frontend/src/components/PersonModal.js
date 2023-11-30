import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  ref,
} from "firebase/firestore";
import { db } from "../firebase";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
function PersonModal() {
  return <div></div>;
}

export default PersonModal;
