import { useState } from "react";

import Modal from "../../modal/Modal";
import classes from "./Actions.module.css";

export default function Actions(props) {
  // const { token } = props.user;
  const [prompt, setPrompt] = useState(false);

  return (
    <div className={classes.actions}>
      {prompt && (
        <Modal
          question="Are you sure You want to Log out?"
          onLeftClick={() => setPrompt(false)}
          leftBtnText="Cancel"
          onRightClick={props.logout}
          rightBtnText={"Logout"}
        />
      )}
      <h3 className={classes.title}>Do you want to save the change?</h3>
      <button className={`btn ${classes["btn-save"]}`}>Save changes</button>
      <button className={`btn ${classes["btn-cancel"]}`}>Cancel</button>
      <button className={`btn ${classes["btn-edit-password"]}`}>
        <span>Edit Password</span>{" "}
        <span className={classes["right-arrow"]}> {">"} </span>
      </button>
      <button
        className={`btn ${classes["btn-logout"]}`}
        onClick={() => setPrompt(true)}
      >
        <span>Logout</span>{" "}
        <span className={classes["right-arrow"]}> {">"} </span>
      </button>
    </div>
  );
}
