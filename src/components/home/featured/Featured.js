import classes from "./Featured.module.css";

export default function Featured() {
  return (
    <div className="bg-white">
      <section className={`container ${classes.featured}`}>
        <div className={classes.illustration}>
          <img
            className={classes["img-illustration"]}
            src="/assets/images/featured.svg"
            alt="featured"
          />
        </div>
        <div className={classes["perks-container"]}>
          <h2 className="section-title">
            We Provide Good Coffee and Healthy Meals
          </h2>
          <p className="section-description">
            You can explore the menu that we provide with fun and have their own
            taste and make your day better.
          </p>
          <p className={classes.perks}>
            <img
              className={classes.checklist}
              src="/assets/icons/perks-checklist.svg"
              alt="checklist"
            />
            High quality beans
          </p>
          <p className={classes.perks}>
            <img
              className={classes.checklist}
              src="/assets/icons/perks-checklist.svg"
              alt="checklist"
            />
            High quality beans
          </p>
          <p className={classes.perks}>
            <img
              className={classes.checklist}
              src="/assets/icons/perks-checklist.svg"
              alt="checklist"
            />
            Healthy meals, you can request the ingredients
          </p>
          <p className={classes.perks}>
            <img
              className={classes.checklist}
              src="/assets/icons/perks-checklist.svg"
              alt="checklist"
            />
            Chat with our staff to get better experience for ordering
          </p>
          <p className={classes.perks}>
            <img
              className={classes.checklist}
              src="/assets/icons/perks-checklist.svg"
              alt="checklist"
            />
            Free member card with a minimum purchase of IDR 200.000.
          </p>
        </div>
      </section>
    </div>
  );
}
