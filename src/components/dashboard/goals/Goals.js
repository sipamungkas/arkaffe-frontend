import { CircularProgressbar } from "react-circular-progressbar";

import classes from "./Goals.module.css";

export default function Goals() {
  const percentage = 77;
  return (
    <div className={classes.goals}>
      <span className={classes.name}>Goals</span>
      <p className={classes.description}>
        Your goals is still on 76%. Keep up the good work!
      </p>
      <div
        style={{
          width: 100,
          height: 100,
          margin: "1rem 0",
          path: {
            // Path color
            stroke: `rgba(74, 142, 7, 0.4)`,
          },
        }}
      >
        <CircularProgressbar value={percentage} text={`${percentage}%`} />
      </div>
    </div>
  );
}
