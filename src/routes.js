import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Inbody from "./pages/Inbody/Inbody";

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Inbody} />
    </Router>
  );
};

export default Routes;
