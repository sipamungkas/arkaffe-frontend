import React from "react";
import classes from "./EditPromo.module.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumbV2";
import ProductPicture from "../../components/product/newproduct/leftsection/ProductPicture"
import LeftInput from "../../components/product/promo/editpromo/LeftInput"
import RightInput from "../../components/product/promo/editpromo/RightInput";
import PromoCard from "../../components/product/promo/editpromo/PromoCard";

function EditPromo() {
    const name = "Beef Spaghetti"
    const discount = "20"
    const desc = "Buy 1 Choco Oreo and get 20% off for Beef Spaghetti"
    const couponcode = "fnpr15rg"
    const valid = `${"October"}${" "}${10}th ${2020}`

    const Promo = {name, discount, desc, couponcode, valid}
  return (
    <div>
      <main className={classes["main-container"]}>
        <section className={classes["left-container"]}>
          <BreadCrumb path={["Promo", "Edit Promo"]} />
          <PromoCard promo={Promo}/>
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
