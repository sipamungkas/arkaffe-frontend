import { BrowserRouter, Switch, Route } from "react-router-dom";

import { homepage } from "./pages/HomePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={homepage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
