import classes from "./Partner.module.css";

export default function Partner() {
  return (
    <section className={`container ${classes.partner}`}>
      <h2 className="section-title text-center mt-5">Our Partner</h2>
      <div className={classes["partner-container"]}>
        <img
          className={classes.image}
          src="/assets/icons/netflix.png"
          alt="netflix"
        />
        <img
          className={classes.image}
          src="/assets/icons/reddit.png"
          alt="reddit"
        />
        <img
          className={classes.image}
          src="/assets/icons/amazon.png"
          alt="amazon"
        />
        <img
          className={classes.image}
          src="/assets/icons/discord.png"
          alt="discord"
        />
        <img
          className={classes.image}
          src="/assets/icons/spotify.png"
          alt="spotify"
        />
      </div>
    </section>
  );
}
