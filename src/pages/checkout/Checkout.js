import CheckoutList from "../../components/checkout/CheckoutList";

import classes from "./Checkout.module.css";

export default function Checkout() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/assets/images/transaction-bg.png')",
      }}
    >
      <div className={`container ${classes.checkout}`}>
        <h2 className={classes.title}>
          Checkout your <br /> item now!
        </h2>
        <div className={classes.content}>
          <div className={classes.card}>
            <h3 className={classes["card-title"]}>Order Sumary</h3>
            <CheckoutList />
          </div>
          <div className={classes["right-side"]}>
            <div>
              <h4 className={classes["right-title"]}>Address details</h4>
              <div className={classes.card}>
                Delivery to Iskandar Street
                <br />
                Km 5 refinery road oppsite re public road, effurun, Jakarta
                <br />
                +62 81348287878
              </div>
            </div>
            <div>
              <h4 className={classes["right-title"]}>Payment Method</h4>
              <div className={classes.card}>
                <label className={classes.row}>
                  <input type="radio" name="delivery" />
                  <div className={classes["cc-container"]}>
                    <img
                      className={classes.icon}
                      src="/assets/icons/cc-icon.svg"
                      alt="credit card"
                    />
                  </div>
                  Card
                </label>
                <label className={classes.row}>
                  <input type="radio" name="delivery" />
                  <div className={classes["bank-container"]}>
                    <img
                      className={classes.icon}
                      src="/assets/icons/bank-icon.svg"
                      alt="bank icon"
                    />
                  </div>
                  Bank Transfer
                </label>
                <label className={classes.row}>
                  <input type="radio" name="delivery" />
                  <div className={classes["delivery-container"]}>
                    <img
                      className={classes.icon}
                      src="/assets/icons/delivery-icon.svg"
                      alt="delivery icon"
                    />
                  </div>
                  Cash on Delivery
                </label>
              </div>
            </div>
            <button className={`btn ${classes["btn-confirm"]}`}>
              Confirm Pay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
