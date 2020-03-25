import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../authContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}
