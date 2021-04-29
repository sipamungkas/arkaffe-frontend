import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../login/Login.css";

import InputForm from "../../../components/inputform/InputForm";

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      phone: "",
    };
  }

  //   submitHandler = (e) => {
  //     e.preventDefault();
  //     const signup = {
  //       email: this.state.email,
  //       password: this.state.password,
  //       phone: this.state.phone,
  //     };
  //     if (!this.state.email || !this.state.password) {
  //       console.log("Empty Field");
  //     }
  //   };

  render() {
    return (
      <>
        <main className="container-fluid container-main">
          <div className="row no-gutter">
            <div className="col-6 img-container">
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 login-container">
              <div className="upper-section">
                <span className="upper-content">
                  <Link className="text-arkaffe" to="/">
                    <img
                      alt="logo"
                      src="/assets/icons/icon_arkaffe.png"
                      style={{ width: "30px" }}
                    />
                    Arkaffe
                  </Link>
                  <Link to="/login" className="btn btn-signup">
                    Login
                  </Link>
                </span>
              </div>
              <form className="middle-section">
                <h2 className="title">Sign Up</h2>
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
                <InputForm
                  id={"phone"}
                  type={"number"}
                  name={"phone"}
                  placeHolder={"Enter your phone number"}
                  label={"Phone Number :"}
                  onchangeHandler={(e) =>
                    this.setState({ phone: e.target.value })
                  }
                />
                <div className="button-group">
                  <button type="submit" className="btn btn-login">
                    Sign Up
                  </button>
                  <button type="button" className="btn btn-google">
                    <img
                      alt="google"
                      src="/assets/icons/icon_google.png"
                      style={{ width: "30px" }}
                    ></img>
                    Sign Up with Google
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
          {/* <footer className="bottom-section">
            <div className="row">
              <div className="app-info">
                <div className="app-name">
                  <img
                    alt="logo"
                    src="/assets/icons/icon_arkaffe.png"
                    style={{ width: "30px" }}
                  ></img>
                  Arkaffe Coffee Shop
                </div>
                <p className="app-description">
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
                <div className="app-social">
                  <img
                    alt="facebook"
                    src="/assets/icons/icon_facebook.png"
                    style={{ width: "30px" }}
                  ></img>
                  <img
                    alt="twitter"
                    src="/assets/icons/icon_twitter.png"
                    style={{ width: "30px" }}
                  ></img>
                  <img
                    alt="instagram"
                    src="/assets/icons/icon_instagram.png"
                    style={{ width: "30px" }}
                  ></img>
                </div>
                <p className="app-trademark">@2021Arkaffe</p>
              </div>
              <div className="product-info">
                <h4 className="info-title">Product</h4>
                <p className="info-download">Download</p>
                <p className="info-pricing">Pricing</p>
                <p className="info-locations">Locations</p>
                <p className="info-countries">Countries</p>
                <p className="info-blog">Blog</p>
              </div>
              <div className="misc-info">
                <h4 className="misc-title">Engage</h4>
                <p className="misc-coffeeshop">Coffee Shop?</p>
                <p className="misc-faq">FAQ</p>
                <p className="misc-about">About Us</p>
                <p className="misc-privacy">Privacy Policy</p>
                <p className="misc-tos">Terms of Service</p>
              </div>
            </div>
          </footer> */}
        </main>
      </>
    );
  }
}

export default SignUp;
