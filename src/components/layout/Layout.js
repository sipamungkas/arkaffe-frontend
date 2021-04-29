import { useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import classes from "./Layout.module.css";

export default function Layout(props) {
  const location = useLocation();
  const hidePath = [/signup/, /login/];
  const isMatch = hidePath.some((path) => path.test(location.pathname));

  if (isMatch) {
    return (
      <>
        {props.children}
        <Footer />
      </>
    );
  }
  return (
    <div className={classes.main}>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
