import React from "react";
import classes from "./ChatStaff.module.css";
import {useHistory} from "react-router-dom"

function ChatRoomItem() {
  const history = useHistory()
  return (
    <div
      className={classes["chat-container"]}
      onClick={() => {
        history.push("/chat");
      }}
    >
      <img
        className={classes.image}
        src="/assets/images/avatars/avatar2.png"
        alt="avatar"
      />
      <div className={classes["chat-content"]}>
        <p className={classes.name}>Jason</p>
        <p className={classes["recent-chat"]}>
          Hey jason, I can’t find the promo section. Can u tell me where is it?
        </p>
      </div>
    </div>
  );
}

export default ChatRoomItem;
