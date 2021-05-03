import { useState } from "react";

import CheckoutList from "./CheckoutList";

import classes from "./OrderList.module.css";

export default function OrderList() {
  const [active, setActive] = useState(0);

  const data = ["order 1", "order 2", "order 3"];

  const swipeUpHandler = () => {
    if (active >= data.length - 1) return setActive(0);
    setActive(active + 1);
  };

  const classPosition = (index) => {
    let temp = 0;
    if (index - data.length - 1 < 0) {
      temp = 0;
    }
    if (index === active) return classes.active;
    if (index === active + 1 || temp === active + 1) {
      return classes.next;
    }
    if (index === active + 2 || temp === active + 2) {
      return classes.second;
    }
    return "";
  };

  return (
    <div className={"d-flex flex-column"}>
      <div className={classes["order-list"]}>
        {data.map((order, index) => (
          <div
            key={index}
            className={`${classes.card} ${classPosition(index)}`}
          >
            <h3 className={classes["card-title"]}>Order Sumary</h3>
            <CheckoutList order={order} />
          </div>
        ))}
      </div>
      <button className={`btn ${classes["swipe-up"]}`} onClick={swipeUpHandler}>
        Swipe up to see upcoming orders
        <img src="/assets/icons/top-arrow.svg" alt="top arrow" />
      </button>
    </div>
  );
}
