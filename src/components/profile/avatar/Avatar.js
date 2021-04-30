import classes from "./Avatar.module.css";
export default function Avatar() {
  return (
    <div className={classes.card}>
      <div className={classes.circle}>
        <img
          className={classes["image"]}
          src="/assets/images/avatars/avatar1.png"
          alt="avatar 1"
        />
      </div>
      <span className={classes.name}>Zulaikha</span>
      <span className={classes.email}>zulaikha17@gmail.com</span>
      <span className={classes.history}>Has been ordered 15 products</span>
    </div>
  );
}
