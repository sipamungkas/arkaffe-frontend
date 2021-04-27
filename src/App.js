import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { homepage } from "./pages/HomePage";
import Login from "./pages/Authorization/Login/Login";
import SignUp from "./pages/Authorization/SignUp"


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
