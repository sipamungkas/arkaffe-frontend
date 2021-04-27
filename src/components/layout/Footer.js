import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="container">
      <div>
        <div>
          <img
            className={classes["brand-logo"]}
            src={"/assets/icons/icon_arkaffe.png"}
            alt="Arkaffe Icon"
          />
          Coffe Shop
        </div>
        <p>
          Coffee Shop is a store that sells some good meals, and especially
          coffee. We provide high quality beans
        </p>
        <div className={classes["social-media-container"]}>
          <div className={classes["social-media-circle"]}>
            <img
              className={classes["social-media-icon"]}
              src="/assets/icons/icon_facebook.png"
              alt=""
            />
          </div>
          <div className={classes["social-media-circle"]}>
            <img
              className={classes["social-media-icon"]}
              src="/assets/icons/icon_facebook.png"
              alt=""
            />
          </div>
          <div className={classes["social-media-circle"]}>
            <img
              className={classes["social-media-icon"]}
              src="/assets/icons/icon_facebook.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className={classes.product}></div>
        <div className={classes.engage}></div>
      </div>
    </footer>
  );
}
