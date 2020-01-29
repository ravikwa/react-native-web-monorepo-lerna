import React from "react";
import { Route, Router } from "react-router";
import { createBrowserHistory as createHistory } from "history";
import LoginScreen from "shared/src/screens/LoginScreen";
import RegisterScreen from "shared/src/screens/RegisterScreen";

const history = createHistory();

const routes = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </div>
  </Router>
);

export default routes;
