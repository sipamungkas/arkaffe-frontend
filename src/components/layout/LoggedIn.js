import { useHistory } from "react-router-dom";

import classes from "./LoggedIn.module.css";

export default function LoggedIn() {
  const history = useHistory();
  return (
    <div className={classes["logged-in"]}>
      <img
        className={classes.image}
        src="/assets/icons/search-icon-navbar.svg"
        alt="search"
      />
      <img
        className={classes.image}
        src="/assets/icons/chat-icon.svg"
        alt="chat"
        onClick={() => history.push("/chat")}
      />
      <img
        className={`${classes.image} ${classes.circle}`}
        src="/assets/images/avatars/avatar1.png"
        alt="avatar"
        onClick={() => history.push("/profile")}
      />
    </div>
  );
}
