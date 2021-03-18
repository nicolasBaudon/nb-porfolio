import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Contact from "../pages/contact/contact";
import Works from "../pages/works/works";
import Work from "../pages/works/work/work";

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
      <Route exact path="/works/work-:id">
        <Work />
      </Route>
    </Switch>
  );
};

export default Routes;
