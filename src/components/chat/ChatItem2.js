import React from "react";
import classes from "./ChatItem.module.css";

function ChatItem2() {
  return (
    <div className={classes["chat-container"]}>
      <img
        className={classes.image}
        src="/assets/images/avatars/avatar2.png"
        alt="avatar"
      />
      <div className={classes["chat-content"]}>
        <p className={classes["recent-chat"]}>
          Hey, thanks for asking. It’s in product menu, you can see them on the
          left side.
        </p>
      </div>

      <div className={classes.status}>
        <small className={classes["timestamp"]}>02.38&nbsp;PM</small>
      </div>
    </div>
  );
}

export default ChatItem2;
