import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light bg-white ">
      <a className="navbar-brand" href="/">
        <img
          className={classes["brand-logo"]}
          src={"/assets/icons/icon_arkaffe.png"}
          alt="Arkaffe Icon"
        />
        Coffe Shop
      </a>
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
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Product
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Your Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              History
            </a>
          </li>
        </ul>
        <div className={classes["button-container"]}>
          <button className={`btn ${classes["btn-login"]}`}>Login</button>
          <button className={`btn ${classes["btn-signup"]}`}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
