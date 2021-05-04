import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./pages/authorization/login/Login";
import SignUp from "./pages/authorization/signup/SignUp";
import ForgotPassword from "./pages/authorization/forgot/ForgotPassword";
import ResetPassword from "./pages/authorization/forgot/ResetPassword";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product/ProductDetail";
import History from "./pages/history/History";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chat/Chat";
import ChatRoom from "./pages/chat/ChatRoom";
import NewProduct from "./pages/product/NewProduct";
import EditProduct from "./pages/product/EditProduct";
import Checkout from "./pages/checkout/Checkout";
import ManageOrder from "./pages/manageOrder/ManageOrder";
import Dashboard from "./pages/dashboard/Dashboard";
import NewPromo from "./pages/promo/NewPromo";
import EditPromo from "./pages/promo/EditPromo";
import PrivateRoute from "./components/route/PrivateRouteV2";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute
          path="/login"
          exact
          protect={"isLoggedIn"}
          redirectTo={"/"}
        >
          <Login />
        </PrivateRoute>
        <PrivateRoute
          path="/signup"
          exact
          protect={"isLoggedIn"}
          redirectTo={"/"}
        >
          <SignUp />
        </PrivateRoute>
        <PrivateRoute
          path="/login/recover"
          exact
          protect={"isLoggedIn"}
          redirectTo={"/products"}
        >
          <ForgotPassword />
        </PrivateRoute>
        <PrivateRoute
          path="/login/reset"
          exact
          protect={"isLoggedIn"}
          redirectTo={"/products"}
        >
          <ResetPassword />
        </PrivateRoute>
        {/* <Route path="/login" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login/recover" component={ForgotPassword} />
        <Route path="/login/reset" component={ResetPassword} /> */}
        <Route path="/products" exact component={Product} />
        <Route path="/products/detail" component={ProductDetail} />
        <PrivateRoute path="/products/new" redirectTo={"/login"}>
          <NewProduct />
        </PrivateRoute>
        <PrivateRoute path="/products/edit" redirectTo={"/login"}>
          <EditProduct />
        </PrivateRoute>
        <Route path="/history" component={History} />
        <PrivateRoute path="/profile" redirectTo={"/login"}>
          <Profile />
        </PrivateRoute>
        <Route path="/chat" exact component={Chat} />
        <Route path="/chat/room" component={ChatRoom} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/manage-order" component={ManageOrder} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/promo/new" component={NewPromo} />
        <Route path="/promo/edit" component={EditPromo} />
      </Switch>
    </Layout>
  );
}

export default App;
