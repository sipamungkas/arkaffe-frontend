import TestimonialItem from "./TestimonialItem";

import classes from "./TestimonialList.module.css";

export default function TestimonialList(props) {
  const { testimonials } = props;
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
      <div className={classes["testimonial-list"]}>
        {testimonials.map((testimonial, index) => (
          <div className={classes.wrapper} key={index}>
            <TestimonialItem testimonial={testimonial} />
          </div>
        ))}
        {/* <div className={classes.wrapper}>
          <TestimonialItem testimonial={testimonial} />
        </div> */}
        {/* <div className={classes.wrapper}>
          <TestimonialItem />
        </div>
        <div className={classes.wrapper}>
          <TestimonialItem />
        </div>
        <div className={classes.wrapper}>
          <TestimonialItem />
        </div> */}
      </div>
      <div className="w-100 mt-4 d-flex align-items-center justify-content-between">
        <div className={classes["indicator-container"]}>
          <div className={`${classes.indicator} ${classes.active}`} />
          <div className={classes.indicator} />
          <div className={classes.indicator} />
          <div className={classes.indicator} />
        </div>
        <div className={classes["arrow-container"]}>
          <div className={classes.circle}>
            <svg
              className={classes.arrow}
              width="20"
              height="18"
              viewBox="0 0 20 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.75 7.74998H3.925L8.4625 2.29998C8.67467 2.04471 8.77675 1.71561 8.74628 1.38507C8.7158 1.05454 8.55527 0.749652 8.3 0.537478C8.04473 0.325305 7.71563 0.223228 7.3851 0.253702C7.05456 0.284177 6.74967 0.444708 6.5375 0.699979L0.2875 8.19998C0.245451 8.25963 0.207849 8.3223 0.175 8.38748C0.175 8.44998 0.175 8.48748 0.0875002 8.54998C0.0308421 8.6933 0.0011764 8.84587 0 8.99998C0.0011764 9.15409 0.0308421 9.30665 0.0875002 9.44998C0.0875002 9.51248 0.0874998 9.54998 0.175 9.61248C0.207849 9.67765 0.245451 9.74032 0.2875 9.79998L6.5375 17.3C6.65503 17.4411 6.8022 17.5546 6.96856 17.6323C7.13491 17.7101 7.31636 17.7503 7.5 17.75C7.79207 17.7505 8.07511 17.6488 8.3 17.4625C8.42657 17.3575 8.5312 17.2287 8.60789 17.0832C8.68458 16.9378 8.73183 16.7787 8.74692 16.6149C8.76202 16.4512 8.74466 16.2861 8.69586 16.1291C8.64705 15.9721 8.56775 15.8263 8.4625 15.7L3.925 10.25H18.75C19.0815 10.25 19.3995 10.1183 19.6339 9.88386C19.8683 9.64944 20 9.3315 20 8.99998C20 8.66846 19.8683 8.35052 19.6339 8.1161C19.3995 7.88167 19.0815 7.74998 18.75 7.74998Z" />
            </svg>
          </div>
          <div className={`${classes.circle}`}>
            <svg
              className={classes.arrow}
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.25 13.75H21.075L16.5375 8.29998C16.3253 8.04471 16.2232 7.71561 16.2537 7.38507C16.2842 7.05454 16.4447 6.74965 16.7 6.53748C16.9553 6.32531 17.2844 6.22323 17.6149 6.2537C17.9454 6.28418 18.2503 6.44471 18.4625 6.69998L24.7125 14.2C24.7545 14.2596 24.7922 14.3223 24.825 14.3875C24.825 14.45 24.825 14.4875 24.9125 14.55C24.9692 14.6933 24.9988 14.8459 25 15C24.9988 15.1541 24.9692 15.3067 24.9125 15.45C24.9125 15.5125 24.9125 15.55 24.825 15.6125C24.7922 15.6777 24.7545 15.7403 24.7125 15.8L18.4625 23.3C18.345 23.4411 18.1978 23.5546 18.0314 23.6323C17.8651 23.7101 17.6836 23.7503 17.5 23.75C17.2079 23.7505 16.9249 23.6488 16.7 23.4625C16.5734 23.3575 16.4688 23.2287 16.3921 23.0832C16.3154 22.9378 16.2682 22.7787 16.2531 22.6149C16.238 22.4512 16.2553 22.2861 16.3041 22.1291C16.3529 21.9721 16.4322 21.8263 16.5375 21.7L21.075 16.25H6.25C5.91848 16.25 5.60054 16.1183 5.36612 15.8839C5.13169 15.6494 5 15.3315 5 15C5 14.6685 5.13169 14.3505 5.36612 14.1161C5.60054 13.8817 5.91848 13.75 6.25 13.75Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
