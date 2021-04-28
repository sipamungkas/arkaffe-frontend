import classes from "./HistoryItem.module.css";

export default function HistoryItem() {
  return (
    <div className={classes["history-item"]}>
      <img
        className={classes.image}
        src="/assets/images/promo1.png"
        alt="history 1"
      />
      <div className="d-flex flex-column ml-1">
        <h3 className={classes.title}>Veggie tomato mix</h3>
        <p className={classes.price}>IDR 34.000</p>
        <p className={classes.description}>Delivered</p>
      </div>
      <div className={classes.actions}>
        <div className={classes.circle}>
          <img
            className={classes["action-image"]}
            src="/assets/icons/trash-icon.svg"
            alt="delete"
          />
        </div>
        <div className={classes["circle-x"]}>
          <img
            className={classes["action-image"]}
            src="/assets/icons/x-icon.svg"
            alt="delete"
          />
        </div>
      </div>
    </div>
  );
}
