import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Navbar.module.css";
import LoggedIn from "./LoggedIn";

function Navbar(props) {
  const { isLoggedIn } = props.loginReducer;
  const history = useHistory();
  return (
    <div className="bg-white fixed-top w-100">
      <nav className="container navbar navbar-expand-lg navbar-light bg-white ">
        <Link className="navbar-brand" to="/">
          <img
            className={classes["brand-logo"]}
            src={"/assets/icons/icon_arkaffe.png"}
            alt="Arkaffe Icon"
          />
          Coffee Shop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Your Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/history">
                History
              </Link>
            </li>
          </ul>
          {isLoggedIn ? (
            <LoggedIn />
          ) : (
            <div className={classes["button-container"]}>
              <button
                className={`btn ${classes["btn-login"]}`}
                onClick={() => history.push("/login")}
              >
                Login
              </button>
              <button
                className={`btn ${classes["btn-signup"]}`}
                onClick={() => history.push("/signup")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};

const ConnectedNavbar = connect(mapStateToProps)(Navbar);
export default ConnectedNavbar;
