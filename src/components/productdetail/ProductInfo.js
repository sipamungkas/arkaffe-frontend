import React from "react";
import classes from "./ProductInfo.module.css";

function ProductInfo() {
  const productName = "Cold Brew";
  const productPrice = 34000;
  return (
    <>
      <div className={classes["productinfo-container"]}>
        <img
          className={classes["img-product"]}
          alt="product_image"
          src="/assets/images/img_product.jpg"
        ></img>
        <h1 className={classes["title-product"]}>{productName}</h1>
        <p className={classes["price-product"]}>IDR{" "}{productPrice}</p>
      </div>
    </>
  );
}

export default ProductInfo;
