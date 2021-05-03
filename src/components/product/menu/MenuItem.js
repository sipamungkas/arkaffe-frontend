import EditPencil from "../../editPencil/EditPencil";

import classes from "./MenuItem.module.css";

export default function MenuItem(props) {
  let { product, user } = props;
  const BASE_URL = process.env.REACT_APP_API;
  return (
    <div className={classes["menu-item"]}>
      {user.role === 1 ? (
        <div className={classes.edit}>
          <EditPencil />
        </div>
      ) : (
        ""
      )}

      <img
        className={classes.image}
        src={`${BASE_URL}${product.image_product}`}
        alt="food 1"
      />
      <h3 className={classes["menu-name"]}>{product.name}</h3>
      <span className={"classes.price"}>{`IDR ${product.price}`}</span>
    </div>
  );
}
