import classes from "./MenuItem.module.css";

export default function MenuItem() {
  return (
    <div className={classes["menu-item"]}>
      <img
        className={classes.image}
        src="/assets/images/promo1.png"
        alt="food 1"
      />
      <h3 className={classes["menu-name"]}>Veggie tomato mix</h3>
      <span className={"classes.price"}>IDR 34.000</span>
    </div>
  );
}
