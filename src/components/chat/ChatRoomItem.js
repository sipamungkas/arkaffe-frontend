import React from "react";
import classes from "./ChatRoomItem.module.css";

function ChatRoomItem() {
  return (
    <div className={classes["chat-container"]}>
      <img
        className={classes.image}
        src="/assets/images/avatars/avatar2.png"
        alt="avatar"
      />
      <div className={classes["chat-content"]}>
          <p className={classes.name}>Jason</p>
          <p className={classes["recent-chat"]}>Hey jason, I can’t find the promo section. Can u tell me where is it?</p>
      </div>
    </div>
  );
}

export default ChatRoomItem;
