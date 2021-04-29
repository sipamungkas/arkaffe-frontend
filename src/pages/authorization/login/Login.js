import React, { Component } from "react";
import { Link } from "react-router-dom";
import Toaster, { notify } from "react-notify-toast";
import "./Login.css";
import InputForm from "../../../components/inputform/InputForm";
import { loginHandler } from "../../../redux/actions/Auth";
import { connect } from "react-redux";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    const { isLoggedIn } = this.props.loginReducer;
    if (isLoggedIn) return this.props.history.replace("/products");
  }

  componentDidUpdate(prevProps) {
    const { isRejected, error, isLoggedIn } = this.props.loginReducer;
    if (isLoggedIn) {
      return this.props.history.replace("/products");
    }
    if (prevProps !== this.props) {
      if (isRejected) {
        const errmessage =
          error?.response?.data?.message ||
          error.message ||
          "Internal Server Error";
        return notify.show(errmessage, "error");
      }
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    const auth = {
      email: this.state.email,
      password: this.state.password,
    };
    if (!auth.email || !auth.password) {
      return notify.show("Email or Password can not be empty", "error");
    }
    this.props.onLoginHandler(auth);
  };

  render() {
    console.log(this.state);
    return (
      <>
        <main className="container-fluid container-main">
          <div className="row no-gutter">
            <Toaster />
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
                  <Link to="/signup" className="btn btn-signup">
                    Sign Up
                  </Link>
                </span>
              </div>
              <form className="middle-section" onSubmit={this.submitHandler}>
                <h2 className="title">Login</h2>
                <InputForm
                  id={"email"}
                  type={"email"}
                  placeHolder={"Enter your email address"}
                  label={"Email Address :"}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                />
                <InputForm
                  id={"password"}
                  type={"password"}
                  name={"password"}
                  placeHolder={"Enter your password"}
                  label={"Password :"}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <Link to="/login/recover" className="link-reset">
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

const mapStatetoProps = (state) => {
  const { loginReducer } = state;
  return { loginReducer };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onLoginHandler: (data) => {
      dispatch(loginHandler(data));
    },
  };
};

const connectedLogin = connect(mapStatetoProps, mapDispatchtoProps)(Login);

export default connectedLogin;
