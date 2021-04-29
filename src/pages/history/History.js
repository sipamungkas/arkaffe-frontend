import { useState } from "react";

import HistoryItem from "../../components/history/HistoryItem";
import Backdrop from "../../components/backdrop/Backdrop";

import classes from "./History.module.css";

export default function History() {
  const [backdrop, setBackdrop] = useState(false);
  console.log(backdrop);
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/assets/images/history-bg.png')",
      }}
    >
      {backdrop && <Backdrop />}
      <div className={`container ${classes.history}`}>
        <HistoryItem onDelete={() => setBackdrop(true)} />
        <HistoryItem onDelete={() => setBackdrop(true)} />
        <HistoryItem onDelete={() => setBackdrop(true)} />
        <HistoryItem onDelete={() => setBackdrop(true)} />
        <HistoryItem onDelete={() => setBackdrop(true)} />
      </div>
    </section>
  );
}
