import React from "react";
import EditPencil from "../../../editPencil/EditPencil";
import classes from "./PromoCard.module.css";

function PromoCard(props) {
  const PromoImage = "/assets/images/promo1.png";
  console.log(props)
  return (
    <div className={classes["card-container"]}>
      <div className={classes["card-top"]}>
        <div className={classes["img-edit"]}>
          <img className={classes["promo-image"]} src={PromoImage} alt="img" />
          <button className={classes["btn-edit"]}>
              <EditPencil />
          </button>
        </div>
        <h3 className={classes["text-name"]}>{props.promo.name}</h3>
        <h3 className={classes["discount"]}>{props.promo.discount}% OFF</h3>
        <p className={classes["text-desc"]}>{props.promo.desc}</p>
      </div>
      <div className={classes["card-bottom"]}>
          <h4 className={classes["text-coupon"]}>COUPON CODE</h4>
          <h3 className={classes["coupon-code"]}>{props.promo.couponcode}</h3>
          <p className={classes["coupon-valid"]}>Valid until {props.promo.valid}</p>
      </div>
    </div>
  );
}

export default PromoCard;
