import React from "react";
import classes from "./ProductPicture.module.css";

function ProductPicture() {

  const picturesrc = "/assets/images/img_defaultupload.png";
  return (
    <>
      <div className={classes["container-picture"]}>
        <div className={classes["img-container"]}>
          <img className={classes.picture} src={picturesrc} alt="default" />
        </div>
        <button className={classes["btn-camera"]}>Take a picture</button>
        <button className={classes["btn-gallery"]}>Choose from gallery</button>
      </div>
    </>
  );
}

export default ProductPicture;
