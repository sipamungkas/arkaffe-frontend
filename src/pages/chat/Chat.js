import React from "react";
import classes from "./Chat.module.css";

import SearchBar from "../../components/chat/SearchBar";
import ChatItem from "../../components/chat/ChatItem";

function Chat() {
  return (
    <main className={classes["main-container"]}>
      <section className={classes["left-container"]}>
        <SearchBar />
        <p className={classes.text}>Choose a staff you want to talk with</p>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </section>
      <section className={classes["right-container"]}>
      </section>
    </main>
  );
}

export default Chat;
