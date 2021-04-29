import Promo from "../../components/product/promo/Promo";

import classes from "./Product.module.css";

export default function Product() {
  return (
    <main className={`container ${classes.Product} `}>
      <aside className={classes["promo-container"]}>
        <Promo />
      </aside>
    </main>
  );
}
