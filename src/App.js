import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Login from "./pages/Authorization/Login/Login";
import SignUp from "./pages/Authorization/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" component={SignUp}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
