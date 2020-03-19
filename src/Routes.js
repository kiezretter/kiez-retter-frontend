import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BusinessOverview from './views/BusinessOverview/BusinessOverview';
import HomePage from './views/HomePage/HomePage';

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/kiez" component={BusinessOverview} />
          <Route exact path="/" component={HomePage} />
        </Switch>
    </Router>
  );
}

export default Routes;