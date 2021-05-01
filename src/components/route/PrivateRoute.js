import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ authReducer, children, ...rest }) {
  return (
    <Route>
      {...rest}
      render=
      {({ location }) =>
        authReducer.isLoggedin ? children : <Redirect to={{ pathname: "/" }} />
      }
    </Route>
  );
}

const mapStatetoProps = (state) => {
    return {
        authReducer: state.authReducer,
    }
}

const ConnectedPrivateRoute = connect(mapStatetoProps)(PrivateRoute)

export default ConnectedPrivateRoute;
