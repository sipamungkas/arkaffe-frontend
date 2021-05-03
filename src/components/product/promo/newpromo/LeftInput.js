import React, { useState } from "react";
import classes from "./LeftInput.module.css";

function LeftInput() {
  const [discount, setdiscount] = useState(0);
  const [datestart, setdatestart] = useState("");
  const [dateend, setdateend] = useState("");
  const [coupon, setcoupon] = useState(0);
  console.log(discount, datestart, dateend, coupon);
  return (
    <div className={classes["container"]}>
      <p className={classes["text-discount"]}>Enter the discount :</p>
      <div className={classes["input-group-discount"]}>
        <label className={classes["label-discount"]} htmlFor="input-discount">
          Input Discount:
        </label>
        <input
          className={classes["input-discount"]}
          type="number"
          placeholder="0"
          onChange={(e) => {
            return setdiscount(e.target.value);
          }}
        ></input>
        <label
          className={classes["label-discount-percent"]}
          htmlFor="input-discount"
        >
          %
        </label>
      </div>
      <p className={classes["text-expire"]}>Expire date :</p>
      <div className={classes["input-group-expire"]}>
        <div className={classes["input-start"]}>
          <label className={classes["label-start"]} htmlFor="input-date">
            Start :
          </label>
          <input
            className={classes["date-start"]}
            id="input-date"
            type="date"
            name="input-date"
            onChange={(e) => {
              return setdatestart(e.target.value);
            }}
          />
        </div>
        <div className={classes["input-end"]}>
          <label className={classes["label-end"]} htmlFor="input-date">
            End :
          </label>
          <input
            className={classes["date-end"]}
            id="input-date"
            type="date"
            name="input-date"
            onChange={(e) => {
              return setdateend(e.target.value);
            }}
          />
        </div>
      </div>
      <p className={classes["text-coupon"]}>Input Coupon Code :</p>
      <div className={classes["input-group-coupon"]}>
        <label className={classes["label-coupon"]} htmlFor="input-coupon">
          Coupon Code:
        </label>
        <input
          className={classes["input-coupon"]}
          type="text"
          placeholder="EX123CODE"
          onChange={(e) => {
            return setcoupon(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default LeftInput;
