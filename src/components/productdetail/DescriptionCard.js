import React from "react";
import classes from "./DescriptionCard.module.css";

function DescriptionCard() {
  const deliverydaystart = "Monday";
  const deliverydayend = "Friday";
  const timestart = 1;
  const timeend = 7;
  const deliveryDay = () => {
    return (
      <p>
        {deliverydaystart} to {deliverydayend}
      </p>
    );
  };
  const deliveryTime = () => {
    return (
      <p>
        {timestart} - {timeend} pm
      </p>
    );
  };
  const productDesc = () => {
    return "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.";
  };
  return (
    <div className={classes["desc-container"]}>
      <div className={classes["delivery-text"]}>
        <p className={classes["text-default"]}>
          Delivery only on&nbsp;
        </p>
        <div className={classes["text-props"]}>{deliveryDay()}</div>
        <p className={classes["text-default"]}>&nbsp;at&nbsp;</p>
        <div className={classes["text-props"]}>{deliveryTime()}</div>
      </div>
      <div className={classes["desc-product"]}>{productDesc()}</div>
      <h4 className={classes["text-size"]}>Choose a size</h4>
      <div className={classes["btn-group"]}>
        <button className={classes["btn-r"]} type="button">
          R
        </button>
        <button className={classes["btn-l"]} type="button">
          L
        </button>
        <button className={classes["btn-xl"]} type="button">
          XL
        </button>
      </div>
    </div>
  );
}

export default DescriptionCard;
