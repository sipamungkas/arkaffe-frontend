import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <div className="bg-white">
      <footer className="container d-flex justify-content-between">
        <div className="w-25">
          <div className={classes.logo}>
            <img
              className={classes["brand-logo"]}
              src={"/assets/icons/icon_arkaffe.png"}
              alt="Arkaffe Icon"
            />
            <span className={classes.title}>Coffe Shop</span>
          </div>
          <p className="text-justify my-2">
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </p>
          <div className={classes["social-media-container"]}>
            <div className={classes["social-media-circle"]}>
              <img
                className={classes["social-media-icon"]}
                src="/assets/icons/icon_facebook.svg"
                alt=""
              />
            </div>
            <div className={`${classes["social-media-circle"]} mx-2`}>
              <img
                className={classes["social-media-icon"]}
                src="/assets/icons/icon_twitter.svg"
                alt=""
              />
            </div>
            <div className={classes["social-media-circle"]}>
              <img
                className={classes["social-media-icon"]}
                src="/assets/icons/icon_instagram.svg"
                alt=""
              />
            </div>
          </div>
          <span>©2020CoffeeStore</span>
        </div>
        <div className="w-50 d-flex text-right justify-content-end">
          <div className={classes.product}>
            <p className={classes.title}>Product</p>
            <div className="d-flex flex-column justify-content-between">
              <a className="my-1" href="/">
                Download
              </a>
              <a className="my-1" href="/">
                Pricing
              </a>
              <a className="my-1" href="/">
                Location
              </a>
              <a className="my-1" href="/">
                Countries
              </a>
              <a className="my-1" href="/">
                Blog
              </a>
            </div>
          </div>
          <div className={classes.engage}>
            <p className={classes.title}>Engage</p>
            <div className="d-flex flex-column justify-content-between">
              <a className="my-1" href="/">
                Coffe Shop?
              </a>
              <a className="my-1" href="/">
                FAQ
              </a>
              <a className="my-1" href="/">
                About Us
              </a>
              <a className="my-1" href="/">
                Privacy Policy
              </a>
              <a className="my-1" href="/">
                Term of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
