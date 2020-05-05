import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./landingPage";
import News from "./latestNews";
import Tips from "./tips";
import Newsletter from "./newsletter";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Main;
