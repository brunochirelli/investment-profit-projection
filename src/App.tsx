import FutureValueForm from "components/FutureValueForm";
import FutureValueResult from "components/FutureValueResult";
import Layout from "components/Layout";
import NotFound from "pages/404";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CalculatorRoute from "routes/CalculatorRoute";
import Home from "./pages/Home";

/**
 * @component
 * This components contains all the routing for the app.
 * The router uses a HoC to extend the Router functionality
 * receiving a "form" and a "result" component.
 *
 * Check the HoC file for more information.
 */

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <CalculatorRoute
          exact
          path="/future-value"
          component={Layout}
          form={FutureValueForm}
          result={FutureValueResult}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
