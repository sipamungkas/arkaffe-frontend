import { useState, useEffect } from "react";

import { useParams } from "react-router";
import { connect } from "react-redux";
import axios from "axios";

import classes from "./ProductDetail.module.css";
import BreadCrumb from "../../components/breadcrumb/BreadCrumbV2";
import ProductInfo from "../../components/productdetail/ProductInfo";
import ButtonGroup from "../../components/productdetail/ButtonGroup";
import DescriptionCard from "../../components/productdetail/DescriptionCard";
import DeliveryMethod from "../../components/productdetail/DeliveryMethod";

const BASE_URL = process.env.REACT_APP_API;

function ProductDetail(props) {
  const [product, setProduct] = useState({});
  const ProductCategory = "Coffee";
  const ProductName = product.name;
  const { token } = props.loginReducer.user;
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    // getProduct(location.search);

    axios(`${BASE_URL}/product/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        setProduct(res.data.productInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, id]);
  return (
    <>
      <main className={classes["main-container"]}>
        <section className={classes["left-container"]}>
          <BreadCrumb path={[ProductCategory, ProductName]} />
          <ProductInfo product={product} />
          <ButtonGroup product={product} />
        </section>
        <section className={classes["right-container"]}>
          <DescriptionCard product={product} />
          <DeliveryMethod product={product} />
        </section>
      </main>
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    loginReducer: state.loginReducer,
  };
};
const connectedProductDetail = connect(mapStatetoProps)(ProductDetail);
export default connectedProductDetail;
