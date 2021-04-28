import PromoItem from "./PromoItem";

import classes from "./Promo.module.css";

export default function Promo() {
  return (
    <section className={`container ${classes.promo}`}>
      <h2 className="section-title">Promo for you</h2>
      <p className="section-description">
        Coupons will be updated every weeks. Check them out!
      </p>
      <div className={classes["promo-list"]}>
        {/* <div className="w-100"> */}
        <PromoItem isActive={true} />
        {/* <PromoItem isNext={true} /> */}
      </div>
    </section>
  );
}
