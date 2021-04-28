import classes from "./Hero.module.css";
import React from "react";

export default function Hero() {
  return (
    <section
      className={classes.hero}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/assets/images/hero.png')",
      }}
    >
      <div class={`container ${classes["hero-text"]}`}>
        <h1 className={classes["hero-title"]}>
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className={classes["hero-description"]}>
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <button className={classes.cta}>Get Started</button>
      </div>
    </section>
  );
}
