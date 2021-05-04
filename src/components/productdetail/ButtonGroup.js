import React from "react";
import classes from "./ButtonGroup.module.css";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function ButtonGroup(props) {
  const role = props.loginReducer.user.role;
  const history = useHistory()
  return (
    <div className={classes["button-group"]}>
      <button className={classes["btn-cart"]} type="button">
        Add to Cart
      </button>
      <button className={classes["btn-ask"]} type="button" onClick={()=> {
        history.push("/chat")
      }} >
        Ask a Staff
      </button>
      {role === 1 && (
        <button className={classes["btn-delete"]} type="button">
          Delete Menu
        </button>
      )}
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
