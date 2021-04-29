import Promo from "../../components/product/promo/Promo";
import MenuList from "../../components/product/menu/MenuList";

import classes from "./Product.module.css";

export default function Product() {
  return (
    <main className={`container ${classes.product} `}>
      <aside className={classes["promo-container"]}>
        <Promo />
      </aside>
      <section className={classes.menu}>
        <MenuList />
      </section>
    </main>
  );
}
