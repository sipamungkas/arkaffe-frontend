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

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/products" component={Product} />
        <Route path="/history" component={History} />
        <Route path="/login/recover" component={ForgotPassword}></Route>
        <Route path="/dev" component={ProductDetail}></Route>
        <Route path="/profile" component={Profile} />
      </Switch>
    </Layout>
  );
}

export default App;
