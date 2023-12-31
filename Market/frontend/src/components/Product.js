import React from "react";
import "./cards.css";
import Rating from "./Rating";
import line from "../Images/line.png";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Avatar from "@mui/joy/Avatar";
import { useDispatch, useSelector, useEffect } from "react-redux";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import "../screens/UpdatedSearch/UpdatedSellers.css";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
export default function Product(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const { product } = props;
  return (
    <div
      elevation={0}
      key={product._id}
      style={{ marginLeft: "10px", marginRight: "10px" }}
    >
      <Card
        sx={{
          width: 300,
          bgcolor: "initial",
          boxShadow: "none",
          "--Card-padding": "0px",
          mt: 5,
        }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src={product.thumbnail}
                srcSet={product.thumbnail}
                loading="lazy"
                alt="Yosemite by Casey Horner"
              />
            </figure>
          </AspectRatio>
          <CardCover
            className="gradient-cover"
            sx={{
              "&:hover, &:focus-within": {
                opacity: 1,
              },
              opacity: 0,
              transition: "0.1s ease-in",
              background:
                "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
            }}
          >
            {/* The first box acts as a container that inherits style from the CardCover */}
            <Box>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  flexGrow: 1,
                  alignSelf: "flex-end",
                }}
              >
                <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                  <Link
                    href={`/product/${product._id}`}
                    overlay
                    underline="none"
                    sx={{
                      color: "#fff",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      display: "block",
                    }}
                  >
                    {product.name}
                  </Link>
                </Typography>
                <IconButton size="sm" color="neutral" sx={{ ml: "auto" }}>
                  <CreateNewFolder />
                </IconButton>
                <IconButton size="sm" color="neutral">
                  <Favorite />
                </IconButton>
              </Box>
            </Box>
          </CardCover>
        </Box>
        <Box sx={{ display: "flex", gap: 1, mt: 1.5, alignItems: "center" }}>
          <Avatar
            src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            size="sm"
            sx={{ "--Avatar-size": "1.5rem" }}
          />
          <Typography sx={{ fontSize: "sm", fontWeight: "md" }}></Typography>
          <Chip
            variant="outlined"
            color="neutral"
            size="sm"
            sx={{
              borderRadius: "sm",
              py: 0.25,
              px: 0.5,
            }}
          >
            {product.stockType}
          </Chip>
          <Link
            href="#dribbble-shot"
            level="body3"
            underline="none"
            startDecorator={<Favorite />}
            sx={{
              fontWeight: "md",
              ml: "auto",
              color: "text.secondary",
              "&:hover": { color: "danger.plainColor" },
            }}
          >
            117
          </Link>
          <Link
            href={`/product/${product._id}`}
            level="body3"
            underline="none"
            startDecorator={<AttachMoneyIcon />}
            sx={{
              fontWeight: "md",
              color: "text.secondary",
              "&:hover": { color: "primary.plainColor" },
            }}
          >
            {product.price}
          </Link>
        </Box>
      </Card>
    </div>
  );
}
