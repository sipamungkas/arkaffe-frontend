import React from "react";
import classes from "./Chat.module.css";

import SearchBar from "../../components/chat/SearchBar";
import ChatStaff from "../../components/chat/ChatStaff";
import ChatRoom from "../../components/chat/ChatRoom"

function Chat(props) {
  return (
    <main className={classes["main-container"]}>
      <section className={classes["left-container"]}>
        <SearchBar />
        <p className={classes["text-desc"]}>Choose a staff you want to talk with</p>
        <ChatStaff />
        <ChatStaff />
        <ChatStaff />
      </section>
      <section className={classes["right-container"]}>
        <h3 className={classes["roomchat-heading"]}>Room Chat</h3>
        <ChatRoom />
        <ChatRoom />
        <ChatRoom />
      </section>
    </main>
  );
}

export default Chat;
