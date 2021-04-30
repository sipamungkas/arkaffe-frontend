import classes from "./Actions.module.css";

export default function Actions() {
  return (
    <div className={classes.actions}>
      <h3 className={classes.title}>Do you want to save the change?</h3>
      <button className={`btn ${classes["btn-save"]}`}>Save changes</button>
      <button className={`btn ${classes["btn-cancel"]}`}>Cancel</button>
      <button className={`btn ${classes["btn-edit-password"]}`}>
        <span>Edit Password</span>{" "}
        <span className={classes["right-arrow"]}> {">"} </span>
      </button>
      <button className={`btn ${classes["btn-logout"]}`}>
        <span>Logout</span>{" "}
        <span className={classes["right-arrow"]}> {">"} </span>
      </button>
    </div>
  );
}
