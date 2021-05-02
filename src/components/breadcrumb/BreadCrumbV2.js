import React from "react";
import classes from "./BreadCrumb.module.css";

function BreadCrumb(props) {
  return (
    <div>
      <p className={classes.breadcrumb}>
        {" "}
        {props.path.map(
          (text, index) => `${text} ${index < props.path.length ? " > " : ""} `
        )}
      </p>
    </div>
  );
}

export default BreadCrumb;
