import classes from "./Avatar.module.css";
export default function Avatar(props) {
  const { user } = props;
  return (
    <div className={classes.card}>
      <div className={classes.circle}>
        <img
          className={classes["image"]}
          src="/assets/images/avatars/avatar1.png"
          alt="avatar 1"
        />
      </div>
      <span className={classes.name}>{user.display_name || "No Name"} </span>
      <span className={classes.email}>{user.email || "No Email"}</span>
      <span className={classes.history}>Has been ordered 15 products</span>
    </div>
  );
}
