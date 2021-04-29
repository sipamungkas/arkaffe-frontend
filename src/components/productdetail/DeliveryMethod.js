import React from "react";
import classes from "./DeliveryMethod.module.css";

function DeliveryMethod() {
  return (
    <div className={classes["methods-container"]}>
      <h4 className={classes["text-methods"]}>Choose Delivery Methods</h4>
      <div className={classes["btn-group"]}>
        <button className={classes["btn-dinein"]} type="button">
          Dine In
        </button>
        <button className={classes["btn-delivery"]} type="button">
          Door Delivery
        </button>
        <button className={classes["btn-pickup"]} type="button">
          Pick Up
        </button>
      </div>
      <div className={classes["input-group"]}>
          <label className={classes["label-input"]} htmlFor="input-time">Set time:</label>
          <input className={classes["time"]}
          id="input-time"
          type="time"
            name="input-time"
            min="08:00"
            max="22:00" required
          />
      </div>
      <small>Notes: office hour are 8am to 10pm</small>
    </div>
  );
}

export default DeliveryMethod;
