import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTable from "./components/MainTable";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainTable} />
      </Switch>
    </Router>
  );
}

export default App;
