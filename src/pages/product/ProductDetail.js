import React from "react";
import classes from "./ProductDetail.module.css";
import BreadCrumb from "../../components/productdetail/BreadCrumb"
import ProductInfo from "../../components/productdetail/ProductInfo"
import ButtonGroup from "../../components/productdetail/ButtonGroup"
import DescriptionCard from "../../components/productdetail/DescriptionCard";
import DeliveryMethod from "../../components/productdetail/DeliveryMethod"

function ProductDetail() {
  return (
    <>
      <main className={classes["main-container"]}>
        <section className={classes["left-container"]}>
            <BreadCrumb/>
            <ProductInfo/>
            <ButtonGroup/>
        </section>
        <section className={classes["right-container"]}>
            <DescriptionCard/>
            <DeliveryMethod/>
        </section>
      </main>
    </>
  );
}

export default ProductDetail;
