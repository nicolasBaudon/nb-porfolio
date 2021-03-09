import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Works from "../pages/works/works";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/works">
        <Works />
      </Route>
    </Switch>
  );
};

export default Routes;
