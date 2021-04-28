import { useHistory, Link } from "react-router-dom";

import classes from "./Navbar.module.css";

export default function Navbar() {
  const history = useHistory();
  return (
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
            <Link className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Your Cart
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              History
            </Link>
          </li>
        </ul>
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
      </div>
    </nav>
  );
}
