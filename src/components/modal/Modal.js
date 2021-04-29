import classes from "./Modal.module.css";
import Backdrop from "../backdrop/Backdrop";

export default function Modal(props) {
  return (
    <>
      <div className={classes.container}>
        <h4 className={classes.question}>
          {props.question || "Are you sure ?"}
        </h4>
        <div className={classes["btn-container"]}>
          <button
            className={`btn btn-sm ${classes["btn-left"]}`}
            onClick={props.onLeftClick}
          >
            {props.leftBtnText}
          </button>
          <button
            className={`btn btn-sm ${classes["btn-right"]}`}
            onClick={props.onRightClick}
          >
            {props.rightBtnText}
          </button>
        </div>
      </div>
      <Backdrop />
    </>
  );
}
