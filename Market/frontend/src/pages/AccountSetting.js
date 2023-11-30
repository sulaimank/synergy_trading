import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import { Button, InputLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Page from "../components/Page";
import General from "../screens/Gerneral";
import Divider from "@mui/material/Divider";
import { MenuItem, Select } from "@mui/material";
import { Input } from "antd";
import ImageDropzone from "../pages/ImageDropzone";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import AntDesignSideBar from "../components/AntDesignSideBar";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
const drawerWidth = 240;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));
function AccountSetting(props) {
  const params = useParams();
  const [name, setName] = useState("");
  const [stockType, setStockType] = useState("");
  const [primaryTags, setPrimaryTags] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [calculatedProfit, setCalculatedProfit] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [pdfUpload, setPdfUpload] = useState("");
  const [streamingDate, setStreamingDate] = useState("");
  const [streamingTime, setStreamingTime] = useState("");
  const [streamingLink, setStreamingLink] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { id: productId } = params;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading } = userSignin;
  const [formError, setFormError] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const commonStyles = {
    bgcolor: "background.paper",
    m: 1,
  };
  const productDetails = (e) => {
    e.preventDefault();
    axios
      .post(
        "/api/products",
        {
          name: name,
          stockType: stockType,
          primaryTags: primaryTags,
          description: description,
          price: price,
          description: description,
          calculatedProfit: 500,
          deliveryMethod: deliveryMethod,
          pdfUpload: pdfUpload,
          streamingDate: streamingDate,
          streamingTime: streamingTime,
          streamingLink: streamingLink,
          category: category,
          thumbnail:
            "https://images.pexels.com/photos/186464/pexels-photo-186464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      )
      .then((res) => {
        navigate("/successpage");
        toast.success(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => {
        if (err) {
          toast.error("😲 There is an issue with your upload", {
            position: "top-right",

            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

          <AntDesignSideBar />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <General />
        </Box>
      </Box>
    </div>
  );
}

AccountSetting.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AccountSetting;
