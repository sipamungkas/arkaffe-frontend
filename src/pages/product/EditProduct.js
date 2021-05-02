import { useState } from "react";
import BreadCrumb from "../../components/breadcrumb/BreadCrumbV2";

import classes from "./EditProduct.module.css";

export default function EditProduct() {
  const [qty, setQty] = useState(0);

  const subQtyHandler = () => {
    if (qty === 0) return;
    setQty(qty - 1);
  };

  const addQtyHandler = () => {
    setQty(qty + 1);
  };

  return (
    <section className={`container ${classes["edit-product"]}`}>
      <BreadCrumb path={["Favourite & Promo", "Cold Brew", "Edit"]} />
      <div className={classes.content}>
        <div className={classes["image-container"]}>
          <img
            className={classes.image}
            src="/assets/images/products1.png"
            alt="product 1"
          />
        </div>
        <div className={classes.product}>
          <input type="text" className={classes.title} value={`Cold Brew`} />
          <input type="text" className={classes.price} value={` IDR 30.000`} />
          <textarea name="" className={classes.description} id="">
            {
              "Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours."
            }
          </textarea>
          <select className={`${classes.select}`}>
            <option value="" selected={true} disabled={true}>
              Select Size
            </option>
            <option value="R">R</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <select className={`${classes.select}`}>
            <option value="" selected={true} disabled={true}>
              Select Delivery Method
            </option>
            <option value="Dine">Dine In</option>
            <option value="Dine">Dine In</option>
            <option value="Dine">Dine In</option>
          </select>
          <div className={classes["add-container"]}>
            <div className={classes.qty}>
              <div className={classes.operator} onClick={subQtyHandler}>
                -
              </div>
              <input type="text" value={qty} />
              <div className={classes.operator} onClick={addQtyHandler}>
                +
              </div>
            </div>
            <button className={`btn ${classes["add-to-cart"]}`}>
              Add to cart
            </button>
          </div>
          <button className={`btn ${classes["save"]}`}>Save Change</button>
        </div>
      </div>
    </section>
  );
}
