import MenuCheckout from "./MenuCheckout";

import classes from "./CheckoutList.module.css";

export default function CheckoutList(props) {
  return (
    <div className={classes["checkout-container"]}>
      <div className={classes["checkout-list"]}>
        <MenuCheckout isActive={true} />
        <MenuCheckout isSecond={true} />
        <MenuCheckout isThird={true} />
      </div>
      <div className={classes.row}>
        <span className={classes.subtotal}> Subtotal</span>
        <span className={classes.subtotal}> IDR 120.000 </span>
      </div>
      <div className={classes.row}>
        <span className={classes.subtotal}> Tax & fees</span>
        <span className={classes.subtotal}> IDR 20.000</span>
      </div>
      <div className={classes.row}>
        <span className={classes.subtotal}> Shipping</span>
        <span className={classes.subtotal}> IDR 10.000</span>
      </div>
      <div className={classes.row}>
        <span className={classes.total}> Total {props.order}</span>
        <span className={classes.total}> IDR 150.000</span>
      </div>
    </div>
  );
}
