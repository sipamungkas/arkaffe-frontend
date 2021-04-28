import Promo from "../../components/product/promo/Promo";

import classes from "./Product.module.css";

export default function Product() {
  return (
    <main>
      <aside className={classes["promo-container"]}>
        <Promo />
      </aside>
    </main>
  );
}
