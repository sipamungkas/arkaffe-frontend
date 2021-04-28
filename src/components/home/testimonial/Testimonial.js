import classes from "./Testimonial.module.css";

export default function Testimonial() {
  return (
    <section className={`container ${classes.testimonial}`}>
      <h2 className="section-title text-center">
        Loved by Thousands of
        <br />
        Happy Customer
      </h2>
      <p className="section-description text-center">
        These are the stories of our customers who have visited us with great
        pleasure.
      </p>
    </section>
  );
}
