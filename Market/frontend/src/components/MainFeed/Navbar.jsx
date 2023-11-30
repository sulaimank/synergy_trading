import { Mail, Notifications, Pets } from "@mui/icons-material";
import Link from "@mui/material/Link";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";

import logo4 from "../../Image/logo4.png";
import {
  Container,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import FaceIcon from "@mui/icons-material/Face";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userActions";

import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { listProductCategories } from "../../actions/productActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/name/${name}` || ``);
    console.log(userInfo);
  };

  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  return (
    <AppBar position="sticky" style={{ background: "#ffffff", color: "grey" }}>
      <StyledToolbar>
        <img src={logo4} alt="logo" style={{ height: "75px" }} />

        <Link href="/home" style={{ color: "grey" }}>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <div variant="contained" {...bindTrigger(popupState)}>
                  MarketPlace
                </div>
              </React.Fragment>
            )}
          </PopupState>
        </Link>
        {userInfo ? (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <div variant="contained" {...bindTrigger(popupState)}>
                  {userInfo.name}
                </div>
                <Menu {...bindMenu(popupState)}>
                  <Link href="/accountSetting">
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>{" "}
                  </Link>
                  <Link href="/orderhistory">
                    <MenuItem onClick={popupState.close}>Your Orders</MenuItem>
                  </Link>

                  <Link href="/request">
                    <MenuItem onClick={popupState.close}>
                      Apply to be Seller
                    </MenuItem>
                  </Link>
                  <Link href="/stockdash">
                    <MenuItem onClick={popupState.close}>
                      Your Dashboard
                    </MenuItem>
                  </Link>
                  <Link href="/socialMediaFollowers">
                    <MenuItem onClick={popupState.close}>
                      Social Media Followers
                    </MenuItem>
                  </Link>
                  <MenuItem onClick={signoutHandler}>Sign Out</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        ) : (
          <Link style={{ color: "grey" }} href="/signin">
            <MenuItem>Sign In</MenuItem>
          </Link>
        )}
        {/* This is the first if user */}
        {userInfo && userInfo.isSeller && (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <div variant="contained" {...bindTrigger(popupState)}>
                  Seller
                </div>
                <Menu {...bindMenu(popupState)}>
                  <Link href="/userDash">
                    {" "}
                    <MenuItem onClick={popupState.close}>Seller Home</MenuItem>
                  </Link>
                  <Link href="/stockdash">
                    {" "}
                    <MenuItem onClick={popupState.close}>
                      Add a Listing
                    </MenuItem>
                  </Link>
                  <Link href="/productlist/seller">
                    {" "}
                    <MenuItem onClick={popupState.close}>Edit Listing</MenuItem>
                  </Link>
                  <Link href="/orderedlist">
                    <MenuItem onClick={popupState.close}>
                      Customer Orders
                    </MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        )}
        {userInfo && userInfo.isAdmin && (
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <div variant="contained" {...bindTrigger(popupState)}>
                  Admin
                </div>
                <Menu {...bindMenu(popupState)}>
                  <Link href="/adminDash">
                    <MenuItem onClick={popupState.close}>Dashboard</MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        )}
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Link style={{ color: "grey" }} href="/faq">
                <div variant="contained" {...bindTrigger(popupState)}>
                  FAQ
                </div>
              </Link>
            </React.Fragment>
          )}
        </PopupState>
        <Form className="d-flex" onSubmit={submitHandler}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          </Paper>
        </Form>

        <Icons>
          <Link href="/cart">
            <Button>
              <ShoppingCartIcon style={{ color: "#46a4da" }}></ShoppingCartIcon>
              {cartItems.length > 0 && (
                <span style={{ color: "#46a4da" }}>{cartItems.length}</span>
              )}
            </Button>
          </Link>

          {userInfo ? (
            <Avatar>{userInfo.name.charAt(0)}</Avatar>
          ) : (
            <Avatar>
              <FaceIcon />
            </Avatar>
          )}
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
