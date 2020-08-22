import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Route, Redirect } from "react-router-dom";
import app from "./firebase";

function PrivateRoute({ component: RouteComponent, ...rest }) {
  const { currentUser } = useContext(AuthContext);
  console.log(!!currentUser);
  const isLogin = app.auth().currentUser;
  console.log(isLogin);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
}

export default PrivateRoute;
