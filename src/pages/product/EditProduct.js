import BreadCrumb from "../../components/breadcrumb/BreadCrumbV2";

import classes from "./EditProduct.module.css";

export default function EditProduct() {
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
          <select name="" id="" className={classes.size}>
            <option value="" selected={true} disabled={true}>
              Select Size
            </option>
            <option value="R">R</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <select name="" id="" className={classes.size}>
            <option value="" selected={true} disabled={true}>
              Select Delivery Method
            </option>
            <option value="Dine">Dine In</option>
            <option value="Dine">Dine In</option>
            <option value="Dine">Dine In</option>
          </select>
          <div className={`d-flex flex-row justify-content-between`}>
            <input type="text" />
            <button className={classes["add-to-cart"]}>Add to cart</button>
          </div>
          <button className={classes["btn-save"]}>Save Change</button>
        </div>
      </div>
    </section>
  );
}
