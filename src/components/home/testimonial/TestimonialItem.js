import classes from "./TestimonialItem.module.css";

export default function TestimonialItem(props) {
  const { testimonial } = props;
  return (
    <div className={classes.item}>
      <div className={classes.head}>
        <div className="d-flex align-items-center">
          <img
            className={classes.avatar}
            src="/assets/images/avatars/avatar1.png"
            alt="avatar1"
          />
          <div>
            <p className={classes.name}>
              {testimonial.username || "Viezh Robert"}
            </p>
            <p className={classes.address}>Warsaw, Poland</p>
          </div>
        </div>
        <div className={classes.rating}>
          {testimonial.rating || 4.5}
          <img src="/assets/icons/rating.svg" alt="rating" />
        </div>
      </div>
      <div className={classes.content}>
        {testimonial.message ||
          `“Wow... I am very happy to spend my whole day here. the Wi-fi is good,
        and the coffee and meals tho. I like it here!! Very recommended!`}
      </div>
    </div>
  );
}
