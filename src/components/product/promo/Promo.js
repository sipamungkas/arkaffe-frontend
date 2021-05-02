import PromoItem from "./PromoItem";

import classes from "./Promo.module.css";

export default function Promo() {
  return (
    <section className={`container ${classes.promo}`}>
      <h2 className="section-title text-center m-0">Promo for you</h2>
      <p className="section-description text-center my-5">
        Coupons will be updated every weeks. Check them out!
      </p>
      <div className={classes["promo-list"]}>
        {/* <div className="w-100"> */}
        <PromoItem isActive={true} />
        <PromoItem isPrev={false} isNext={true} />
        <PromoItem isPrev={true} isNext={false} />
        {/* <PromoItem isNext={true} /> */}
      </div>
      <button className={`btn ${classes["btn-coupon"]}`}>Apply Coupon</button>
      <span className={classes.toc}>Terms and Condition</span>
      <ol className={classes["toc-content"]}>
        <li>You can only apply 1 coupon per day</li>
        <li>It only for dine in</li>
        <li>Buy 1 get 1 only for new user</li>
        <li>Should make member card to apply coupon</li>
      </ol>

      <button className={`btn ${classes["add-new-promo"]}`}>
        Add new promo
      </button>
    </section>
  );
}
