import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '/imports/ui/App';


const Routes = () => (
  <Router history={ReactRouter.lib.BrowserHistory.history}>
    <Route component={App}>
      <Route path="/" component={Home}/>
    </Route>
  </Router>
);

export default Routes;