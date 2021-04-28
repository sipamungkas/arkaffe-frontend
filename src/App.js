import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./pages/authorization/login/Login";
import SignUp from "./pages/authorization/signup/SignUp";
import ForgotPassword from "./pages/authorization/forgot/ForgotPassword";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import History from "./pages/history/History";

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
      </Switch>
    </Layout>
  );
}

export default App;
