import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contact"></Route>
      <Route exact path="/works"></Route>
    </Switch>
  );
};

export default Routes;
