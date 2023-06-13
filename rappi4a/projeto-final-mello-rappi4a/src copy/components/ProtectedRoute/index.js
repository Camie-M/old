import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { path, component } = props;
  const history = useHistory();
  const isLoggedIn = Boolean(localStorage.getItem("rappi4"));

  !isLoggedIn && history.push("/login");
  return isLoggedIn ? <Route exact path={path} component={component} /> : null;
};

export default ProtectedRoute;
