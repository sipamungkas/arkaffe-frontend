import React from "react";
import classes from "./EditPromo.module.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumbV2";
import ProductPicture from "../../components/product/newproduct/leftsection/ProductPicture"
import LeftInput from "../../components/product/promo/newpromo/LeftInput"
import RightInput from "../../components/product/promo/newpromo/RightInput";

function EditPromo() {
  return (
    <div>
      <main className={classes["main-container"]}>
        <section className={classes["left-container"]}>
          <BreadCrumb path={["Promo", "Edit Promo"]} />
          <ProductPicture />
          <LeftInput />
        </section>
        <section className={classes["right-container"]}>
          <RightInput />
        </section>
      </main>
    </div>
  );
}

export default EditPromo;
