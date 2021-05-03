import React from "react";
import classes from "./ProductPicture.module.css";

function ProductPicture() {
  const picturesrc = "/assets/images/img_defaultupload.png";

  const onChangeHandler = (e) =>{
    const file = e.target.files[0]
    //setFile
  }
  return (
    <>
      <div className={classes["container-picture"]}>
        <div className={classes["img-container"]}>
          <img className={classes.picture} src={picturesrc} alt="default" />
        </div>
        <button className={classes["btn-camera"]}>Take a picture</button>
        <label className={classes["btn-gallery"]}>
          <input type="file" className={classes["input-file"]} onChange={onChangeHandler} />
          Choose from gallery
        </label>
      </div>
    </>
  );
}

export default ProductPicture;
