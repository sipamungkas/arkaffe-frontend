import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import InputForm from "../../../components/inputform/InputForm";

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  // submitHandler = (e) => {
  //   e.preventDefault();
  //   const auth = {
  //     email: this.state.email,
  //     password: this.state.password,
  //   };
  //   if (!this.state.email || !this.state.password) {
  //     console.log("Empty Field");
  //   }
  // };
  render() {
    return (
      <>
        <main className="container-fluid container-main">
          <div className="row no-gutter">
            <div className="col-6 img-container">
              <img
                className="img-fluid img-display"
                alt=""
                src="/assets/images/img_auth.png"
              ></img>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 login-container">
              <div className="upper-section">
                <span className="upper-content">
                  <div className="text-arkaffe">
                    <img
                      alt="logo"
                      src="/assets/icons/icon_arkaffe.png"
                      style={{ width: "30px" }}
                    />
                    Arkaffe
                  </div>
                  <Link to="/signup" className="btn btn-signup">
                    Sign Up
                  </Link>
                </span>
              </div>
              <form className="middle-section">
                <h2>Login</h2>
                <InputForm
                  id={"email"}
                  type={"email"}
                  placeHolder={"Enter your email address"}
                  label={"Email Address :"}
                  onchangeHandler={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <InputForm
                  id={"password"}
                  type={"password"}
                  name={"password"}
                  placeHolder={"Enter your password"}
                  label={"Password :"}
                  onchangeHandler={(e) =>
                    this.setState({ password: e.target.value })
                  }
                />
                <Link to="/reset" className="link-reset">
                  Forgot password?
                </Link>
                <div className="button-group">
                  <button type="submit" className="btn btn-login">
                    Login
                  </button>
                  <button to="/signup" className="btn btn-google">
                    <img
                      alt="google"
                      src="/assets/icons/icon_google.png"
                      style={{ width: "30px" }}
                    ></img>
                    Login with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="popup">
            <span className="popup-content">
              <div className="text-popup">
                <h3>Get your member card now!</h3>
                <p>Let's join with our member and enjoy the deals.</p>
              </div>
              <div className="button-popup">
                <button type="button" className="btn btn-member">
                  Create Now
                </button>
              </div>
            </span>
          </div>
        </main>
      </>
    );
  }
}

export default Login;
