import React from "react";
import classes from "./ChatRoom.module.css";

import SearchBar from "../../components/chat/SearchBar";
import ChatStaff from "../../components/chat/ChatStaff";
import ChatItem from "../../components/chat/ChatItem"
import ChatItem2 from "../../components/chat/ChatItem2"

function ChatRoom() {
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
        <h3 className={classes["roomchat-heading"]}>Jason</h3>
        <ChatItem />
        <ChatItem2 />
      </section>
    </main>
  );
}

export default ChatRoom;
