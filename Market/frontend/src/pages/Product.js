import { cardActionAreaClasses } from "@mui/material";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  ref,
} from "firebase/firestore";
import { db } from "../firebase";
function Product(props) {
  const [cards, setCards] = useState([]);
  const cardsRef = collection(db, "cardcollection");
  let { id } = useParams();
  let { name } = useParams();
  useEffect(() => {
    const getCards = async () => {
      const data = await getDocs(cardsRef);

      setCards(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCards();
  }, []);

  return (
    <div>
      this is{id} Name is{name}
    </div>
  );
}

export default Product;
