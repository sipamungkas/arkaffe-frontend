import React, { useState } from "react";
import classes from "./DeliveryStock.module.css";

function DeliveryHour() {
  const [stock, setStock] = useState(0);
  const [deliverystart, setDeliverystart] = useState("");
  const [deliveryend, setDeliveryend] = useState("");
  console.log(deliverystart, deliveryend, stock)
  return (
    <div className={classes["container"]}>
      <p className={classes["text-delivery"]}>Delivery Hour :</p>
      <div className={classes["input-group-delivery"]}>
        <div className={classes["input-start"]}>
          <label className={classes["label-start"]} htmlFor="input-time">
            Start Hour :
          </label>
          <input
            className={classes["time-start"]}
            id="input-time"
            type="time"
            name="input-time"
            min="08:00"
            max="22:00"
            required
            onChange={(e) => {
              return setDeliverystart(e.target.value);
            }}
          />
        </div>
        <div className={classes["input-end"]}>
          <label className={classes["label-end"]} htmlFor="input-time">
            End Hour :
          </label>
          <input
            className={classes["time-end"]}
            id="input-time"
            type="time"
            name="input-time"
            min="08:00"
            max="22:00"
            required
            onChange={(e) => {
              return setDeliveryend(e.target.value);
            }}
          />
        </div>
      </div>
      <p className={classes["text-stock"]}>Input Stock :</p>
      <div className={classes["input-group-stock"]}>
        <label className={classes["label-stock"]} htmlFor="input-stock">
          Input Stock:
        </label>
        <input
          className={classes["input-stock"]}
          type="number"
          placeholder="0"
          onChange={(e) => {
            return setStock(e.target.value);
          }}
        ></input>
        <label className={classes["label-stock-pcs"]} htmlFor="input-stock">
          pcs
        </label>
      </div>
    </div>
  );
}

export default DeliveryHour;
