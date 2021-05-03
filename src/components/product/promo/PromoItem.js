import EditPencil from "../../editPencil/EditPencil";

import classes from "./PromoItem.module.css";

export default function PromoItem(props) {
  return (
    <div
      className={`${classes.item} ${props.isActive ? classes.active : ""} ${
        props.isNext ? classes.next : ""
      } ${props.isPrev ? classes.prev : ""}`}
    >
      {props.user.role === 1 ? (
        <div className={classes.edit}>
          <EditPencil />
        </div>
      ) : (
        ""
      )}
      <div className={classes.content}>
        <img
          className={classes.image}
          src="/assets/images/promo1.png"
          alt="promo1"
        />
        <h3 className={classes.title}>Beef Spaghetti </h3>
        <h4 className={classes.discount}>20% OFF</h4>
        <p className={classes.description}>
          Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
        </p>
      </div>
      <div className={classes.coupon}>
        <p className={classes["coupon-text"]}>Coupon Code</p>
        <span className={classes.code}>FNPR15RG</span>
        <span className={classes.expired}>Valid untill October 10th 2020</span>
      </div>
    </div>
  );
}
