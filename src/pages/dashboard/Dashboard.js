import Chart from "../../components/dashboard/chart/Chart";

import classes from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={classes.background}>
      <section className={`container ${classes.dashboard}`}>
        <div className={classes["top-section"]}>
          <h3 className={classes.title}>See how your store progress so far</h3>
          <div className={classes["filter-container"]}>
            <label className={classes.radio}>
              <input type="radio" name="filter" />
              Daily
            </label>
            <label className={classes.radio}>
              <input type="radio" name="filter" />
              Weekly
            </label>
            <label className={classes.radio}>
              <input type="radio" name="filter" />
              Monthly
            </label>
          </div>
        </div>
        <div className={classes.content}>
          <div className={`${classes["card"]} ${classes["chart-wrapper"]}`}>
            <Chart />
          </div>
          <div className={classes["right-wrapper"]}>circle</div>
        </div>
      </section>
    </div>
  );
}
