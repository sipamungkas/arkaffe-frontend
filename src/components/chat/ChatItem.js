import React from "react";
import classes from "./ChatItem.module.css";

function ChatItem() {
  return (
    <div className={classes["chat-container"]}>
      <div className={classes.status}>
          <img className={classes["sended"]} src="/assets/icons/icon_sended.svg" alt=""/>
          <img className={classes["delivered"]} src="/assets/icons/icon_delivered.svg" alt=""/>
        <small className={classes["timestamp"]}>02.34&nbsp;PM</small>
      </div>
      <div className={classes["chat-content"]}>
        <p className={classes["recent-chat"]}>
          Hey jason, I can’t find the promo section. Can u tell me where is it?
        </p>
      </div>
      <img
        className={classes.image}
        src="/assets/images/avatars/avatar3.jpg"
        alt="avatar"
      />
    </div>
  );
}

export default ChatItem;
