import classes from "./MenuCheckout.module.css";

export default function MenuCheckout() {
  return (
    <div className={classes.item}>
      <div className={classes.menu}>
        <div className={classes["image-container"]}>
          <img
            className={classes.image}
            src="/assets/images/promo1.png"
            alt=""
          />
        </div>
        <div className={classes.content}>
          <span className={classes["menu-name"]}>Hazelnut Latte</span>
          <span className={classes.qty}>x 1</span>
          <span className={classes.size}>Regular</span>
        </div>
      </div>
      <span className={classes.price}>IDR 24.0</span>
    </div>
  );
}
