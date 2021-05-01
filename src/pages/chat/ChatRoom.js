import React from "react";
import classes from "./Chat.module.css";

import SearchBar from "../../components/chat/SearchBar";
import ChatRoomItem from "../../components/chat/ChatStaff";
import ChatItem from "../../components/chat/ChatRoom"

function ChatRoom() {
  return (
    <main className={classes["main-container"]}>
      <section className={classes["left-container"]}>
        <SearchBar />
        <p className={classes["text-desc"]}>Choose a staff you want to talk with</p>
        <ChatRoomItem />
        <ChatRoomItem />
        <ChatRoomItem />
      </section>
      <section className={classes["right-container"]}>
        <h3 className={classes["roomchat-heading"]}>Room Chat</h3>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </section>
    </main>
  );
}

export default ChatRoom;
