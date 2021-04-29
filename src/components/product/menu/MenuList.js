import { useState } from "react";

import MenuItem from "./MenuItem";

import classes from "./MenuList.module.css";

export default function MenuList() {
  const [tab, setTab] = useState(0);

  const tabList = ["Favorite Product", "Non Coffe", "Foods", "Foods", "Add-on"];

  return (
    <section className={classes["menu-list"]}>
      <div className={classes["tab-container"]}>
        {tabList.map((tabName, index) => (
          <span
            key={index}
            onClick={() => setTab(index)}
            className={`${classes["tab-content"]} ${
              index === tab ? classes.active : ""
            }`}
          >
            {tabName}
          </span>
        ))}
      </div>
      <div className={classes["menu-container"]}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
