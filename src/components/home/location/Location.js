import classes from "./Location.module.css";

export default function Location() {
  return (
    <div className="bg-white mt-5">
      <section className={`container ${classes.location}`}>
        <h2 className="section-title text-center">
          Visit Our Store in the Spot on the Map Below
        </h2>
        <p className="section-description text-center">
          See our store in every city on the spot and spen your good day there.
          See you soon!
        </p>
        <img
          className={classes.map}
          src="/assets/images/location-map.svg"
          alt="location"
        />
      </section>
    </div>
  );
}
