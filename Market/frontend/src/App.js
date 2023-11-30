import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { signout } from "./actions/userActions";
import StockMainDash from "./screens/StockMainDash";
import CoinMarkets from "./screens/CoinMarkets";
import UserTotals from "./screens/UserTotals";
import EmailVerifications from "./screens/EmailVerifications";
import AntDash from ".//components/AntDash";
import Dashboard2023 from "./pages/Dashboard2023";
import AccountSetting from "./pages/AccountSetting";
import MultistepForm from "./screens/AddProductForm/MultistepForm";
import Checkout from "./screens/AddProductForm/Checkout";
import SellerHomePage from "./screens/Seller Home Page/SellerHomePage";
import Navbar from "./components/MainFeed/Navbar";
import FinanceDashboard from "./AdminDashboard/FinanceDashboard";
import General from "./screens/Gerneral";
import PaymentFinal from "./pages/PaymentInteraction/PaymentFinal";
import AdminRoute from "./components/AdminRoute";
import HomeDashboardFinal from "./screens/HomeDashboardFinal";
import Faq2 from "./screens/Faq2";
import UpdatedSearchPage from ".//screens/UpdatedSearch/UpdatedSearchPage";
import StreamingHome from "./screens/StreamingHome";
import SuccessPageAdd from "./screens/SuccessPageAdd";
import MainDashboard from "./components/DashboardAdminFinal/MainDashboard";
import SectionFooter from "./components/SectionFooter";
import PrivateRoute from "./components/PrivateRoute";
import ApplicationSub from "./screens/ApplicationSub";
import ResetPasswords from "./screens/ResetPasswords";
import ProductDetailsNew from "./screens/NewProductDetails/ProductsDetailsPage";
import RegisterCover from "./screens/RegisterCover";
import AreaChart from "./screens/AreaChart";
import FinalHome from "./screens/FinalHome";
import ProfileEditScreenNew from "./screens/ProfileEditScreenNew";
import AdminDashNew from "./screens/AdminDashNew";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import RequestSeller from "./screens/RequestSeller";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import StickyFooter from "./components/StickyFooter";
import Navbar2 from "./screens/Navbar2.js";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import Marco2 from "./screens/Marco2";
import Becomeseller from "./screens/Becomeseller";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginCover from "./screens/LoginCover";
import Main from "./pages/Main";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/Signup";
import Paperbase from "./AdminDash/Paperbase";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/Sign";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SellerRoute from "./components/SellerRoute";
import SellerScreen from "./screens/SellerScreen";
import SellerOrder from "./screens/SellerOrder";
import SocialMediaFollowers from "./pages/SocialMediaFollowerpage/SocialMediaFollowers";
import SearchBox from "./components/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import SellerApplicationList from "./screens/SellerApplicationList";
import { listProductCategories } from "./actions/productActions";
import LoadingBox from "./components/LoadingBox";
import MessageBox from "./components/MessageBox";
import OnePageForm from "./screens/AddProductForm/OnePageForm";
import DashboardScreen from "./screens/DashboardScreen";
import SupportScreen from "./screens/SupportScreen";
import Chat from "./screens/Chat";
import New from "./pages/New";
import AddProduct from "./screens/AddProduct";
import Faq from "./screens/Faq";
import ResetPassword from "./screens/ResetPassword";
function App() {
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
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
    <BrowserRouter>
      <Navbar style={{ Zindex: "-1" }} />
      <main>
        <Routes>
          <Route
            path="/profileTest"
            element={<ProfileEditScreenNew />}
            exact
          ></Route>
          <Route path="/sellerHome" element={<SellerHomePage />} exact></Route>
          <Route path="/adminhome" element={<Paperbase />} exact></Route>
          <Route path="/" element={<FinalHome />}></Route>
          <Route path="/ant" element={<AntDash />}></Route>
          <Route path="/finance" element={<MainDashboard />}></Route>
          <Route path="/seller/:id" element={<SellerScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/graphAPI" element={<AreaChart />}></Route>
          <Route path="/cart/:id" element={<CartScreen />}></Route>
          <Route path="/paymentFinal" element={<PaymentFinal />}></Route>
          <Route path="/product/:id" element={<ProductScreen />} exact></Route>
          <Route path="/userDash" element={<Dashboard2023 />} exact></Route>
          <Route
            path="/accountSetting"
            element={<AccountSetting />}
            exact
          ></Route>
          <Route path="/request" element={<RequestSeller />} exact></Route>
          <Route path="/reset" element={<ResetPasswords />} exact></Route>
          <Route
            path="/productDetailsNew"
            element={<ProductDetailsNew />}
            exact
          ></Route>
          <Route
            path="/product/:id/edit"
            element={<ProductEditScreen />}
            exact
          ></Route>
          <Route path="/add" element={<Checkout />}></Route>
          <Route path="/onePage" element={<OnePageForm />}></Route>
          <Route path="/successpage" element={<SuccessPageAdd />}></Route>
          <Route path="/streamingHome" element={<StreamingHome />}></Route>
          <Route path="/signin" element={<LoginCover />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/register" element={<RegisterCover />}></Route>
          <Route path="/shipping" element={<ShippingAddressScreen />}></Route>
          <Route path="/payment" element={<PaymentMethodScreen />}></Route>
          <Route path="/placeorder" element={<PlaceOrderScreen />}></Route>
          <Route path="/order/:id" element={<OrderScreen />}></Route>
          <Route path="/orderhistory" element={<OrderHistoryScreen />}></Route>
          <Route path="/search/name" element={<SearchScreen />} exact></Route>
          <Route path="/becomeseller" element={<Becomeseller />} exact></Route>
          <Route path="/chat" element={<Chat />} exact></Route>
          <Route
            path="/socialMediaFollowers"
            element={<SocialMediaFollowers />}
            exact
          ></Route>
          <Route path="/coinMarkets" element={<Marco2 />}></Route>
          <Route
            path="/newSearch"
            element={<UpdatedSearchPage />}
            exact
          ></Route>

          <Route path="/faq" element={<Faq2 />} exact></Route>
          <Route path="/multi" element={<MultistepForm />} exact></Route>
          <Route
            path="/checkemail"
            element={<EmailVerifications />}
            exact
          ></Route>

          <Route
            path="/applicationsent"
            element={<ApplicationSub />}
            exact
          ></Route>
          <Route
            path="/search/name/:name"
            element={<SearchScreen />}
            exact
          ></Route>
          <Route path="/stockdash" element={<StockMainDash />} exact></Route>
          <Route
            path="/search/category/:category"
            element={<SearchScreen />}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            element={<SearchScreen />}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            element={<SearchScreen />}
            exact
          ></Route>

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <General />
              </PrivateRoute>
            }
          />

          <Route
            path="/productlist"
            element={
              <AdminRoute>
                <ProductListScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/applicationList"
            element={
              <AdminRoute>
                <SellerApplicationList />
              </AdminRoute>
            }
          />
          <Route
            path="/userTotal"
            element={
              <AdminRoute>
                <UserTotals />
              </AdminRoute>
            }
          />
          <Route
            path="/productlist/pageNumber/:pageNumber"
            element={
              <AdminRoute>
                <ProductListScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/orderlist"
            element={
              <AdminRoute>
                <OrderListScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/userlist"
            element={
              <AdminRoute>
                <UserListScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/user/:id/edit"
            element={
              <AdminRoute>
                <ProfileEditScreenNew />
              </AdminRoute>
            }
          />
          <Route path="/adminDash" element={<AdminDashNew />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route
            path="/support"
            element={
              <AdminRoute>
                <SupportScreen />
              </AdminRoute>
            }
          />
          <Route
            path="/productlist/seller"
            element={
              <SellerRoute>
                <ProductListScreen />
              </SellerRoute>
            }
          />
          <Route
            path="/orderedlist"
            exact
            element={
              <SellerRoute>
                <SellerOrder />
              </SellerRoute>
            }
          />

          <Route path="/home" element={<SearchScreen />} exact></Route>
          <Route path="/nav" element={<Navbar2 />} />
        </Routes>
      </main>

      {/* <StickyFooter />*/}
    </BrowserRouter>
  );
}

export default App;
