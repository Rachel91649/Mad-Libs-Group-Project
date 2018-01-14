import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../home";
import MadLibs from "./MadLibs/MadLibs"

const App = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/madlibs">Mad Libs</Link>
    </nav>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/madlibs" component={MadLibs}/>
    </Switch>
  </div>
);

export default App;