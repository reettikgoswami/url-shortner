import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { setAuthHeaders } from "apis/axios.js";
import Home from "./layout/Home";

const App = ({ urls }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuthHeaders();
  }, [urls]);

  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route exact path="/" render={() => <Home urls={urls} />} />
      </Switch>
    </Router>
  );
};

export default App;
