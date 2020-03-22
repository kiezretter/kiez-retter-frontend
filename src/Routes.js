import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BusinessOverviewView from './views/BusinessOverview/BusinessOverview';
import HomePageView from './views/HomePage/HomePage.jsx';

import AGBView from './views/AGB/AGB.jsx';
import DatenschutzView from './views/Datenschutz/Datenschutz.jsx';
import FAQView from './views/FAQ/FAQ.jsx';
import ImpressumView from './views/Impressum/Impressum.jsx';

const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomePageView} />
          <Route exact path="/kiez" component={BusinessOverviewView} />
          <Route exact path="/agb" component={AGBView} />
          <Route exact path="/datenschutz" component={DatenschutzView} />
          <Route exact path="/faq" component={FAQView} />
          <Route exact path="/impressum" component={ImpressumView} />
        </Switch>
    </Router>
  );
}

export default Routes;