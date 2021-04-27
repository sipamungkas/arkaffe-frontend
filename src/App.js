import { Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Layout>
  );
}

export default App;
