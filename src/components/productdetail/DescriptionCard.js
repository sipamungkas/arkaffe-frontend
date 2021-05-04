import React from "react";
import classes from "./DescriptionCard.module.css";

function DescriptionCard(props) {
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

  return (
    <div className={classes["desc-container"]}>
      <div className={classes["delivery-text"]}>
        <p className={classes["text-default"]}>Delivery only on&nbsp;</p>
        <div className={classes["text-props"]}>{deliveryDay()}</div>
        <p className={classes["text-default"]}>&nbsp;at&nbsp;</p>
        <div className={classes["text-props"]}>{deliveryTime()}</div>
      </div>
      <div className={classes["desc-product"]}>{props.product.description}</div>
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
