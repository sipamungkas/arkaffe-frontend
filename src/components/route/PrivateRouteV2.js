import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({
  loginReducer,
  children,
  redirectTo,
  protect,
  ...rest
}) {
  if (protect === "isLoggedIn") {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          !loginReducer.isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: redirectTo || "/",
              }}
            />
          )
        }
      />
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginReducer.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectTo || "/",
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export default ConnectedPrivateRoute;
