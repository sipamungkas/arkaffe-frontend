import HistoryItem from "../../components/history/HistoryItem";

import classes from "./History.module.css";

export default function History() {
  return (
    <section
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/assets/images/history-bg.png')",
      }}
    >
      <div className={`container ${classes.history}`}>
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
        <HistoryItem />
      </div>
    </section>
  );
}
