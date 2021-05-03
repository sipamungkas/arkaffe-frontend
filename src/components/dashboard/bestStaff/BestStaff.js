import { CircularProgressbar } from "react-circular-progressbar";

import classes from "./BestStaff.module.css";

export default function BestStaff() {
  const percentage = 66;
  return (
    <div className={classes["best-staff"]}>
      <div className={classes.staff}>
        <img
          className={classes.image}
          src="/assets/images/avatars/avatar1.png"
          alt="avatar1"
        />
        <div className={classes["staff-info"]}>
          <span className={classes.name}>Cheryn Laurent</span>
          <p className={classes.note}>Keep up the good work and spread love!</p>
        </div>
      </div>
      <div className={classes["lower-section"]}>
        <span className={classes.text}>Best Staff of the Month</span>
        <div
          style={{
            width: 80,
            height: 80,
            margin: "1rem 0",
            path: {
              // Path color
              stroke: `rgba(74, 142, 7, 0.4)`,
            },
          }}
        >
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        <span className={classes.description}>Achieved 3.5M of total</span>
        <span className={classes.description}>5M 478 Customer</span>
      </div>
    </div>
  );
}
