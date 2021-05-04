import classes from "./ProductInfo.module.css";

const BASE_URL = process.env.REACT_APP_API;

function ProductInfo(props) {
  const productName = props.product.name;
  const productPrice = props.product.price;
  return (
    <>
      <div className={classes["productinfo-container"]}>
        <img
          className={classes["img-product"]}
          alt="product_image"
          src={`${BASE_URL}/${props.product.imageProduct}`}
        ></img>
        <h1 className={classes["title-product"]}>{productName}</h1>
        <p className={classes["price-product"]}>IDR {productPrice}</p>
      </div>
    </>
  );
}

export default ProductInfo;
