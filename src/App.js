import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./pages/authorization/login/Login";
import SignUp from "./pages/authorization/signup/SignUp";
import ForgotPassword from "./pages/authorization/forgot/ForgotPassword";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product/ProductDetail";
import History from "./pages/history/History";
import Profile from "./pages/profile/Profile";
import Chat from "./pages/chat/Chat";
import ChatRoom from "./pages/chat/ChatRoom";
import NewProduct from "./pages/product/NewProduct";
import EditProduct from "./pages/product/EditProduct";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/products" exact component={Product} />
        <Route path="/products/detail" component={ProductDetail} />
        <Route path="/products/new" component={NewProduct} />
        <Route path="/products/edit" component={EditProduct} />
        <Route path="/history" component={History} />
        <Route path="/login/recover" component={ForgotPassword} />
        <Route path="/profile" component={Profile} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/chat/room" component={ChatRoom} />
      </Switch>
    </Layout>
  );
}

export default App;
