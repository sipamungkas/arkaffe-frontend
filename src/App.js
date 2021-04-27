import {  Switch, Route } from "react-router-dom";

// import { homepage } from "./pages/HomePage";
import Login from "./pages/Authorization/Login/Login";
import SignUp from "./pages/Authorization/SignUp"
import Home from "./pages/home/Home";


function App() {
  return (
    <>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
    </>
  );
}

export default App;
