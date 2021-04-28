import classes from "./Cta.module.css";

export default function Promo() {
  return (
    <section className={`container ${classes.cta} my-5`}>
      <div className="d-flex flex-column">
        <h2 className="section-title">
          Check our promo
          <br />
          today!
        </h2>
        <p className="section-description">
          Let's see the deals and pick yours!
        </p>
      </div>
      <button className={`btn ${classes["btn-promo"]}`}>See Promo</button>
    </section>
  );
}
