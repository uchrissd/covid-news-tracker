import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landingPage";
import News from "./latestNews";
import Tips from "./tips";
import Newsletter from "./newsletter";
import Tracker from "./tracker";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/latestNews" component={News} />
    <Route path="/tipss" component={Tips} />
    <Route path="/newsletter" component={Newsletter} />
    <Route path="/tracker" component={Tracker} />
  </Switch>
);

export default Main;
