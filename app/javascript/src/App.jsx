import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./layout/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </Router>
  );
};

export default App;
