import React, { Component } from "react";
import classes from "./ForgotPassword.module.css";

export class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
  }

  render() {
    console.log(this.state.email);
    return (
      <>
        <main
          className={`${classes["container-main"]}`}
          style={{ backgroundImage: `url("/assets/images/img_forgot.jpg")` }}
        >
          <div className={classes["main-content"]}>
            <h1 className={classes.title}>Forgot Your Password?</h1>
            <p className={classes["text-desc"]}>
              Don't worry, we got your back!
            </p>
            <form className={classes["form-group-email"]}>
              <input
                className={classes["email-input"]}
                type={"email"}
                placeholder={"Enter your email address to get link"}
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              ></input>
              <button className={classes["btn-send"]}>Send</button>
            </form>
            <p className={classes["text-desc"]}>
              Click here if you didn't receive any link in 2 minutes
            </p>
            <button className={classes["btn-resend"]} onClick={this.startTimer}>
              Resend Link
            </button>
            <p className={classes.countdown}>01 : 54</p>
          </div>
        </main>
      </>
    );
  }
}

export default ForgotPassword;
