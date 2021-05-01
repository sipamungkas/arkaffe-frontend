import React from "react";
import classes from "./ButtonGroup.module.css";
import { connect } from "react-redux";

function ButtonGroup(props) {
  const role = props.loginReducer.user.role;
  console.log(role)



  return (
    <div className={classes["button-group"]}>
      <button className={classes["btn-cart"]} type="button">
        Add to Cart
      </button>
      <button className={classes["btn-ask"]} type="button">
        Ask a Staff
      </button>
      <button className={classes["btn-delete"]} type="button">
        Delete Menu
      </button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};
const connectedButtonGroup = connect(mapStatetoProps)(ButtonGroup);
export default connectedButtonGroup;
