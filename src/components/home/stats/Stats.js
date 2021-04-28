import classes from "./Stats.module.css";

export default function Stats() {
  return (
    <section className={`container ${classes.stats}`}>
      <div className={classes["stat-group"]}>
        <div className={classes.circle}>
          <img
            className={classes["circle-icon"]}
            src="/assets/icons/staff-icon.png"
            alt="staff "
          />
        </div>
        <div className="d-flex flex-column">
          <span className={classes.number}>90+</span>
          <span className={classes.text}>Staff</span>
        </div>
      </div>

      <div className={classes["stat-group"]}>
        <div className={classes.circle}>
          <img
            className={classes["circle-icon"]}
            src="/assets/icons/staff-icon.png"
            alt="staff "
          />
        </div>
        <div className="d-flex flex-column">
          <span className={classes.number}>30+</span>
          <span className={classes.text}>Stores</span>
        </div>
      </div>

      <div className={classes["stat-group"]}>
        <div className={classes.circle}>
          <img
            className={classes["circle-icon"]}
            src="/assets/icons/staff-icon.png"
            alt="staff "
          />
        </div>
        <div className="d-flex flex-column">
          <span className={classes.number}>800+</span>
          <span className={classes.text}>Customers</span>
        </div>
      </div>
    </section>
  );
}
