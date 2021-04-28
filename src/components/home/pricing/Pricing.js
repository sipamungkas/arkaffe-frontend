import classes from "./Pricing.module.css";

export default function Pricing() {
  return (
    <div className="bg-white">
      <section className={`container ${classes.pricing}`}>
        <h2 className="section-title text-center">Here is People’s Favorite</h2>
        <p className="section-description text-center">
          Let’s choose and have a bit taste of poeple’s favorite. It might be
          yours too!
        </p>
        <div className={classes["pricing-container"]}>
          <div className={classes.scrollable}>
            <div className={classes["pricing-item"]}>
              <div className={classes["image-container"]}>
                <img
                  className={classes["item-image"]}
                  src="/assets/images/hazelnut-latte.png"
                  alt="item"
                />
              </div>
              <h3 className={classes.title}>Bukan Hazelnut Latte</h3>
              <div className="mb-5">
                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Hazelnut Syrup
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Wanilla Whipped Cream
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Ice / Hot
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Sliced Banana on Top
                </p>
              </div>
              <p className={classes.price}>IDR 25.000</p>
              <button className={`btn ${classes["btn-order"]}`}>
                Order Now
              </button>
            </div>
            <div className={classes["pricing-item"]}>
              <div className={classes["image-container"]}>
                <img
                  className={classes["item-image"]}
                  src="/assets/images/hazelnut-latte.png"
                  alt="item"
                />
              </div>
              <h3 className={classes.title}>Hazelnut Latte</h3>
              <div className="mb-5">
                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Hazelnut Syrup
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Wanilla Whipped Cream
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Ice / Hot
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Sliced Banana on Top
                </p>
              </div>
              <p className={classes.price}>IDR 25.000</p>
              <button className={`btn ${classes["btn-order"]}`}>
                Order Now
              </button>
            </div>
            <div className={classes["pricing-item"]}>
              <div className={classes["image-container"]}>
                <img
                  className={classes["item-image"]}
                  src="/assets/images/hazelnut-latte.png"
                  alt="item"
                />
              </div>
              <h3 className={classes.title}>Bukan Hazelnut Latte</h3>
              <div className="mb-5">
                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Hazelnut Syrup
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Wanilla Whipped Cream
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Ice / Hot
                </p>

                <p className={classes.addons}>
                  <img
                    className={classes.checklist}
                    src="/assets/icons/addons-checklist.svg"
                    alt="checklist"
                  />
                  Sliced Banana on Top
                </p>
              </div>
              <p className={classes.price}>IDR 25.000</p>
              <button className={`btn ${classes["btn-order"]}`}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
